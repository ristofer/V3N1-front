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
    <Container maxWidth="xl">
      {data.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <NewResourceComment
        resourceId={resourceId}
        newCommentCreation={newCommentCreation}
      />
    </Container>
  );
}

export default CommentSection;
