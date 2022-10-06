import { Typography, Alert, Card, CardContent } from "@mui/material";
import Loader from "../common/Loader";
import useFetch from "../../hooks/use-fetch";

export default function CurriculumInformation({ curriculumId }) {
  const { data: curriculum, error } = useFetch(
    `/api/curriculums/${curriculumId}`
  );

  if (!curriculum) {
    return <Loader />;
  }

  if (error) {
    return <Alert severity="error">Error</Alert>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h2" component="div">
          {curriculum.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
