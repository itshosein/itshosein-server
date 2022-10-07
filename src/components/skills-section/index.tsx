import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import styled from "@emotion/styled";

const GridSkillRow = styled(Box)`
  width: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
  gap: 4rem;
`;

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
        <GridSkillRow component="div">
          <Box
            sx={{
              display: "inline-block",
              gridColumn: 1 / 2,
            }}
          ></Box>
          <Box sx={{ width: "80%", gridColumn: 2 / 3 }}></Box>
        </GridSkillRow>
        {Array.isArray(skills) &&
          skills.map((skill) => {
            return (
              <GridSkillRow component="div">
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
              </GridSkillRow>
            );
          })}
      </Box>
    </Box>
  );
}

export default SkillsSection;
