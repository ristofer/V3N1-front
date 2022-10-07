import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Checkbox,
  CardHeader,
  Button,
} from "@mui/material";
import Link from "next/link";

function LearningUnit({ learningUnit, isPreviouslyCompleted, onCheck }) {
  const learningUnitsPath = "/learningUnits/";
  const {
    id: learningUnitId,
    name: learningUnitName,
    description: learningUnitDescription,
  } = learningUnit;

  return (
    <Grid
      item
      key={learningUnitName}
      xs={8}
      sm={5}
      md={4}
      lg={3}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        paddingBottom: 10,
      }}
    >
      <Card>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <CardHeader
            title={learningUnitName}
            titleTypographyProps={{ align: "center" }}
            subheaderTypographyProps={{ align: "center" }}
          />
          <div
            style={{
              display: "flex",
              position: "absolute",
              right: 0,
              height: "100%",
              alignItems: "center",
              marginRight: "10px",
            }}
          >
            <Checkbox
              checked={isPreviouslyCompleted}
              onChange={() => onCheck(isPreviouslyCompleted, learningUnitId)}
            />
          </div>
        </div>
        <CardContent>
          <Typography variant="subtitle1" align="center">
            {learningUnitDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={learningUnitsPath + learningUnitId} passHref>
            <Button fullWidth color="primary">
              View Learning Unit
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default LearningUnit;
