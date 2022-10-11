import type { NextPage } from "next";
import { Box, Container } from "@mui/material";
import Nav from "@components/nav";
import IntroSection from "@components/index/intro-section";
import GradientDivider from "@components/index/gradient-divider";
import ContactMeSection from "@components/index/contact-me-section";
import SkillsSection from "@components/index/skills-section";
import AboutMe from "@components/index/about-me";

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
