import { Alert, Snackbar } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ToastStatic = () => {
  const toastError = useSelector((state: any) => state.auth.toastError);

  useEffect(() => {}, [toastError]);

  return (
    <Snackbar open={toastError} autoHideDuration={1000000000000}>
      <Alert severity="error" sx={{ width: "100%" }}>
        Account is signed in another place ! Please sign out
      </Alert>
    </Snackbar>
  );
};

export default ToastStatic;
