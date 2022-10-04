import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
} from "@mui/material";
import LearningUnitCheckbox from "./LearningUnitCheckbox";

function LearningUnit({ learningUnit, isPreviouslyCompleted }) {
  console.log(learningUnit);
  const { id: learningUnitId, name } = learningUnit;

  return (
    <Card sx={{ maxWidth: 345, display: "flex", m: 2 }}>
      <CardActionArea href={`/learningUnits/${learningUnitId}`}>
        <CardContent>
          <Typography variant="h4" component="div" position="center">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <LearningUnitCheckbox
          learningUnitId={learningUnit.id}
          isPreviouslyCompleted={isPreviouslyCompleted}
        />
      </CardActions>
    </Card>
  );
}

export default LearningUnit;
