import { FC, useState } from "react";
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
  const [pageScroll, setPageScroll] = useState(0);

  const handleWindowScroll = (scroll: number) => {
    setPageScroll(scroll);
  };

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        // maxWidth: `calc(${theme.breakpoints.values["lg"]}px - 38px)`,
        width: "100%",
        fontSize: "80%",
        padding: "2rem",
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
          maxWidth: `calc(${theme.breakpoints.values["lg"]}px - 38px)`,
          width: "100%",
          listStyle: "none",
          justifyContent: { xs: "center", md: "space-between" },
          flexWrap: { xs: "wrap", md: "nowrap" },
          padding: "0",
          display: "flex",
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
        <Grid item component="li">
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
        <Grid item component="li" flexBasis="24px">
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
            href="https://localhost:3000/Hosein_fathi.pdf"
            target="_blank"
          >
            <Button variant="contained">Resume</Button>
          </LinkWrapper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Nav;
