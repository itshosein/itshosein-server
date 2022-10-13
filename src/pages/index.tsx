import type { NextPage } from "next";
import { Box, Container } from "@mui/material";
import IntroSection from "@components/index/intro-section";
import GradientDivider from "@components/index/gradient-divider";
import SkillsSection from "@components/index/skills-section";
import AboutMe from "@components/index/about-me";
import Head from "next/head";
import WorkExperience from "@components/index/work-experience";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hosein Fathi</title>
      </Head>
      <Container>
        <Box component="main">
          <IntroSection />

          <GradientDivider />

          {/* <ContactMeSection /> */}
          <AboutMe />

          <GradientDivider />

          <WorkExperience />

          <GradientDivider />
          <SkillsSection />
        </Box>
      </Container>
    </>
  );
};

export default Home;
