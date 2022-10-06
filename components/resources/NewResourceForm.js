import React, { useState, useCallback } from "react";
import { TextField, Button, Stack } from "@mui/material";

function NewResourceForm({ handleClose, onSubmit }) {
  // const [createResource, { loading, error, data }] =
  //   useOperationMethod("createResource");
  const [formInput, setContent] = useState({ name: "", url: "http://" });

  const handleChange = useCallback((event) => {
    setContent((prevFormInput) => {
      return {
        ...prevFormInput,
        [event.target.name]: event.target.value,
      };
    });
  }, []);

  return (
    <>
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
      <Stack direction="row" spacing={10}>
        <Button variant="outlined" color="error" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            onSubmit(formInput.name, formInput.url);
            handleClose();
          }}
        >
          Submit
        </Button>
      </Stack>
    </>
  );
}

export default NewResourceForm;
