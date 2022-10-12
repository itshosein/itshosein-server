import { FC } from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import { ISkill } from "@components/index/skills-section";
import Image from "next/future/image";
import { useInView } from "react-intersection-observer";

interface SkillRowProps {
  skill: ISkill;
  isBorderAllowed: boolean;
}

const SkillRow: FC<SkillRowProps> = ({ skill, isBorderAllowed }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <Box
      ref={ref}
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
        paddingBottom: isBorderAllowed ? "2rem" : "0",
        transition: "all 0.3s",
        transform: `translateX(${inView ? "0" : "-100px"})`,
        opacity: inView ? "1" : "0",
      }}
    >
      <Box
        sx={{
          gridColumn: { xs: "1/3", md: "1/2" },
          display: "flex",
          justifyContent: { xs: "center", md: skill.logo ? "center" : "start" },
          alignItems: "center",
          padding: "1rem",
          gap: "1rem",
          "& img": {
            flexBasis: "30px",
          },
          backgroundColor: (theme) => theme.palette.grey["900"],
          borderRadius: "10px",
        }}
      >
        <Typography
          component="h3"
          color="text.primary"
          variant="h5"
          sx={{
            textAlign: { xs: "center", md: "start" },
            display: "inline-block",
            color: skill.color,
          }}
        >
          {skill.name}
        </Typography>
        {skill.logo && (
          <Image
            src={skill.logo}
            alt={`${skill.name}-logo`}
            width={30}
            height={30}
          />
        )}
      </Box>

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
          variant={inView ? "determinate" : "indeterminate"}
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
