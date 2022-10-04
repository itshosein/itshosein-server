import type { NextPage } from "next";
import { Grid, Box, Container, Typography } from "@mui/material";
import Nav from "../components/Nav";
import IntroSection from "../components/IntroSection";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box component="main">
        <Nav />
        <IntroSection />
      </Box>
    </Container>
  );
};

export default Home;
