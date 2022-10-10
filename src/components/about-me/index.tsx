import { Box, Typography } from "@mui/material";

function AboutMe() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        padding: "2rem 0",
        margin: "4rem 0",
      }}
    >
      <Typography variant="h3" component="h2" textAlign="center" mb="4rem">
        Who am I ?
      </Typography>
      <Typography variant="h6" component="h3" lineHeight={3}>
        I am 25 years old software engineer that lives in Iran. I started my
        journey as a programmer since four years ago at university where I
        encountered c++ and get in love with coding, since then I learned the
        fundamentals of programming and started my front-end career with lots of
        courses online from Html to CSS and React.js.
        <br /> I started to work in a real company in February 2020 as a React
        developer in Setare Aval that is an Iranian financial app.
      </Typography>
    </Box>
  );
}

export default AboutMe;
