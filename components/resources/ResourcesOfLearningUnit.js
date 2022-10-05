import React from "react";
import { Alert, Container } from "@mui/material";
import useSWR from "swr";
import Loader from "../common/Loader";
import Resource from "./Resource";
import NewResource from "./NewResource";

export default function ResourcesOfLearningUnit({ learningUnitId }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, mutate } = useSWR(
    `/api/learning_units/${learningUnitId}/resources`,
    fetcher
  );
  if (error) return <Alert severity="error">Error</Alert>;
  if (!data) return <Loader />;

  data.sort((a, b) => b.average_evaluation < a.average_evaluation);

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
