import React from "react";
import { useRouter } from "next/router";
import ResourcesOfLearningUnit from "../../components/resources/ResourcesOfLearningUnit";
import Loader from "../../components/common/Loader";

export default function LearningUnits() {
  const { query, isReady } = useRouter();
  if (!isReady) {
    return <Loader />;
  }

  const { learningUnitId } = query;
  return (
    <React.StrictMode>
      <ResourcesOfLearningUnit learningUnitId={learningUnitId} />
    </React.StrictMode>
  );
}
