import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";
import { visuallyHidden } from "@mui/utils";
import Link from "./Link";
import CodeIcon from "@mui/icons-material/Code";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

interface NavProps {}

const Nav: FC<NavProps> = () => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box component="nav" width="100%" fontSize="80%" padding="2rem" mt="2rem">
      <Grid
        container
        component="ul"
        sx={{ listStyle: "none" }}
        padding="0"
        display="flex"
        justifyContent={mdUp ? "space-around" : "center"}
        alignItems="center"
        flexWrap={mdUp ? "nowrap" : "wrap"}
        gap="2rem"
      >
        <Grid component="li" item xs={12} md={6}>
          <Box component="h1" textAlign={mdUp ? "start" : "center"}>
            <Link
              href="/"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent={mdUp ? "start" : "center"}
            >
              <CodeIcon />
              <Typography variant="h5" component="span" ml="0.5rem">
                Hosein Fathi
              </Typography>
            </Link>
          </Box>
        </Grid>

        <Grid item component="li">
          <Link href="#projects">
            <Typography variant="body1">Projects</Typography>
          </Link>
        </Grid>
        <Grid item component="li">
          <Link href="#about-me">
            <Typography variant="body1">About</Typography>
          </Link>
        </Grid>
        <Grid item component="li">
          <Link href="#contact">
            <Typography variant="body1">Contact</Typography>
          </Link>
        </Grid>
        <Grid item component="li">
          <Link href="https://www.linkedin.com/in/itshosein/" target="_blank">
            <LinkedInIcon />
            <Typography variant="body1" sx={visuallyHidden}>
              Linkedin
            </Typography>
          </Link>
        </Grid>
        <Grid item component="li" flexBasis="24px">
          <Link href="https://github.com/itshosein" target="_blank">
            <GitHubIcon />
            <Typography variant="body1" sx={visuallyHidden}>
              Github
            </Typography>
          </Link>
        </Grid>
        <Grid item component="li">
          <Link href="#">
            <Typography variant="body1" /* sx={visuallyHidden} */>
              Resume
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Nav;
