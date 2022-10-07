import React from "react";
import { useOperationMethod } from "react-openapi-client";
import { Alert, Grid } from "@mui/material";
import Loader from "../common/Loader";
import LearningUnit from "./LearningUnit";
import useFetch from "../../hooks/use-fetch";

export default function LearningUnitsOfCurriculum({ curriculumId }) {
  const [completeLearningUnit] = useOperationMethod("completeLearningUnit");
  const [uncompleteLearningUnit] = useOperationMethod(
    "uncompleteLearningUnitForUser"
  );

  const { data: learningUnitsData, error: learningUnitsError } = useFetch(
    `/api/curriculums/${curriculumId}/learning_units`
  );

  const {
    data: completedData,
    error: completedError,
    mutate,
  } = useFetch(`/api/curriculums/${curriculumId}/completed_learning_units`);

  if (learningUnitsError || completedError) {
    return <Alert severity="error">Error</Alert>;
  }
  if (!learningUnitsData || !completedData) {
    return <Loader />;
  }

  const completedLearningUnits = completedData.map(
    (completedLearningUnit) => completedLearningUnit.learning_unit_id
  );

  const onCheck = async (isPreviouslyCompleted, learningUnitId) => {
    if (isPreviouslyCompleted) {
      await uncompleteLearningUnit(learningUnitId);
    } else {
      await completeLearningUnit(learningUnitId);
    }
    mutate();
  };
  return (
    <Grid
      container
      columnSpacing={8}
      rowSpacing={4}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {learningUnitsData.map((learningUnit) => (
        <LearningUnit
          key={learningUnit.id}
          learningUnit={learningUnit}
          isPreviouslyCompleted={completedLearningUnits.includes(
            learningUnit.id
          )}
          onCheck={onCheck}
        />
      ))}
    </Grid>
  );
}
