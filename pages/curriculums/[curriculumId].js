import React from "react";
import { useRouter } from "next/router";
import LearningUnitsOfCurriculum from "../../components/learningUnits/LearningUnitsOfCurriculum";
import Loader from "../../components/common/Loader";
import CurriculumInformation from "../../components/curriculums/CurriculumInformation";

export default function LearningUnits() {
  const { query, isReady } = useRouter();
  if (!isReady) {
    return <Loader />;
  }

  const { curriculumId } = query;
  return (
    <React.StrictMode>
      <CurriculumInformation curriculumId={curriculumId} />
      <LearningUnitsOfCurriculum curriculumId={curriculumId} />
    </React.StrictMode>
  );
}
