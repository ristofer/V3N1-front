import { useState, useCallback } from "react";
import { Box, Checkbox } from "@mui/material";
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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Box sx={{ ...style, width: 300 }}>
      <h1>here it goes</h1>
      <Checkbox checked={isCompleted} onChange={handleChange} />
    </Box>
  );
}

export default LearningUnitCheckbox;
