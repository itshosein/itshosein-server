import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Timeline, TimelineItem, timelineItemClasses } from "@mui/lab";
import { useInView } from "react-intersection-observer";
import WorkExperienceItem from "./components/work-experience-item";

export interface IWorkExperienceObj {
  name: string;
  role: string;
  desc: string[];
  date: string;
}

const workExperienceObj: IWorkExperienceObj[] = [
  {
    name: "TestHub",
    role: "Frontend Developer",
    date: "September 2019 - January 2020",
    desc: [
      "Coded using HTML, CSS, and JavaScript to develop landing websites for both mobile and desktop platforms in the internship period",
    ],
  },
  {
    name: "Setare Aval",
    role: "Frontend Developer",
    date: "February 2020 - Present",
    desc: [
      "Coded using HTML, CSS and JavaScript with Reactjs to develop features for both mobile and desktopplatforms.",
      "Coded two landing websites with Nextjs that contains theming",
      "Coordinated with digital content manager to obtain content for updates and expansions.",
      "Transformed native applications into mobile-friendly products.",
      "Developed mobile-friendly apps with Typescript, Reactjs, styled-components, react-query, redux, and redux-toolkit with a costume design system",
      "Refactored a spaghetti codebase from scratch for better code readability.",
      "Produced websites compatible with multiple browsers.",
    ],
  },
];

function WorkExperience() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        width: "100%",
        margin: "4rem 0",
        padding: "2rem 0",
        transition: "all 1s",
        transform: `translateX(${inView ? "0" : "-100px"})`,
        opacity: inView ? "1" : "0",
      }}
    >
      <Typography variant="h4" component="h2" textAlign="center" mb="4rem">
        Work Experience
      </Typography>

      <Timeline
        position="right"
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {workExperienceObj.map((experience, indexExperience) => {
          return (
            <TimelineItem key={indexExperience}>
              <WorkExperienceItem experience={experience} mdUp={mdUp} />
            </TimelineItem>
          );
        })}
      </Timeline>
    </Box>
  );
}

export default WorkExperience;
