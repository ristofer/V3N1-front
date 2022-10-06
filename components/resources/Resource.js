import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  Rating,
} from "@mui/material";
import Link from "next/link";

function Resource({ resource }) {
  const {
    id: resourceId,
    name,
    average_evaluation: averageEvaluation,
  } = resource;
  const resourcePath = "/resources/";

  return (
    <Card sx={{ width: 400, display: "flex", m: 2 }}>
      <CardActionArea sx={{ width: 250 }}>
        <Link href={resourcePath + resourceId}>
          <CardContent>
            <Typography variant="h6" component="div" position="center">
              {name}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions sw={{ width: 100 }}>
        <Rating
          sw={{ width: 200 }}
          name="half-rating-read"
          defaultValue={0}
          precision={0.1}
          readOnly
          value={parseFloat(averageEvaluation)}
        />
      </CardActions>
    </Card>
  );
}

export default Resource;
