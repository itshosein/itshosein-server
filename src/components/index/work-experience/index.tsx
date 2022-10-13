import { Box, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { useInView } from "react-intersection-observer";

function WorkExperience() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
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

      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}

export default WorkExperience;
