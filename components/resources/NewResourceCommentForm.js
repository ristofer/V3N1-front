import React from "react";
import { Stack, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";
import * as yup from "yup";

function NewResourceCommentForm({ handleClose, onSubmit }) {
  const validationSchema = yup.object({
    content: yup
      .string("Write a comment")
      .required("You can't submit an empty comment"),
  });

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values.content);
      handleClose();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        type="text"
        id="content"
        name="content"
        label="Write your comment"
        size="normal"
        multiline
        rows={4}
        value={formik.values.content}
        onChange={formik.handleChange}
        error={formik.touched.content && Boolean(formik.errors.content)}
        helperText={formik.touched.content && formik.errors.content}
      />
      <Stack direction="row" spacing={8} mt={3}>
        <Button onClick={handleClose} variant="outlined" color="error">
          Cancel
        </Button>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </form>
  );
}

export default NewResourceCommentForm;
