/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useEffect, useRef, useState } from "react";
import DrawerProfile from "../../../layouts/Drawer/DrawerHome/DrawerProfile";
import UserHeader from "../../../layouts/Header/User/UserHeader";
import { themeColors } from "../../../themes/schemes/PureLightTheme";
import { checkIsEmail, checkIsPhoneNumber } from "../../../utils/helper";
import { getProfileByAccountID, updateProfileByAccountID } from "../Home.Api";

const UserProfilePage: React.FC<{}> = () => {
  const [profile, setProfile] = useState<any>(null);
  const [isChange, setIsChange] = useState<any>(true);
  const [isPhoneError, setIsPhoneError] = useState<any>(false);
  const [isEmailError, setIsEmailError] = useState<any>(false);
  const [isNameError, setIsNameError] = useState<any>(false);
  const inputSearch = useRef<HTMLInputElement | null>(null);

  const userName = localStorage.getItem("username");

  const handleButtonClick = () => {
    profile?.name === "" ? setIsNameError(true) : setIsNameError(false);
    checkIsEmail(profile?.email)
      ? setIsEmailError(false)
      : setIsEmailError(true);
    checkIsPhoneNumber(profile?.phone)
      ? setIsPhoneError(false)
      : setIsPhoneError(true);

    console.log(profile?.birthday);

    if (!isNameError && !isEmailError && !isPhoneError) {
      let formData = new FormData();
      const data = `name: ${profile?.name};email: ${profile?.email};phone: ${profile?.phone};birthday: 2001-12-21`;
      console.log(data);
      formData.append("accountprofile", data);
      const accountID = localStorage.getItem("account-id");
      updateProfileByAccountID(accountID, formData);
    }
  };

  const changeValueName = (event: any) => {
    setIsChange(false);
    setProfile({ ...profile, name: event.target.value });
  };

  const changeValueEmail = (event: any) => {
    setIsChange(false);
    setProfile({ ...profile, email: event.target.value });
  };

  const changeValuePhone = (event: any) => {
    setIsChange(false);
    setProfile({ ...profile, phone: event.target.value });
  };

  const changeValueBirthDay = (event: any) => {
    setIsChange(false);
    setProfile({ ...profile, birthDay: event.target.value });
  };

  const init = async () => {
    const accountId = localStorage.getItem("account-id");
    const profileResponse = await getProfileByAccountID(accountId);
    localStorage.setItem('fullname', profileResponse?.name)
    setProfile(profileResponse);
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, [profile]);

  return (
    <Box sx={{ width: "100%" }}>
      {/* header */}
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
        <DrawerProfile page={1} avatar={profile?.avatar} />

        <Box
          sx={{
            width: "70%",
            padding: "40px 60px",
            marginTop: "120px",
            boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
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
            Edit your profile
          </Typography>
          </Box>
          <TextField
            id="username"
            label="Username"
            defaultValue={userName}
            size="medium"
            fullWidth
            margin="normal"
            disabled
          />
          <TextField
            id="name"
            label="Full name"
            value={profile?.name || " "}
            size="medium"
            fullWidth
            margin="dense"
            onChange={changeValueName}
            error={isNameError}
          />
          <TextField
            id="email"
            label="Email"
            size="medium"
            fullWidth
            margin="dense"
            value={profile?.email || " "}
            onChange={changeValueEmail}
            error={isEmailError}
          />
          <TextField
            id="phone"
            label="Phone number"
            value={profile?.phone || " "}
            size="medium"
            fullWidth
            margin="dense"
            onChange={changeValuePhone}
            error={isPhoneError}
          />
          <TextField
            id="birthday"
            label="Birthdate"
            value={profile?.birthDay || " "}
            size="medium"
            fullWidth
            margin="dense"
            type="date"
            inputRef={inputSearch}
            onChange={changeValueBirthDay}
          />
          <Box
            sx={{ display: "flex", alignItems: "flex-end", marginTop: "20px" }}
          >
            <Button
              variant="contained"
              onClick={handleButtonClick}
              sx={{
                backgroundColor: isChange
                  ? themeColors.gray
                  : themeColors.primary,
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

export default UserProfilePage;
