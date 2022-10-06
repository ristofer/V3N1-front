import { Alert } from "@mui/material";
import { useOperationMethod } from "react-openapi-client";
import useFetch from "../../hooks/use-fetch";
import Loader from "../common/Loader";
import ResourceDisplay from "./ResourceDisplay";
import UserRating from "./UserRating";

function ResourceInformation({ resourceId }) {
  const { data, error } = useFetch(`/api/resources/${resourceId}`);

  const {
    data: evaluationData,
    error: evaluationError,
    mutate,
  } = useFetch(`/api/resources/${resourceId}/resource_evaluation`);

  const [setResourceEvaluation] = useOperationMethod("setResourceEvaluation");

  async function handleRatingChange(body) {
    await setResourceEvaluation(resourceId, body);
    mutate();
  }

  if (error || evaluationError) return <Alert severity="error">Error</Alert>;
  if (!data || !evaluationData) return <Loader />;

  data.average_evaluation = parseFloat(
    String(data.average_evaluation).slice(0, 3)
  );

  const { evaluation: userEvaluation } = evaluationData;

  return (
    <>
      <ResourceDisplay resource={data} />
      <UserRating
        evaluation={userEvaluation}
        setEvaluation={async (body) => {
          handleRatingChange(body);
        }}
      />
    </>
  );
}

export default ResourceInformation;
