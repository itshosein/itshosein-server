import type { NextPage } from "next";
import { Box, Container } from "@mui/material";
import Nav from "@components/nav/Nav";
import IntroSection from "@components/intro-section/IntroSection";
import GradientDivider from "@components/gradient-divider/GradientDivider";
import ContactMeSection from "@components/contact-me-section/ContactMeSection";

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
