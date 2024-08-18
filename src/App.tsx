/* eslint-disable react-hooks/exhaustive-deps */
import { CssBaseline } from "@mui/material";
import ThemeProvider from "./themes/ThemeProvider";
import { useEffect } from "react";
import AdminRoutes from "./routes/AdminRoutes";
import { useNavigate } from "react-router-dom";
import { checkSignIned } from "./utils/helper";
import NotSignInRoutes from "./routes/NotSignInRoutes";
import SellerRoutes from "./routes/SellerRoutes";
import { authContext } from "./context/AuthContext";
import ToastComponent from "./layouts/Toast/ToastComponent";
import { useSelector } from "react-redux";
import UserRoutes from "./routes/UserRoutes";

function App() {
  const navigate = useNavigate();
  const toastError = useSelector((state: any) => state.auth.toastError);

  const checkRoleRouter = () => {
    switch (localStorage.getItem("role")) {
      case "3":
        return <AdminRoutes />;
      case "2":
        return <SellerRoutes />;
      case "1":
        return <UserRoutes />;
      default:
        return <NotSignInRoutes />;
    }
  };

  useEffect(() => {
    authContext(navigate);
  }, []);

  return (
    <ThemeProvider>
      <CssBaseline />
      <ToastComponent
        open={toastError?.open}
        status={toastError?.status}
        message={toastError?.message}
      />
      <div className="App">
        {checkSignIned() ? checkRoleRouter() : <NotSignInRoutes />}
      </div>
    </ThemeProvider>
  );
}
export default App;
