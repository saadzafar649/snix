import React from 'react';
import { Snackbar, SnackbarContent, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const Toast = ({ open, message, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={700} onClose={onClose}>
      <SnackbarContent
        message={message}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={onClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Snackbar>
  );
};

export default Toast;
