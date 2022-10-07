import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import PreviousPage from "../common/PreviousPage";

function ResourceDisplay({ resource }) {
  return (
    <Card>
      <CardContent>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            ml: -2.6,
          }}
        >
          <Typography variant="subtitle1" align="left" color="textSecondary">
            <i>Resource</i>
          </Typography>
        </Container>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            ml: -2.6,
            mb: 2,
          }}
        >
          <Typography
            variant="h4"
            component="div"
            sx={{ justifyContent: "flex-start" }}
          >
            {resource.name}
          </Typography>
          <PreviousPage goBackText="Back to Learning Unit" />
        </Container>
        <Rating
          id="resource-average"
          name="read-only"
          value={resource.average_evaluation}
          precision={0.1}
          readOnly
          disabled
        />
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            ml: -2.6,
            my: 2,
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ justifyContent: "flex-start" }}
          >
            {resource.description}
          </Typography>
        </Container>
        <CardActions>
          <Button href={resource.url} target="_blank" variant="outlined">
            Go to website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
export default ResourceDisplay;
