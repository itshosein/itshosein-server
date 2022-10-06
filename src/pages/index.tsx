import type { NextPage } from "next";
import { Box, Container } from "@mui/material";
import Nav from "@components/nav";
import IntroSection from "@components/intro-section";
import GradientDivider from "@components/gradient-divider";
import ContactMeSection from "@components/contact-me-section";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box component="main">
        <Nav />
        <IntroSection />

        <GradientDivider />

        <ContactMeSection />
      </Box>
    </Container>
  );
};

export default Home;
