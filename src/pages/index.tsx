import type { NextPage } from "next";
import { Box, Container } from "@mui/material";
import Nav from "@components/nav";
import IntroSection from "@components/intro-section";
import GradientDivider from "@components/gradient-divider";
import ContactMeSection from "@components/contact-me-section";
import SkillsSection from "@components/skills-section";
import AboutMe from "@components/about-me";

const Home: NextPage = () => {
  return (
    <Container>
      <Box component="main">
        <IntroSection />

        <GradientDivider />

        {/* <ContactMeSection /> */}
        <AboutMe />

        <GradientDivider />

        <SkillsSection />
        <GradientDivider />
      </Box>
    </Container>
  );
};

export default Home;
