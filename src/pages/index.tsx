import type { NextPage } from "next";
import { Box, Container } from "@mui/material";
import Nav from "@components/nav";
import IntroSection from "@components/intro-section";
import GradientDivider from "@components/gradient-divider";
import ContactMeSection from "@components/contact-me-section";
import SkillsSection from "@components/skills-section";

const Home: NextPage = () => {
  return (
    <Container>
      <Box component="main">
        <IntroSection />

        <GradientDivider />

        {/* <ContactMeSection /> */}

        <SkillsSection />
      </Box>
    </Container>
  );
};

export default Home;
