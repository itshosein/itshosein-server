import { Box, Container, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import fs from "fs";

function YtFiles(props: { files: string[] }) {
  const { files } = props;
  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
      {files.map((file) => {
        return (
          <Box
            sx={{
              p: 2,
              border: "2px solid",
              borderColor: "primary.main",
              borderRadius: "10px",
            }}
          >
            <Typography variant="h4">{file}</Typography>
          </Box>
        );
      })}
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const testFolder = "./public/yt/";
  const files: string[] = fs.readdirSync(testFolder);

  return {
    props: { files }, // will be passed to the page component as props
  };
};

export default YtFiles;
