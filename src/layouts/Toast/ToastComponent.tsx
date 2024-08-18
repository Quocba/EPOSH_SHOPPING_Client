import { Alert, Snackbar } from "@mui/material";
import React from "react";

const ToastComponent = ({
  open,
  message,
  status,
  onClose,
}: {
  open?: any;
  message?: any;
  status?: any;
  onClose?: any;
}) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
      <Alert severity={status}>{message}</Alert>
    </Snackbar>
  );
};

export default ToastComponent;
