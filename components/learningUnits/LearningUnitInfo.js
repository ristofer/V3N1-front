import { Typography, Alert, Card, CardContent, Container } from "@mui/material";
import Loader from "../common/Loader";
import useFetch from "../../hooks/use-fetch";
import PreviousPage from "../common/PreviousPage";

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
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 !important",
          }}
        >
          <Typography variant="h3" component="div">
            {learningUnit.name}
          </Typography>
          <div>
            <PreviousPage goBackText="Back to curriculum" />
          </div>
        </Container>
      </CardContent>
    </Card>
  );
}
