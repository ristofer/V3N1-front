import React from "react";
import { OpenAPIProvider } from "react-openapi-client";
import LearningUnitCheckbox from "../../components/LearningUnitCheckbox";

export default function LearningUnits() {
  const isCompleted = false;
  return (
    <React.StrictMode>
      <OpenAPIProvider definition="/api-docs/v1/swagger.json">
        <LearningUnitCheckbox
          learningUnitId={1}
          isPreviouslyCompleted={isCompleted}
        />
      </OpenAPIProvider>
    </React.StrictMode>
  );
}
