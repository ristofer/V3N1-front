import { Rating, Typography } from "@mui/material";

function UserRating({ evaluation }) {
  return (
    <>
      <Typography variant="h5" mt={2} mb={1}>
        Your evaluation
      </Typography>
      <Rating name="simple-controlled-d" value={evaluation} />
    </>
  );
}

export default UserRating;
