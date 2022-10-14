import { FC, useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
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

interface NavProps {}

const Nav: FC<NavProps> = () => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const navRef = useRef<HTMLDivElement | undefined>(undefined);
  const [pageScroll, setPageScroll] = useState(0);

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

  return (
    <Box
      component="nav"
      ref={navRef}
      sx={{
        position: Boolean(pageScroll) ? "fixed" : "static",
        width: "100%",
        fontSize: "80%",
        padding: Boolean(pageScroll) ? "1rem" : "2rem",
        display: "flex",
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
      <Grid
        container
        component="ul"
        sx={{
          // maxWidth: `calc(${theme.breakpoints.values["lg"]}px - 38px)`,
          width: "100%",
          listStyle: "none",
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          flexWrap: { xs: "wrap", md: "nowrap" },
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Grid component="li" item xs={12} md={6}>
          <Box component="h2" textAlign={mdUp ? "start" : "center"}>
            <LinkWrapper
              href="/"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent={mdUp ? "start" : "center"}
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
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={6}
          sx={{
            justifyContent: { xs: "center", md: "end" },
            gap: "2rem",
            flexWrap: "nowrap",
          }}
        >
          <Grid item component="li">
            <LinkWrapper href="#experience">
              <Typography variant="h6" component="h2">
                Experience
              </Typography>
            </LinkWrapper>
          </Grid>
          <Grid item component="li">
            <LinkWrapper href="#projects">
              <Typography variant="h6" component="h2">
                Projects
              </Typography>
            </LinkWrapper>
          </Grid>
          <Grid item component="li">
            <LinkWrapper href="#about-me">
              <Typography variant="h6" component="h2">
                About
              </Typography>
            </LinkWrapper>
          </Grid>
          <Grid item component="li">
            <LinkWrapper href="#contact">
              <Typography variant="h6" component="h2">
                Contact
              </Typography>
            </LinkWrapper>
          </Grid>
          <Grid
            item
            component="li"
            sx={{ justifySelf: "center", alignSelf: "center" }}
          >
            <LinkWrapper
              href="https://www.linkedin.com/in/itshosein/"
              target="_blank"
            >
              <LinkedInIcon />
              <Typography variant="h6" component="h2" sx={visuallyHidden}>
                Linkedin
              </Typography>
            </LinkWrapper>
          </Grid>
          <Grid
            item
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
          </Grid>
          <Grid item component="li">
            <LinkWrapper
              sx={{ "&:hover": { textDecoration: "none" } }}
              download="Hosein Fathi Resume"
              href="https://drive.google.com/file/d/1cjwEQjjpQ2PQoWPkGiTbRWT2wstEnnkm/view?usp=sharing"
              target="_blank"
            >
              <Button variant="contained">Resume</Button>
            </LinkWrapper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Nav;
