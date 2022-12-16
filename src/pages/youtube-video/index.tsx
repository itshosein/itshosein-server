import { Container, Grid, Skeleton } from "@mui/material";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

function YoutubeVideos() {
  const router = useRouter();
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    if (router.query.v) {
      try {
        const response = await fetch(
          `https://itshosein.com/api/download-yt?v=${router.query.v}`
        );
        const data = await response.json();
        if (data.name) {
          setFileName(data.name);
        }
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container fixed sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      {loading ? (
        <Skeleton
          sx={{
            width: "100%",
            minHeight: "300px",
          }}
        />
      ) : (
        <ReactPlayer
          controls
          muted
          autoPlay
          url={`https://www.itshosein.com/yt/${fileName}`}
        />
      )}
    </Container>
  );
}

export default YoutubeVideos;
