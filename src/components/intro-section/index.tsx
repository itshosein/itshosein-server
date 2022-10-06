import { FC } from "react";
import { Grid, Typography } from "@mui/material";
import LinkWrapper from "@components/link-wrapper";

const IntroSection: FC = () => {
  return (
    <Grid
      container
      component="section"
      sx={{
        width: "100%",
        padding: {
          xs: "12rem 0 10rem",
          md: "10rem 0 10rem",
        },
        margin: "0 auto",
        justifyContent: "flex-start",
        flexDirection: "column",
      }}
    >
      <Typography variant="body1" padding="1rem 0" lineHeight="2.5">
        Hi, my name is{" "}
        <Typography
          display="block"
          component="span"
          variant="h4"
          sx={{ fontSize: { md: "4rem" } }}
          color="secondary.dark"
        >
          Hosein Fathi.
        </Typography>
      </Typography>
      <Typography variant="h4" component="h2" sx={{ fontSize: { md: "4rem" } }}>
        I develop the <em>front end of websites.</em>
      </Typography>

      <Typography variant="h6" fontWeight={400} component="p" margin="1rem 0">
        I'm a developer specializing in HTML, CSS, JavaScript and ReactJs.
      </Typography>

      <Typography variant="h6" fontWeight={400} component="p" margin="1rem 0">
        Currently, I'm working at
        <LinkWrapper
          href="https://www.linkedin.com/company/setareaval/mycompany/verification/"
          target="_blank"
          ml="0.5rem"
        >
          SetareAval Corp.
        </LinkWrapper>
      </Typography>
    </Grid>
  );
};

export default IntroSection;