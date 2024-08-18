/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState } from "react";
import UserHeader from "../../../layouts/Header/User/UserHeader";
import { Box, Typography } from "@mui/material";
import { themeColors } from "../../../themes/schemes/PureLightTheme";
import Button from "@mui/material/Button";
import DrawerProfile from "../../../layouts/Drawer/DrawerHome/DrawerProfile";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { changePassword } from "../../Auth/Auth.Api";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes";

const ChangePasswordPage: React.FC<{}> = () => {
    const navigate = useNavigate();

  const currentPassword = useRef<HTMLInputElement | null>(null);
  const newPassword = useRef<HTMLInputElement | null>(null);
  const retypeNewPassword = useRef<HTMLInputElement | null>(null);
  const [old_password, setOldPassword] = React.useState("");
  const [new_password, setNewPassword] = React.useState("");
  const [confirm_password, setConfirmPassword] = React.useState("");
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
  const [showFailMessage, setShowFailMessage] = React.useState(false);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRetypeNewPassword, setShowRetypeNewPassword] = useState(false);

  const handleClickShowCurrentPassword = () =>
    setShowCurrentPassword((show) => !show);
  const handleMouseDownCurrentPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
  const handleMouseDownNewPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClickShowRetypeNewPassword = () =>
    setShowRetypeNewPassword((show) => !show);
  const handleMouseDownRetypeNewPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleButtonClick = async () => {
    const data = {
      old_password,
      new_password,
      confirm_password,
    };
    const password2 = await changePassword(data);
    if (password2) {
      console.log("Success");
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        navigate(routes.home.Root);
      }, 1500);
    } else {
      console.log("Failed !!!");
      setShowFailMessage(true);
      setTimeout(() => {
        setShowFailMessage(false);
      }, 1500);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* header */}
      <Box
              sx={{
                position: "fixed",
                top: "24%",
                left: "46%",
                transform: "translate(-50%, -50%)",
                width: "400px",
                padding: "30px",
                borderRadius: "10px",
                marginTop: "120px",
                background: themeColors.success,
                color: "black",
                textAlign: "center",
                display: showSuccessMessage ? "block" : "none",
              }}
            >
              <Typography>Change password success!</Typography>
            </Box>
            <Box
              sx={{
                position: "fixed",
                top: "24%",
                left: "46%",
                transform: "translate(-50%, -50%)",
                width: "400px",
                padding: "30px",
                borderRadius: "4px",
                background: themeColors.error,
                color: "black",
                textAlign: "center",
                display: showFailMessage ? "block" : "none",
              }}
            >
              <Typography>Change password failed!</Typography>
            </Box>
      <UserHeader />

      <Box
        sx={{
          width: "100%",
          minHeight: "500px",
          padding: "40px 260px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: themeColors.white,
        }}
      >
        <DrawerProfile page={4} />

        <Box
          sx={{
            width: "70%",
            padding: "40px 60px",
            boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
                marginTop: "120px",
          }}
        >
          <Box sx={{
            width: "100%",
            display: "flex",
            backgroundColor: themeColors.secondary,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            padding: "15px 0px",
            marginBottom: "20px"
          }}>
          <Typography
            variant="h4"
            color={themeColors.primary}
          >
            Change your password
          </Typography>
          </Box>

          <FormControl
            sx={{ width: "100%", margin: "10px 0" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Current Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-current-password"
              type={showCurrentPassword ? "text" : "password"}
              value={old_password}
              onChange={(e: any) => setOldPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowCurrentPassword}
                    onMouseDown={handleMouseDownCurrentPassword}
                    edge="end"
                  >
                    {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Current Password"
              inputRef={currentPassword}
            />
          </FormControl>

          <FormControl
            sx={{ width: "100%", margin: "10px 0" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-retype-new-password">
              New Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showRetypeNewPassword ? "text" : "password"}
              value={new_password}
              onChange={(e: any) => setNewPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowRetypeNewPassword}
                    onMouseDown={handleMouseDownRetypeNewPassword}
                    edge="end"
                  >
                    {showRetypeNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="RetypeNew Password"
              inputRef={retypeNewPassword}
            />
          </FormControl>

          <FormControl
            sx={{ width: "100%", margin: "10px 0" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-new-password">
              Retype New Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showNewPassword ? "text" : "password"}
              value={confirm_password}
              onChange={(e: any) => setConfirmPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowNewPassword}
                    onMouseDown={handleMouseDownNewPassword}
                    edge="end"
                  >
                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Retype New Password"
              inputRef={newPassword}
            />
          </FormControl>

          <Box
            sx={{ display: "flex", alignItems: "flex-end", marginTop: "20px" }}
          >
            <Button
              variant="contained"
              onClick={handleButtonClick}
              sx={{
                padding: "8px 50px",
              }}
            >
              Update
            </Button>
            <Button
              variant="contained"
              sx={{
                marginLeft: "20px",
                backgroundColor: themeColors.gray,
                padding: "8px 50px",
              }}
              color="error"
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChangePasswordPage;
