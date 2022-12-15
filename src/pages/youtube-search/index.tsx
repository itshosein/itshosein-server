import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { GetServerSidePropsContext } from "next";
import { useState, ChangeEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { YouTubeSearchResults } from "youtube-search";
import { grey } from "@mui/material/colors";

interface IYoutubeListItem {
  id: {
    videoId: any;
  };
  url: string;
  title: string;
  description: any;
  duration_raw: any;
  snippet: {
    url: string;
    duration: any;
    publishedAt: any;
    thumbnails: {
      id: any;
      url: any;
      default: any;
      high: any;
      height: any;
      width: any;
    };
    title: string;
    views: any;
  };
  views: any;
}

function YoutubeSearch() {
  const [search, setSearch] = useState("");
  const [videoResult, setVideoResult] = useState<IYoutubeListItem[] | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearch(e.currentTarget.value);
  };

  const handleSearchYoutube = async () => {
    setLoading(true);
    const result = await fetch(
      `https://www.itshosein.com/api/search-yt?q=${search}`
    );
    setLoading(false);
    if (result.status === 200) {
      const ytResult = (await result.json()) as IYoutubeListItem[];
      // const videos = ytResult.filter((res) => res.kind === "youtube#video");
      setVideoResult(ytResult);
    }
  };

  const handleVideoClick = (video: IYoutubeListItem) => {};

  return (
    <Container fixed>
      <Grid container xs={12}>
        <Grid xs={12} md={9}>
          <TextField
            fullWidth
            label="search youtube"
            value={search}
            onChange={handleSearchChange}
          />
        </Grid>
        <Grid xs={0} md={1} />
        <Grid
          xs={12}
          md={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 2, md: 0 },
          }}
        >
          <Button
            variant="contained"
            onClick={handleSearchYoutube}
            disabled={loading || !search}
          >
            {loading ? (
              <CircularProgress
                size={30}
                sx={{
                  color: "primary.dark",
                }}
              />
            ) : (
              <>
                Search
                <SearchIcon sx={{ ml: 1 }} />
              </>
            )}
          </Button>
        </Grid>

        {loading ? (
          <Skeleton sx={{ minHeight: "100px", width: "100%" }} />
        ) : (
          <Grid
            xs={12}
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {videoResult?.map((video) => {
              return (
                <Grid
                  sx={{
                    border: "1px solid",
                    borderColor: grey["400"],
                    borderRadius: "15px",
                    p: 2,
                  }}
                  onClick={() => handleVideoClick(video)}
                >
                  <Typography variant="h6">{video.title}</Typography>
                  <Typography variant="body1" mt={1}>
                    {video.description}
                  </Typography>
                  <Typography variant="body2" mt={4}>
                    {video.views} views
                  </Typography>
                  <Typography variant="body2" mt={4}>
                    {video.snippet.publishedAt}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default YoutubeSearch;
