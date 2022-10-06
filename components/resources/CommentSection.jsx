import { Alert, Container } from "@mui/material";
import { useOperationMethod } from "react-openapi-client";
import Loader from "../common/Loader";
import Comment from "./Comment";
import NewResourceComment from "./NewResourceComment";
import useFetch from "../../hooks/use-fetch";

function CommentSection({ resourceId }) {
  const [createResourceComment] = useOperationMethod("createResourceComment");

  const { data, error, mutate } = useFetch(
    `/api/resources/${resourceId}/resource_comments`
  );

  if (error) return <Alert severity="error">Error</Alert>;
  if (!data) return <Loader />;

  const onSubmit = async (content) => {
    await createResourceComment(resourceId, {
      content,
    });
    mutate();
  };

  return (
    <Container maxWidth="xl">
      {data.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <NewResourceComment onSubmit={onSubmit} />
    </Container>
  );
}

export default CommentSection;
