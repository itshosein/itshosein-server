import { Box, Typography } from "@mui/material";
import SkillRow from "./components/skill-row";
import tsLogo from "../../../public/skills-logo/ts-logo.svg";
import jsLogo from "../../../public/skills-logo/js-logo.png";
import reactLogo from "../../../public/skills-logo/react-logo.png";
import reduxLogo from "../../../public/skills-logo/redux-logo.png";
import cssLogo from "../../../public/skills-logo/css-logo.png";
import gitLogo from "../../../public/skills-logo/git-logo.png";
import webpackLogo from "../../../public/skills-logo/webpack-logo.png";

export interface ISkill {
  name: string;
  statePercent: number;
  statusLabel: string;
  color: string;
  logo?: any;
}
const skills: ISkill[] = [
  {
    name: "Javascript",
    statePercent: 80,
    statusLabel: "Proficient",
    color: "#fcdc00",
    logo: jsLogo,
  },
  {
    name: "Typescript",
    statePercent: 70,
    statusLabel: "Proficient",
    color: "#3178c6",
    logo: tsLogo,
  },
  {
    name: "React.js",
    statePercent: 80,
    statusLabel: "Proficient",
    color: "#61dafb",
    logo: reactLogo,
  },
  {
    name: "Redux.js",
    statePercent: 80,
    statusLabel: "Proficient",
    color: "#593d88",
    logo: reduxLogo,
  },
  {
    name: "Next.js",
    statePercent: 80,
    statusLabel: "Proficient",
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
    statusLabel: "Proficient",
    color: "#2449d8",
    logo: cssLogo,
  },
  {
    name: "Git",
    statePercent: 70,
    statusLabel: "Proficient",
    color: "#e44c30",
    logo: gitLogo,
  },
  {
    name: "Webpack",
    statePercent: 50,
    statusLabel: "Need Improvement",
    color: "#86caed",
    logo: webpackLogo,
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
