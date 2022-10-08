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
      <Typography variant="body1" component="h3">
        Who am I ?
      </Typography>
    </Box>
  );
}

export default AboutMe;
