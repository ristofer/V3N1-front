import { Rating, Typography } from "@mui/material";

function UserRating({ evaluation, setEvaluation }) {
  return (
    <>
      <Typography variant="h5" mt={2} mb={1}>
        Your evaluation
      </Typography>
      <Rating
        name="simple-controlled-d"
        value={evaluation}
        onChange={(event, newValue) => {
          setEvaluation({ evaluation: newValue });
        }}
      />
    </>
  );
}

export default UserRating;
