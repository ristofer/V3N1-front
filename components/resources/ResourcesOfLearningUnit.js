import React from "react";
import { Alert, Grid } from "@mui/material";
import useFetch from "../../hooks/use-fetch";
import Loader from "../common/Loader";
import Resource from "./Resource";

export default function ResourcesOfLearningUnit({ learningUnitId }) {
  const { data, error } = useFetch(
    `/api/learning_units/${learningUnitId}/resources`
  );

  if (error) return <Alert severity="error">Error</Alert>;
  if (!data) return <Loader />;
  data.sort((a, b) => (b.average_evaluation > a.average_evaluation ? 1 : -1));

  return (
    <Grid
      container
      columnSpacing={8}
      rowSpacing={4}
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: 6,
      }}
    >
      {data.map((resource) => (
        <Resource key={resource.id} resource={resource} />
      ))}
    </Grid>
  );
}
