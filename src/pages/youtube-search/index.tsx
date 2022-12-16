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

export interface IYoutubeListItem {
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
  b64?: string;
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
    try {
      const result = await fetch(
        `https://www.itshosein.com/api/search-yt?q=${search}`
      );
      setLoading(false);
      if (result.status === 200) {
        const ytResult = (await result.json()) as IYoutubeListItem[];
        setVideoResult(ytResult);
      }
    } catch (e) {
      setLoading(false);
    }
  };

  const handleVideoClick = (video: IYoutubeListItem) => {};

  return (
    <Container fixed>
      <Grid container xs={12}>
        <Grid item xs={12} md={9}>
          <TextField
            fullWidth
            label="search youtube"
            value={search}
            onChange={handleSearchChange}
          />
        </Grid>
        <Grid item xs={0} md={1} />
        <Grid
          item
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
            item
            container
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
                  item
                  container
                  onClick={() => handleVideoClick(video)}
                >
                  <Typography variant="h6">{video.title}</Typography>
                  <Typography variant="body1" mt={1}>
                    {video.description}
                  </Typography>
                  <Typography variant="body2" mt={4}>
                    {video.views} views
                  </Typography>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="body2">
                      {video.snippet.publishedAt}
                    </Typography>
                    <Typography variant="body2">
                      {video.duration_raw}
                    </Typography>
                  </Grid>
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
