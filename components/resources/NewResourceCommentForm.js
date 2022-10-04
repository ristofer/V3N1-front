import { useOperationMethod } from "react-openapi-client";
import React, { useState, useCallback } from "react";
import { TextField, Button, Alert } from "@mui/material";
import Loader from "../common/Loader";

function NewResourceCommentForm({ resourceId, handleClose }) {
  const [createResourceComment, { loading, error, data }] = useOperationMethod(
    "createResourceComment"
  );
  const [formInput, setContent] = useState({ content: "" });

  const handleChange = useCallback((event) => {
    setContent((prevFormInput) => {
      return {
        ...prevFormInput,
        [event.target.name]: event.target.value,
      };
    });
  }, []);

  const handleSubmit = () => {
    createResourceComment(resourceId, { content: formInput.content });
  };

  if (error) {
    return (
      <>
        <Alert severity="error">
          Error {error.response.data.code}: {error.response.data.message}
        </Alert>
        <Button onClick={handleClose}>Close</Button>
      </>
    );
  }
  if (loading) {
    return <Loader />;
  }
  if (data) {
    return (
      <>
        <Alert severity="success">Comment created: {data.content}</Alert>
        <Button onClick={handleClose}>Close</Button>
      </>
    );
  }

  return (
    <>
      <TextField
        required
        type="text"
        id="content"
        name="content"
        label="Write your comment"
        multiline
        maxRows={4}
        onChange={handleChange}
        value={formInput.content}
      />
      <br />
      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleClose}>Cancel</Button>
    </>
  );
}

export default NewResourceCommentForm;
