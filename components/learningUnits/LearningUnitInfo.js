import { Typography, Alert, Card, CardContent } from "@mui/material";
import Loader from "../common/Loader";
import useFetch from "../../hooks/use-fetch";
import PreviousPage from "../common/PreviousPage";
import styles from "../../styles/Home.module.css";

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
        <div className={styles.containerTitulo}>
          <Typography variant="h3" component="div">
            {learningUnit.name}
          </Typography>
          <PreviousPage goBackText="Back to curriculum" />
        </div>
      </CardContent>
    </Card>
  );
}
