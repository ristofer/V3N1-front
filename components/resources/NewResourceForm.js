import React from "react";
import { TextField, Button, Stack } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

function NewResourceForm({ handleClose, onSubmit }) {
  const validationSchema = yup.object({
    name: yup
      .string("Enter a name")
      .required("You can't submit a resource without a name"),
    url: yup.string().url("You must enter a valid URL").nullable(),
    description: yup.string("Write a description").nullable(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      url: "http://",
      description: "",
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values.name, values.url, values.description);
      handleClose();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        type="text"
        id="name"
        name="name"
        label="Name your resource"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        type="text"
        id="url"
        name="url"
        label="Write the url of your resource"
        value={formik.values.url}
        onChange={formik.handleChange}
        error={formik.touched.url && Boolean(formik.errors.url)}
        helperText={formik.touched.url && formik.errors.url}
      />
      <TextField
        type="text"
        id="description"
        name="description"
        label="Write the description of your resource"
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <Stack direction="row" spacing={10}>
        <Button variant="outlined" color="error" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}

export default NewResourceForm;
