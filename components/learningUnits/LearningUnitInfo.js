import { Typography, Alert, Card, CardContent } from "@mui/material";
import Loader from "../common/Loader";
import useFetch from "../../hooks/use-fetch";

export default function LearningUnitInformation({ learningUnitId }) {
  const { data: learningUnit, error } = useFetch(
    `/api/learning_units/${learningUnitId}`
  );

  if (!learningUnit) {
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
