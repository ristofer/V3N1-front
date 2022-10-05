import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
} from "@mui/material";
import LearningUnitCheckbox from "./LearningUnitCheckbox";

function LearningUnit({ learningUnit, isPreviouslyCompleted }) {
  const { id: learningUnitId, name } = learningUnit;
  const learningUnitPath = "/learningUnits/";

  return (
    <Card sx={{ maxWidth: 345, display: "flex", m: 2 }}>
      <CardActionArea href={learningUnitPath + learningUnitId}>
        <CardContent>
          <Typography variant="h4" component="div" position="center">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <LearningUnitCheckbox
          learningUnitId={learningUnitId}
          isPreviouslyCompleted={isPreviouslyCompleted}
        />
      </CardActions>
    </Card>
  );
}

export default LearningUnit;
