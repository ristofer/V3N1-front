import React from "react";
import LearningUnitCheckbox from "../../components/LearningUnitCheckbox";

export default function LearningUnits() {
  const isCompleted = false;
  return (
    <React.StrictMode>
      <LearningUnitCheckbox
        learningUnitId={1}
        isPreviouslyCompleted={isCompleted}
      />
    </React.StrictMode>
  );
}
