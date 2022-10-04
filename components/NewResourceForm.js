import { useOperationMethod } from "react-openapi-client";
import React, { useState, useCallback } from "react";
import {
  TextField,
  Button,
  Box,
  CircularProgress,
  Alert,
  Stack,
} from "@mui/material";

function NewResourceForm({ learningUnitId, handleClose }) {
  const [createResource, { loading, error, data }] =
    useOperationMethod("createResource");
  const [formInput, setContent] = useState({ name: "", url: "http://" });

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
        <Stack>
          <Button onClick={handleClose}>Close</Button>
        </Stack>
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
        <Stack>
          <Button align="right" onClick={handleClose}>
            Close
          </Button>
        </Stack>
      </>
    );
  }

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { mb: 2, width: "25ch" },
      }}
    >
      <TextField
        required
        type="text"
        id="name"
        name="name"
        label="Name your resource"
        onChange={handleChange}
        value={formInput.name}
      />
      <TextField
        required
        type="text"
        id="url"
        name="url"
        label="Write the url of your resource"
        onChange={handleChange}
        value={formInput.url}
      />
      <Stack direction="row" spacing={1}>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="outlined" color="error" onClick={handleClose}>
          Cancel
        </Button>
      </Stack>
    </Box>
  );
}

export default NewResourceForm;
