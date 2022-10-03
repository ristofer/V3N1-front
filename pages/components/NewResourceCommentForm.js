import { useOperationMethod } from 'react-openapi-client';
import React, { useState } from 'react';
import { TextField, Button, Box, CircularProgress } from '@mui/material';

const NewResourceCommentForm = ({resourceId, handleClose}) => {

  const [createResourceComment, { loading, error, data }] =
    useOperationMethod('createResourceComment');
  const [formInput, setContent] = React.useState({content: ''})

  console.log(formInput.content)
  console.log(resourceId)


  function handleChange(event) {
      setContent(prevFormInput => {
          return {
              ...prevFormInput,
              [event.target.name]: event.target.value
          }
      })
  }

  const handleSubmit = () => {
    createResourceComment(
      resourceId,
      { 'content': formInput.content }
    );
  }

  if(error) {
    return(
      <React.Fragment>
        <h6>Error {error.response.data.code}: {error.response.data.message}</h6>
        <Button onClick={handleClose}>Close</Button>
      </React.Fragment>
    )
  }
  if(loading) {
    return(
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )
  }
  if(data) {
    console.log(data)
    return(
      <React.Fragment>
        <h6>Comment created: {data.content}</h6>
        <Button onClick={handleClose}>Close</Button>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <TextField
        required
        type="text"
        id="content"
        name="content"
        label ="Write your comment"
        multiline
        maxRows={4}
        onChange={handleChange}
        value={formInput.content}
      /><br></br>
      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleClose}>Cancel</Button>
    </React.Fragment>
  );
};

export default NewResourceCommentForm;
