import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC } from "react";
import { visuallyHidden } from "@mui/utils";
import LinkWrapper from "../link-wrapper";
import CodeIcon from "@mui/icons-material/Code";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

interface NavProps {}

const Nav: FC<NavProps> = () => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box component="nav" width="100%" fontSize="80%" padding="2rem 0" mt="2rem">
      <Grid
        container
        component="ul"
        sx={{
          listStyle: "none",
          justifyContent: { xs: "center", md: "space-around" },
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
        padding="0"
        display="flex"
        alignItems="center"
        gap="2rem"
      >
        <Grid component="li" item xs={12} md={6}>
          <Box component="h1" textAlign={mdUp ? "start" : "center"}>
            <LinkWrapper
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
            </LinkWrapper>
          </Box>
        </Grid>

        <Grid item component="li">
          <LinkWrapper href="#projects">
            <Typography variant="body1">Projects</Typography>
          </LinkWrapper>
        </Grid>
        <Grid item component="li">
          <LinkWrapper href="#about-me">
            <Typography variant="body1">About</Typography>
          </LinkWrapper>
        </Grid>
        <Grid item component="li">
          <LinkWrapper href="#contact">
            <Typography variant="body1">Contact</Typography>
          </LinkWrapper>
        </Grid>
        <Grid item component="li">
          <LinkWrapper
            href="https://www.linkedin.com/in/itshosein/"
            target="_blank"
          >
            <LinkedInIcon />
            <Typography variant="body1" sx={visuallyHidden}>
              Linkedin
            </Typography>
          </LinkWrapper>
        </Grid>
        <Grid item component="li" flexBasis="24px">
          <LinkWrapper href="https://github.com/itshosein" target="_blank">
            <GitHubIcon />
            <Typography variant="body1" sx={visuallyHidden}>
              Github
            </Typography>
          </LinkWrapper>
        </Grid>
        <Grid item component="li">
          <LinkWrapper href="/" sx={{ "&:hover": { textDecoration: "none" } }}>
            <Button variant="contained">Resume</Button>
          </LinkWrapper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Nav;
