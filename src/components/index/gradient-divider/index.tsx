import { Box } from "@mui/material";

function GradientDivider() {
  return (
    <Box
      component="div"
      sx={{
        background:
          "linear-gradient(90deg,rgba(136, 191, 150, 1) 0%,rgba(134, 251, 251, 1) 100%,rgba(0, 212, 255, 1) 100% )",
        height: "2px",
        position: "absolute",
        left: "0",
        right: "0",
      }}
    />
  );
}

export default GradientDivider;
