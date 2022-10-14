import { Grid, Typography } from "@mui/material";

function Footer() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          padding: "2rem",
          position: "relative",
          left: 0,
          right: 0,
          borderTop: (theme) => `1px solid ${theme.palette.grey["100"]}`,
        }}
      >
        <Typography
          component="h4"
          variant="h6"
          sx={{
            textAlign: "center",
          }}
        >
          &copy;Hosein Fathi portfolio all rights reserved
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
