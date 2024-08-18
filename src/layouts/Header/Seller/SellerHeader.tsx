/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./SellerHeader.scss";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Tooltip } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { routes } from "../../../routes";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../../modules/Auth/Auth.Api";
import { useSelector } from "react-redux";

const SellerHeader = () => {
  const navigate = useNavigate();
  const listProfile = useSelector((state: any) => state.seller.listProfile);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShopSetUp = () => {
    navigate(routes.seller.ShopSetupPage);
  };

  const handleShopAccount = () => {
    navigate(routes.home.ProfilePage);
  }

  const submitSignOut = async () => {
    await signOut();
    navigate(routes.home.SignInPage);
  };

  const init = async () => {
    console.log(listProfile);
  }

  useEffect(() => {
    init()
  }, [])

  useEffect(() => { }, [listProfile])

  return (
    <div className="header">
      <div className="wrapper">
        <div className="items">
          <div className="item">
            <NotificationsOutlinedIcon
              sx={{
                width: "40px",
                height: "40px",
                "@media screen and (max-width: 1194px)": {
                  width: "30px",
                  height: "30px",
                },
              }}
            />
            <div className="counter">23</div>
          </div>
          <div className="item__avatar">
            <React.Fragment>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 4 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >

                  <img className="shop-avatar" src={listProfile?.account?.accountProfile?.avatar} alt="avatar" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{
                  left: "-4px",
                  "@media screen and (max-width: 1194px)": {
                    left: "1px",
                    width: "13.8rem",
                    height: "15rem",
                  },
                }}
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 20,
                      height: 20,
                      ml: -1,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 15,
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
                <MenuItem onClick={handleShopSetUp}>
                  <ListItemIcon>
                    <SettingsOutlinedIcon
                      sx={{
                        width: "24px",
                        height: "24px",
                        "@media screen and (max-width: 1194px)": {
                          width: "20px",
                          height: "20px",
                        },
                      }}
                    />
                  </ListItemIcon>
                  Set Up Shop
                </MenuItem>
                <MenuItem onClick={handleShopAccount}>
                  <ListItemIcon>
                    <ShoppingCartOutlinedIcon
                      sx={{
                        width: "24px",
                        height: "24px",
                        "@media screen and (max-width: 1194px)": {
                          width: "20px",
                          height: "20px",
                        },
                      }}
                    />
                  </ListItemIcon>
                  Shop Account
                </MenuItem>
                <MenuItem onClick={submitSignOut}>
                  <ListItemIcon>
                    <LogoutOutlinedIcon
                      sx={{
                        width: "24px",
                        height: "24px",
                        "@media screen and (max-width: 1194px)": {
                          width: "20px",
                          height: "20px",
                        },
                      }}
                    />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerHeader;
