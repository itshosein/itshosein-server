import type { NextPage } from "next";
import { Grid, Box, Container, Typography } from "@mui/material";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box component="main">
        <Nav />
      </Box>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Box>
    </Container>
  );
};

export default Home;
