import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import Link from "next/Link";

function ActionAreaCard({ imageurl, url, imagealt, title, text }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <Link href={url}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imageurl}
            alt={imagealt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

export default ActionAreaCard;
