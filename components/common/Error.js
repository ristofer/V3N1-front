import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";

export default function Error({ message }) {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(!open);
  const errorMessage =
    message === undefined ? "Could not perform operation" : message;

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={open}
      onClose={handleClose}
      autoHideDuration={6000}
      key="bottomleft"
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {errorMessage}
      </Alert>
    </Snackbar>
  );
}
