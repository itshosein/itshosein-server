import { FC } from "react";
import { Box, Typography } from "@mui/material";
import LinkWrapper from "@components/index/link-wrapper";
import { useInView } from "react-intersection-observer";

const IntroSection: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        width: "100%",
        padding: "2rem 0 10rem",
        margin: "0 auto",
        justifyContent: "flex-start",
        flexDirection: "column",
        transition: "all 1s",
        transform: `translateX(${inView ? "0" : "-100px"})`,
        opacity: inView ? "1" : "0",
      }}
    >
      <Typography variant="body1" padding="1rem 0" lineHeight="2.5">
        Hi, my name is{" "}
        <Typography
          display="block"
          component="span"
          variant="h4"
          sx={{ fontSize: { md: "4rem" } }}
          color="success.dark"
        >
          Hosein Fathi.
        </Typography>
      </Typography>
      <Typography variant="h4" component="h2" sx={{ fontSize: { md: "4rem" } }}>
        I develop the <em>front end of websites.</em>
      </Typography>

      <Typography variant="h6" fontWeight={400} component="p" margin="1rem 0">
        I'm a developer specializing in HTML, CSS, JavaScript and ReactJs.
      </Typography>

      <Typography variant="h6" fontWeight={400} component="p" margin="1rem 0">
        Currently, I'm working at
        <LinkWrapper
          href="https://www.linkedin.com/company/setareaval/mycompany/verification/"
          target="_blank"
          ml="0.5rem"
        >
          SetareAval Corp.
        </LinkWrapper>
      </Typography>
    </Box>
  );
};

export default IntroSection;
