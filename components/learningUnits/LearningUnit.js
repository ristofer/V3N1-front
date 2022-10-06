import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  Checkbox,
} from "@mui/material";
import Link from "next/Link";

function LearningUnit({ learningUnit, isPreviouslyCompleted, onCheck }) {
  const learningUnitsPath = "/learningUnits/";
  const { id: learningUnitId, name: learningUnitName } = learningUnit;

  return (
    <Card sx={{ maxWidth: "xl", display: "flex", m: 2 }}>
      <CardActionArea>
        <Link href={learningUnitsPath + learningUnitId}>
          <CardContent>
            <Typography variant="h4" component="div" position="center">
              {learningUnitName}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Checkbox
          checked={isPreviouslyCompleted}
          onChange={() => onCheck(isPreviouslyCompleted, learningUnitId)}
        />
      </CardActions>
    </Card>
  );
}

export default LearningUnit;
