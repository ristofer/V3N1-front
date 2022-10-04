import Container from "@mui/material/Container";
import { useOperation } from "react-openapi-client";
import Loader from "../common/Loader";
import Comment from "./Comment";

function CommentSection({ resourceId }) {
  const { loading, data, error } = useOperation(
    "getResourceComments",
    resourceId
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <Container maxWidth="sm">
      {data.map((comment) => (
        <Comment
          key={comment.id}
          userName={comment.user_id}
          postTime="now"
          content={comment.content}
        />
      ))}
    </Container>
  );
}

export default CommentSection;
