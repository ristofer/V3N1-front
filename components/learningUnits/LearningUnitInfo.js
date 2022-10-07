import { Typography, Alert, Card, CardContent, Grid } from "@mui/material";
import { useOperationMethod } from "react-openapi-client";
import Loader from "../common/Loader";
import useFetch from "../../hooks/use-fetch";
import PreviousPage from "../common/PreviousPage";
import NewResource from "../resources/NewResource";

export default function LearningUnitInformation({ learningUnitId }) {
  const { data: learningUnit, error } = useFetch(
    `/api/learning_units/${learningUnitId}`
  );

  const [createResource] = useOperationMethod("createResource");
  const { mutate } = useFetch(
    `/api/learning_units/${learningUnitId}/resources`
  );

  if (!learningUnit) {
    return <Loader />;
  }

  if (error) {
    return <Alert severity="error">Error</Alert>;
  }

  const onSubmit = async (name, url, description) => {
    await createResource(learningUnitId, {
      name,
      url,
      description,
    });
    mutate();
  };

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
          <Grid item md={6}>
            <Grid item md={6}>
              <Typography variant="subtitle1" color="textSecondary">
                <i>Learning unit</i>
              </Typography>

              <Typography variant="h3">{learningUnit.name}</Typography>

              <Typography variant="h6">{learningUnit.description}</Typography>
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
              <NewResource onSubmit={onSubmit} />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
