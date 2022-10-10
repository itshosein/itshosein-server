import { Box, Typography } from "@mui/material";
import SkillRow from "./components/skill-row";

export interface ISkills {
  name: string;
  statePercent: number;
  statusLabel: string;
  color: string;
}
const skills: ISkills[] = [
  {
    name: "Javascript",
    statePercent: 80,
    statusLabel: "Well Informed",
    color: "#3178c6",
  },
  {
    name: "Typescript",
    statePercent: 70,
    statusLabel: "Well Informed",
    color: "#fcdc00",
  },
  {
    name: "React.js",
    statePercent: 80,
    statusLabel: "Well Informed",
    color: "#61dafb",
  },
  {
    name: "Redux.js",
    statePercent: 80,
    statusLabel: "Well Informed",
    color: "#593d88",
  },
  {
    name: "Next.js",
    statePercent: 80,
    statusLabel: "Well Informed",
    color: "#d3d3d3",
  },
  {
    name: "Express.js",
    statePercent: 60,
    statusLabel: "Need Improvement",
    color: "#919191",
  },
  {
    name: "CSS",
    statePercent: 80,
    statusLabel: "Well Informed",
    color: "#2449d8",
  },
];

function SkillsSection() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        margin: "4rem 0",
        padding: "2rem 0",
      }}
    >
      <Typography variant="h4" component="h2" textAlign="center" mb="4rem">
        Skills
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
        }}
      >
        {Array.isArray(skills) &&
          skills.map((skill, index, arr) => {
            return (
              <SkillRow
                skill={skill}
                key={index}
                isBorderAllowed={index + 1 != arr.length}
              />
            );
          })}
      </Box>
    </Box>
  );
}

export default SkillsSection;
