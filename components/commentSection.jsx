import Container from "@mui/material/Container";
import { useOperation } from "react-openapi-client";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Comment from "./comment";

function CommentSection({ resourceId }) {
  const { loading, data, error } = useOperation(
    "getResourceComments",
    resourceId
  );

  if (loading) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container maxWidth="sm">
      {data.map((comment) => (
        <Comment
          userName={comment.user_id}
          postTime="now"
          content={comment.content}
        />
      ))}
    </Container>
  );
}

export default CommentSection;
