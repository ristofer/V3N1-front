import { OpenAPIProvider } from 'react-openapi-client';
// import BasicModal from './BasicModal';
import React from 'react';
import { Button, Modal, Box } from '@mui/material';
import NewResourceCommentForm from './NewResourceCommentForm';

const NewResourceComment = ({resourceId}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <OpenAPIProvider
      definition="http://localhost:3001/api-docs/v1/swagger.json"
    >
      <Button onClick={handleOpen}>New comment</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ ...style, width: 300 }}>
          <NewResourceCommentForm
            resourceId={resourceId}
            handleClose={handleClose}
          />
        </Box>
      </Modal>
    </OpenAPIProvider>
  );
};

export default NewResourceComment;
