import Card from "@mui/material/Card";
import { Typography, CardContent, CardHeader, Avatar } from "@mui/material";
import Box from "@mui/material/Box";

const dateFormat = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

function Comment({ userName, userId, postTime, content }) {
  const date = new Date(postTime);
  return (
    <Box sx={{ minWidth: 275, margin: 2 }}>
      <Card variant="outlined">
        <CardHeader
          avatar={<Avatar alt={userName} src={`/avatar/${userId}.jpg`} />}
          title={`${userName} commented:`}
          subheader={date.toLocaleString("en-US", dateFormat)}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
export default Comment;
