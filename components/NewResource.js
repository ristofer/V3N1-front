import { OpenAPIProvider } from "react-openapi-client";
import { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import NewResourceForm from "./NewResourceForm";

function NewResource({ learningUnitId }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <OpenAPIProvider definition="/api-docs/v1/swagger.json">
      <Button onClick={handleOpen}>New Resource</Button>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 400 }}>
          <NewResourceForm
            learningUnitId={learningUnitId}
            handleClose={handleClose}
          />
        </Box>
      </Modal>
    </OpenAPIProvider>
  );
}

export default NewResource;
