import { Typography, Grid } from "@mui/material";

export default function Custom404() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "90vh" }}
    >
      <Typography variant="h3">
        Hmmm... this page does not seem to exist
      </Typography>
      <Typography variant="h6">(Error 404)</Typography>
    </Grid>
  );
}
