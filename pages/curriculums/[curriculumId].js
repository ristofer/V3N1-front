import React from "react";
import { useRouter } from "next/router";
import LearningUnitsOfCurriculum from "../../components/LearningUnitsOfCurriculum";
import Loader from "../../components/Loader";

export default function LearningUnits() {
  const { query, isReady } = useRouter();
  if (!isReady) {
    return <Loader />;
  }

  const { curriculumId } = query;
  return <LearningUnitsOfCurriculum curriculumId={curriculumId} />;
}
