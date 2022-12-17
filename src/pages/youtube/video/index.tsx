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
    if (router.query.name && typeof router.query.name == "string") {
      setFileName(router.query.name);
    } else if (router.query.v) {
      try {
        setLoading(true);
        const response = await fetch(
          `https://itshosein.com/api/download-yt?v=${router.query.v}`
        );
        const data = await response.json();
        if (data.name) {
          setFileName(`${data.name}.mp4`);
        }
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if ((router.query.name || router.query.v) && !loading) {
      getData();
    }
  }, [router.query]);

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
          url={`https://itshosein.com/api/serve-youtube?name=${encodeURIComponent(
            fileName
          )}`}
        />
      )}
    </Container>
  );
}

export default YoutubeVideos;
