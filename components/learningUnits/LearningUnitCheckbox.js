import { useState, useCallback } from "react";
import { Checkbox } from "@mui/material";
import { useOperationMethod } from "react-openapi-client";

function LearningUnitCheckbox({ learningUnitId, isPreviouslyCompleted }) {
  const [isCompleted, setCompletion] = useState(isPreviouslyCompleted);

  const [uncompleteCheckbox] = useOperationMethod(
    "uncompleteLearningUnitForUser"
  );

  const [completeCheckbox] = useOperationMethod("completeLearningUnit");

  const handleChange = useCallback(() => {
    if (isCompleted) {
      uncompleteCheckbox(learningUnitId);
      setCompletion(false);
    } else {
      completeCheckbox(learningUnitId);
      setCompletion(true);
    }
  }, [
    learningUnitId,
    isCompleted,
    completeCheckbox,
    uncompleteCheckbox,
    setCompletion,
  ]);

  return <Checkbox checked={isCompleted} onChange={handleChange} />;
}

export default LearningUnitCheckbox;
