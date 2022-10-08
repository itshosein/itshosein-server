import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useId } from "react";

function SkillsSection() {
  const skills = [
    {
      name: "Javascript",
      percent: 80,
    },
    {
      name: "Typescript",
      percent: 70,
    },
    {
      name: "CSS",
      percent: 80,
    },
  ];

  const id = useId();

  console.log(id);

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        mt: "4rem",
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
          gap: "2rem",
        }}
      >
        {Array.isArray(skills) &&
          skills.map((skill) => {
            return (
              <Box
                component="div"
                key={id}
                sx={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "20% 80%",
                  alignItems: "center",
                  gap: "4rem",
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    display: "inline-block",
                  }}
                  color="text.primary"
                  variant="h5"
                >
                  {skill.name}
                </Typography>
                <Box sx={{ width: "80%" }}>
                  <LinearProgress
                    value={skill.percent}
                    sx={{
                      height: "10px",
                    }}
                    variant="determinate"
                  />
                </Box>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
}

export default SkillsSection;
