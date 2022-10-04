import React from "react";
import { useOperation } from "react-openapi-client";
import { Alert, Container } from "@mui/material";
import Loader from "../common/Loader";
import LearningUnit from "./LearningUnit";

export default function LearningUnitsOfCurriculum({ curriculumId }) {
  const {
    loading: completedLoading,
    error: completedError,
    data: completedData,
  } = useOperation(
    "listCompletedLearningUnitsOfCurriculumCompletedByUser",
    curriculumId
  );

  const {
    loading: learningUnitsLoading,
    data: learningUnitsData,
    error: learningUnitsError,
  } = useOperation("listLearningUnitsOfCurriculum", curriculumId);

  if (learningUnitsError || completedError) {
    return <Alert severity="error">Error</Alert>;
  }
  if (learningUnitsLoading || completedLoading) {
    return <Loader />;
  }

  const completedLearningUnits = completedData.map(
    (completedLearningUnit) => completedLearningUnit.learning_unit_id
  );

  return (
    <Container maxWidth="sm">
      {learningUnitsData.map((learningUnit) => (
        <LearningUnit
          key={learningUnit.id}
          learningUnit={learningUnit}
          isPreviouslyCompleted={completedLearningUnits.includes(
            learningUnit.id
          )}
        />
      ))}
    </Container>
  );
}
