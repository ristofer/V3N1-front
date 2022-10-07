import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PreviousPage from "../common/PreviousPage";
import styles from "../../styles/Home.module.css";

function ResourceDisplay({ resource }) {
  return (
    <Card>
      <CardContent>
        <div className={styles.containerTitulo}>
          <Typography variant="h5" component="div">
            {resource.name}
          </Typography>
          <PreviousPage goBackText="Back to Learning Unit" />
        </div>

        <Rating
          id="resource-average"
          name="read-only"
          value={resource.average_evaluation}
          precision={0.1}
          readOnly
        />

        <Chip label={resource.average_evaluation} variant="outlined" />

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
