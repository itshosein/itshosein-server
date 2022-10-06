import { Box, Grid, LinearProgress, Typography } from "@mui/material";

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
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box minWidth="20%" />
      </Box>
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
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  component="h3"
                  sx={{ width: "20%", display: "inline-block", mr: "4rem" }}
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
                  sx={{ width: "20%", display: "inline-block", mr: "4rem" }}
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
                  sx={{ width: "20%", display: "inline-block", mr: "4rem" }}
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
                  sx={{ width: "20%", display: "inline-block", mr: "4rem" }}
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
