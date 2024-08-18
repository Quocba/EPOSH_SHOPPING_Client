import React from "react";
import { Box, Typography } from "@mui/material";
import { themeColors } from "../../../themes/schemes/PureLightTheme";

function PolicyHomePage({
  children,
  large_title,
  small_title,
}: {
  children: any;
  large_title?: string;
  small_title?: string;
}) {
  return (
    <Box
      sx={{
        width: "32%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: "8px",
        backgroundColor: themeColors.white,
        boxShadow: "0 2px 4px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.16);",
        padding: "20px",
        "@media only screen and (min-width: 340px) and (max-width:740px)": {
          padding: "10px",
        },
      }}
    >
      <Box
        sx={{
          marginRight: 1,
        }}
      >
        {children}
      </Box>
      <Box sx={{}}>
        <Typography
          variant="h4"
          sx={{
            "@media only screen and (min-width: 340px) and (max-width:740px)": {
              fontSize: 10,
            },
          }}
        >
          {large_title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            "@media only screen and (min-width: 340px) and (max-width:740px)": {
              display: 'none'
            },
          }}
        >
          {small_title}
        </Typography>
      </Box>
    </Box>
  );
}

export default PolicyHomePage;
