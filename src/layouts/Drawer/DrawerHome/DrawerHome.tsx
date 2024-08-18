import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { themeColors } from "../../../themes/schemes/PureLightTheme";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes";
import { signOut } from "../../../modules/Auth/Auth.Api";
import { Button, Typography } from "@mui/material";
import { checkSignIned } from "../../../utils/helper";

export default function DrawerHome() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const gotoProfile = () => {
    navigate(routes.home.ProfilePage)
  }

  const gotoMyOrder = () => {
    navigate(routes.home.ViewOrdersPage)
  }

  const gotoShop = () => {
    navigate(routes.seller.Root)
  }

  const gotoSignIn = () => {
    navigate(routes.home.SignInPage);
  };

  const submitSignOut = async () => {
    await signOut()
    navigate(routes.home.SignInPage)
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          width: "33%",
          height: "38px",
        }}
      >
        <Box sx={{ width: '100%', alignItems: "center", textAlign: "center", display: checkSignIned() ? "flex" : "none" }}>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2, margin: 0 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                sx={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: themeColors.error,
                }}
                src="/broken-image.jpg"
              />
            </IconButton>
          </Tooltip>
        </Box>


        <Button onClick={gotoSignIn} sx={{ color: themeColors.white, width: '100%', padding: 0, display: checkSignIned() ? "none" : "block" }}>Sign In</Button>

      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        sx={{ padding: 0 }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            padding: 0,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 3,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={gotoProfile} sx={{ padding: "6px 6px" }}>
          <PermIdentityIcon />
          &nbsp; Profile
        </MenuItem>
        {/* <MenuItem onClick={gotoShop} sx={{ padding: "6px 6px" }}>
          <LocalMallOutlinedIcon />
          &nbsp; My Shop
        </MenuItem> */}
        <MenuItem onClick={gotoMyOrder} sx={{ padding: "6px 6px" }}>
          <LocalMallOutlinedIcon />
          &nbsp; My order
        </MenuItem>
        <MenuItem onClick={submitSignOut} sx={{ padding: "6px 6px" }}>
          <LogoutOutlinedIcon />
          &nbsp; Log out
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
