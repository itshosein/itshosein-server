import { FC, useId } from "react";
import { Box, LinearProgress, Typography, Stack } from "@mui/material";
import { ISkills } from "@components/skills-section";

interface SkillRowProps {
  skill: ISkills;
  isBorderAllowed: boolean;
}

const SkillRow: FC<SkillRowProps> = ({ skill, isBorderAllowed }) => {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateRows: {
          xs: "1fr 1fr",
          md: "100%",
        },
        gridTemplateColumns: {
          xs: "2fr 1fr",
          md: "1fr 3fr 1fr",
        },
        alignItems: "center",
        gap: { xs: "1rem 2rem", md: "4rem" },
        borderBottom: (theme) =>
          isBorderAllowed ? `1px solid ${theme.palette.grey["800"]}` : "none",
        paddingBottom: isBorderAllowed ? "1rem" : "0",
      }}
    >
      <Typography
        component="h3"
        color="text.primary"
        variant="h5"
        sx={{
          gridColumn: { xs: "1/3", md: "1/2" },
          textAlign: { xs: "center", md: "start" },
          color: skill.color,
        }}
      >
        {skill.name}
      </Typography>
      <Box
        sx={{
          width: "100%",
          gridRow: { xs: "2/3", md: "1/2" },
          gridColumn: { xs: "1/2", md: "2/3" },
        }}
      >
        <LinearProgress
          value={skill.statePercent}
          sx={{
            height: "10px",
          }}
          variant="determinate"
        />
      </Box>
      <Typography
        component="h3"
        sx={{
          display: "inline",
          whiteSpace: "nowrap",
        }}
        color="text.primary"
        variant="h5"
      >
        {skill.statusLabel}
      </Typography>
    </Box>
  );
};

export default SkillRow;
