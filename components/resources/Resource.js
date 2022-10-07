import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Rating,
  Button,
} from "@mui/material";
import Link from "next/link";

function Resource({ resource }) {
  const {
    id: resourceId,
    name,
    description,
    average_evaluation: averageEvaluation,
  } = resource;
  const resourcePath = "/resources/";

  return (
    <Grid item key={name} xs={12} md={6}>
      <Card display={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {name}
            </Typography>

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

            <Typography variant="subtitle1" paragraph>
              {description}
            </Typography>
            <Link href={resourcePath + resourceId}>
              <Button color="primary">Explore More</Button>
            </Link>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
}

export default Resource;
