import React, { useEffect } from "react";
import { useOperationMethod } from "react-openapi-client";
import { Alert, Container } from "@mui/material";
import Loader from "../common/Loader";
import Resource from "./Resource";
import NewResource from "./NewResource";

export default function ResourcesOfLearningUnit({ learningUnitId }) {
  const [listResources, { loading, error, data }] =
    useOperationMethod("listResources");

  useEffect(() => {
    listResources(learningUnitId);
  }, [listResources, learningUnitId]);

  if (error) {
    return <Alert severity="error">Error</Alert>;
  }
  if (loading || !data) {
    return <Loader />;
  }
  data.sort((a, b) => b.average_evaluation < a.average_evaluation);

  return (
    <Container maxWidth="sm">
      {data.map((resource) => (
        <Resource key={resource.id} resource={resource} />
      ))}
      <NewResource
        learningUnitId={learningUnitId}
        listResources={listResources}
      />
    </Container>
  );
}
