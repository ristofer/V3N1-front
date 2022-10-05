import React from "react";
import { Alert, Container } from "@mui/material";
import useFetch from "../../hooks/use-fetch";
import Loader from "../common/Loader";
import Resource from "./Resource";
import NewResource from "./NewResource";

export default function ResourcesOfLearningUnit({ learningUnitId }) {
  const { data, error, mutate } = useFetch(
    `/api/learning_units/${learningUnitId}/resources`
  );
  if (error) return <Alert severity="error">Error</Alert>;
  if (!data) return <Loader />;
  data.sort((a, b) => (b.average_evaluation > a.average_evaluation ? 1 : -1));

  const newResourceCreation = () => {
    mutate();
  };

  return (
    <Container maxWidth="sm">
      {data.map((resource) => (
        <Resource key={resource.id} resource={resource} />
      ))}
      <NewResource
        learningUnitId={learningUnitId}
        newResourceCreation={newResourceCreation}
      />
    </Container>
  );
}
