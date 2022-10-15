import { FC, useState, useRef } from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import LinkWrapper from "@components/index/link-wrapper";
import CodeIcon from "@mui/icons-material/Code";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import dynamic from "next/dynamic";
const WindowScrollY = dynamic(() => import("./component/window-scroll-y"), {
  ssr: false,
});
import MenuIcon from "@mui/icons-material/Menu";

interface NavProps {}

const Nav: FC<NavProps> = () => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const navRef = useRef<HTMLDivElement | undefined>(undefined);
  const [pageScroll, setPageScroll] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleWindowScroll = (scroll: number) => {
    if (
      navRef?.current?.clientHeight &&
      scroll - navRef.current?.offsetHeight > -5
    ) {
      setPageScroll(scroll);
    } else {
      setPageScroll(0);
    }
  };

  function handleClickMobileMenu() {
    setShowMobileMenu((pre) => !pre);
  }

  return (
    <Box
      component="nav"
      ref={navRef}
      sx={{
        position: Boolean(pageScroll) ? "fixed" : "static",
        width: "100%",
        fontSize: "80%",
        padding: Boolean(pageScroll) ? "1rem" : "2rem",
        display: "grid",
        gridTemplateRows: { xs: "0fr 0fr", md: "1fr" },
        gridTemplateColumns: "1fr 1fr",
        gap: showMobileMenu ? "2rem 0" : "0",
        justifyContent: "center",
        backgroundColor: (theme) => theme.palette.background.default,
        zIndex: (theme) => theme.zIndex.appBar,
        transition: "all 0.3s",
        borderBottom: (theme) =>
          Boolean(pageScroll)
            ? `1px solid ${theme.palette.grey["100"]}`
            : "1px solid transparent",
      }}
    >
      <WindowScrollY scrollCB={handleWindowScroll} />

      <Box sx={{ flexBasis: "50%" }}>
        <Box component="h2" textAlign={mdUp ? "start" : "center"}>
          <LinkWrapper
            href="/"
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="start"
          >
            <CodeIcon />
            <Typography
              variant="h5"
              fontWeight={500}
              component="span"
              ml="0.5rem"
            >
              Hosein Fathi
            </Typography>
          </LinkWrapper>
        </Box>
      </Box>
      <MenuIcon
        sx={{
          display: { xs: "inline-block", md: "none" },
          justifySelf: "end",
          alignSelf: "center",
          position: "relative",
          zIndex: "1",
        }}
        onClick={handleClickMobileMenu}
      />

      <Box
        component="ul"
        sx={{
          gridColumn: { xs: "1 / 3", md: "2 / 3" },
          display:
            /* { xs: showMobileMenu ? "flex" : "none", md: "flex" } */ "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "end",
          gap: "2rem",
          flexWrap: "nowrap",
          listStyle: "none",
          textAlign: "center",
          transition: "all 0.3s",
          height: { xs: showMobileMenu ? "100%" : 0, md: "auto" },
          opacity: { xs: showMobileMenu ? "1" : "0", md: "1" },
        }}
      >
        <Box component="li">
          <LinkWrapper href="#experience">
            <Typography variant="h6" component="h2">
              Experience
            </Typography>
          </LinkWrapper>
        </Box>
        <Box component="li">
          <LinkWrapper href="#projects">
            <Typography variant="h6" component="h2">
              Projects
            </Typography>
          </LinkWrapper>
        </Box>
        <Box component="li">
          <LinkWrapper href="#about-me">
            <Typography variant="h6" component="h2">
              About
            </Typography>
          </LinkWrapper>
        </Box>
        <Box component="li">
          <LinkWrapper href="#contact">
            <Typography variant="h6" component="h2">
              Contact
            </Typography>
          </LinkWrapper>
        </Box>
        <Box
          sx={{
            justifySelf: "center",
            alignSelf: "center",
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Box component="li">
            <LinkWrapper
              href="https://www.linkedin.com/in/itshosein/"
              target="_blank"
            >
              <LinkedInIcon />
              <Typography variant="h6" component="h2" sx={visuallyHidden}>
                Linkedin
              </Typography>
            </LinkWrapper>
          </Box>
          <Box
            component="li"
            sx={{
              justifySelf: "center",
              alignSelf: "center",
              flexBasis: "24px",
            }}
          >
            <LinkWrapper href="https://github.com/itshosein" target="_blank">
              <GitHubIcon />
              <Typography variant="h6" component="h2" sx={visuallyHidden}>
                Github
              </Typography>
            </LinkWrapper>
          </Box>
        </Box>

        <Box component="li">
          <LinkWrapper
            sx={{ "&:hover": { textDecoration: "none" } }}
            download="Hosein Fathi Resume"
            href="https://drive.google.com/file/d/1cjwEQjjpQ2PQoWPkGiTbRWT2wstEnnkm/view?usp=sharing"
            target="_blank"
          >
            <Button variant="contained">Resume</Button>
          </LinkWrapper>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
