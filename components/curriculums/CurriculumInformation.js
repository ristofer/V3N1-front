import { Typography, Alert } from "@mui/material";
import { useOperation } from "react-openapi-client";
import Loader from "../common/Loader";

export default function CurriculumInformation({ curriculumId }) {
  const {
    loading,
    data: curriculum,
    error,
  } = useOperation("getCurriculum", curriculumId);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Alert severity="error">Error</Alert>;
  }

  return (
    <Typography variant="h2" component="div">
      {curriculum.name}
    </Typography>
  );
}
