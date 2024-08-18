/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState } from "react";
import UserHeader from "../../../layouts/Header/User/UserHeader";
import { Box, Typography } from "@mui/material";
import { themeColors } from "../../../themes/schemes/PureLightTheme";
import DrawerProfile from "../../../layouts/Drawer/DrawerHome/DrawerProfile";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { createAddress } from "../Home.Api";

const AddressDeliver: React.FC<{}> = () => {


  const [address, setAddress] = useState("")

    const handleButtonClick = async () => {
        const response = await createAddress({address: address})
        if (response) {
            alert("Create Address Success!");
        }
    }

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
        <DrawerProfile page={3} />

        <Box
          sx={{
            width: "70%",
            padding: "40px 60px",
            marginTop: "120px",
            boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              backgroundColor: themeColors.secondary,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              padding: "15px 0px",
              marginBottom: "20px",
            }}
          >
            <Typography variant="h4" color={themeColors.primary}>
              Edit your address
            </Typography>
          </Box>
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={{
                margin: "20px 0" 
            }}
          />

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
              Create
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
              Cancle
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddressDeliver;