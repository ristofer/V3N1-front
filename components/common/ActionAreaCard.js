import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

function ActionAreaCard({ imageurl, url, imagealt, title, text }) {
  return (
    <Card sx={{ maxWidth: 345, ml: 2, mr: 2 }}>
      <CardActionArea href={url}>
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
    </Card>
  );
}

export default ActionAreaCard;
