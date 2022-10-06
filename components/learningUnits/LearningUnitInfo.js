import { Typography, Alert, Card, CardContent } from "@mui/material";
import { useOperation } from "react-openapi-client";
import Loader from "../common/Loader";

export default function LearningUnitInformation({ learningUnitId }) {
  const {
    loading,
    data: learningUnit,
    error,
  } = useOperation("getLearningUnit", learningUnitId);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Alert severity="error">Error</Alert>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h2" component="div">
          {learningUnit.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
