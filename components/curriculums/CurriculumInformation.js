import { Typography, Alert } from "@mui/material";
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
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 10 }}>
      <Typography variant="subtitle1" align="center" color="textSecondary">
        <i>Curriculum</i>
      </Typography>
      <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
        {curriculum.name}
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary">
        {curriculum.description}
      </Typography>
    </div>
  );
}
