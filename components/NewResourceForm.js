import { useOperationMethod } from "react-openapi-client";
import React, { useState, useCallback } from "react";
import { TextField, Button, Box, CircularProgress, Alert } from "@mui/material";

function NewResourceForm({ learningUnitId, handleClose }) {
  const [createResource, { loading, error, data }] =
    useOperationMethod("createResource");
  const [formInput, setContent] = useState({ name: "", url: "" });

  const handleChange = useCallback((event) => {
    setContent((prevFormInput) => {
      return {
        ...prevFormInput,
        [event.target.name]: event.target.value,
      };
    });
  }, []);

  const handleSubmit = () => {
    createResource(learningUnitId, {
      name: formInput.name,
      url: formInput.url,
    });
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
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  if (data) {
    return (
      <>
        <Alert severity="success">Resource {data.name} created!</Alert>
        <Button onClick={handleClose}>Close</Button>
      </>
    );
  }

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <TextField
        required
        fullWidth
        type="text"
        id="name"
        name="name"
        label="Name your resource"
        onChange={handleChange}
        value={formInput.name}
      />
      <TextField
        required
        fullWidth
        type="text"
        id="url"
        name="url"
        label="Write the url of your resource"
        onChange={handleChange}
        value={formInput.url}
      />
      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleClose}>Cancel</Button>
    </Box>
  );
}

export default NewResourceForm;
