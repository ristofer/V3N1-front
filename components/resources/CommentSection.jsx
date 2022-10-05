import Container from "@mui/material/Container";
import { useOperation } from "react-openapi-client";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Comment from "./Comment";

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
    return <div>Error</div>;
  }

  return (
    <Container maxWidth="sm">
      {data.map((comment) => (
        <Comment
          key={comment.id}
          userName={comment.user.name}
          postTime={comment.created_at}
          content={comment.content}
          userId={comment.user.id}
        />
      ))}
    </Container>
  );
}

export default CommentSection;
