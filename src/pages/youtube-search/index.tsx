import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Icon,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { GetServerSidePropsContext } from "next";
import { useState, ChangeEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import youtubeSearch, {
  YouTubeSearchOptions,
  YouTubeSearchPageResults,
  YouTubeSearchResults,
} from "youtube-search";
import { grey } from "@mui/material/colors";

function YoutubeSearch() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<
    YouTubeSearchResults[] | null
  >(null);
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
      const ytResult = (await result.json()) as YouTubeSearchResults[];
      setSearchResult(ytResult);
    }
  };

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
          xs={4}
          md={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={handleSearchYoutube}
            disabled={loading}
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
            {searchResult?.map((video) => {
              return (
                <Grid
                  sx={{
                    border: "1px solid",
                    borderColor: grey["400"],
                    borderRadius: "15px",
                    p: 1,
                  }}
                >
                  <Typography variant="h5">{video.title}</Typography>
                  <Typography variant="h6">{video.description}</Typography>
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
