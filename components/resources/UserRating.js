import {
  Rating,
  Typography,
  Card,
  CardContent,
  Container,
} from "@mui/material";

function UserRating({ evaluation, setEvaluation }) {
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
          <Typography variant="h6" mt={0} mb={1}>
            Your evaluation
          </Typography>
        </Container>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            ml: -2.6,
          }}
        >
          <Rating
            name="simple-controlled-d"
            value={evaluation}
            onChange={(event, newValue) => {
              setEvaluation({ evaluation: newValue });
            }}
          />
        </Container>
      </CardContent>
    </Card>
  );
}

export default UserRating;
