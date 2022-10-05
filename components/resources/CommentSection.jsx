import { Alert, Container } from "@mui/material";
import Loader from "../common/Loader";
import Comment from "./Comment";
import NewResourceComment from "./NewResourceComment";
import useFetch from "../../hooks/use-fetch";

function CommentSection({ resourceId }) {
  const { data, error, mutate } = useFetch(
    `/api/resources/${resourceId}/resource_comments`
  );

  if (error) return <Alert severity="error">Error</Alert>;
  if (!data) return <Loader />;

  const newCommentCreation = () => {
    mutate();
  };

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
      <NewResourceComment
        resourceId={resourceId}
        newCommentCreation={newCommentCreation}
      />
    </Container>
  );
}

export default CommentSection;
