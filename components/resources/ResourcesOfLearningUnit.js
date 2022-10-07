import React from "react";
import { Alert, Container } from "@mui/material";
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
    <Container maxWidth="xl" mt={2}>
      {data.map((resource) => (
        <Resource key={resource.id} resource={resource} />
      ))}
    </Container>
  );
}
