import React from "react";
import { useRouter } from "next/router";
import NewResource from "../../components/NewResource";

export default function LearningUnits() {
  const router = useRouter();
  const { learningUnitId } = router.query;

  return (
    <React.StrictMode>
      <NewResource learningUnitId={learningUnitId} />
    </React.StrictMode>
  );
}
