import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Skeleton,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { GetServerSidePropsContext } from "next";
import { useState, ChangeEvent, MouseEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { YouTubeSearchResults } from "youtube-search";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/router";

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
}

function YoutubeSearch() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [videoResult, setVideoResult] = useState<IYoutubeListItem[] | null>(
    null
  );
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearch(e.currentTarget.value);
  };

  const handleSearchYoutube = async () => {
    setThumbnails([]);
    setVideoResult([]);
    setLoading(true);
    try {
      const result = await fetch(
        `https://www.itshosein.com/api/search-yt?q=${search}`
      );
      setLoading(false);
      if (result.status === 200) {
        const ytResult = (await result.json()) as IYoutubeListItem[];
        setThumbnails(new Array(ytResult.length + 1).fill(""));
        setVideoResult(ytResult);
      }
    } catch (e) {
      setLoading(false);
    }
  };

  const handleClickThumbnail = async (
    video: IYoutubeListItem,
    index: number,
    e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>
  ) => {
    e.stopPropagation();
    if (!thumbnails[index]) {
      try {
        const result = await fetch(
          `https://www.itshosein.com/api/dl-thumbnail?url=${encodeURIComponent(
            video.snippet.thumbnails.default.url
          )}`
        );
        if (result.status === 200) {
          const ytResult = await result.json();
          if (ytResult.fileB64) {
            setThumbnails((pre) => {
              let newState = [...pre];
              newState[index] = ytResult.fileB64;
              return newState;
            });
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleVideoClick = (video: IYoutubeListItem) => {
    router.push({
      pathname: "/youtube/video",
      query: { v: video.id.videoId },
    });
  };

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
            {videoResult?.map((video, index) => {
              return (
                <Grid
                  sx={{
                    border: "1px solid",
                    borderColor: grey["400"],
                    borderRadius: "15px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 2,
                    py: 4,
                  }}
                  item
                  container
                  onClick={() => handleVideoClick(video)}
                >
                  <Box>
                    {thumbnails[index] ? (
                      <Box
                        component={"img"}
                        src={thumbnails[index]}
                        alt="video_thumbnail"
                        sx={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    ) : (
                      <Box
                        component={Typography}
                        sx={{
                          // width: video.snippet.thumbnails.default.width,
                          // height: video.snippet.thumbnails.default.height,
                          minHeight: "200px",
                          border: "1px solid white",
                          borderRadius: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onClick={(e) => handleClickThumbnail(video, index, e)}
                      >
                        click for video thumbnail
                      </Box>
                    )}
                  </Box>
                  <Box>
                    <Typography variant="h6">{video.title}</Typography>
                    <Typography variant="body1" mt={1}>
                      {video.description}
                    </Typography>
                    <Typography variant="body2" mt={4}>
                      {video.views
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      views
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
                  </Box>
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
