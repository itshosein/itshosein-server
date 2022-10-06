import { Box, Grid, LinearProgress, Typography } from "@mui/material";

function SkillsSection() {
  const skills = [
    {
      name: "Typescript",
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
      {Array.isArray(skills) &&
        skills.map((skill) => {
          return (
            <Box
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                component="h3"
                sx={{ display: "inline-block", mr: "4rem" }}
                color="text.primary"
                variant="h5"
              >
                {skill.name}
              </Typography>
              <Box sx={{ width: "100%" }}>
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
  );
}

export default SkillsSection;
