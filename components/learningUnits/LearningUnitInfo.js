import { Typography, Alert, Card, CardContent, Grid } from "@mui/material";
import Loader from "../common/Loader";
import useFetch from "../../hooks/use-fetch";
import PreviousPage from "../common/PreviousPage";

export default function LearningUnitInformation({ learningUnitId }) {
  const { data: learningUnit, error } = useFetch(
    `/api/learning_units/${learningUnitId}`
  );

  if (!learningUnit) {
    return <Loader />;
  }

  if (error) {
    return <Alert severity="error">Error</Alert>;
  }

  return (
    <Card>
      <CardContent>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 !important",
          }}
        >
          <Grid direction="column" item md={6}>
            <Grid direction="row" md={6}>
              <Typography variant="h3" component="div">
                {learningUnit.name}
              </Typography>

              <Typography variant="h6" component="div">
                {learningUnit.description}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Grid item>
              <PreviousPage goBackText="Back to curriculum" />
            </Grid>

            <Grid item>
              <PreviousPage goBackText="Back " />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
