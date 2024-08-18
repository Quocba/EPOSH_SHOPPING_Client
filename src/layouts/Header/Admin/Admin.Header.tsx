import React, { useState, useEffect } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InventoryIcon from "@mui/icons-material/Inventory";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PaidIcon from '@mui/icons-material/Paid';
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AssetImages } from "../../../utils/images";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../../routes";
import LogoutModal from "../../../modules/Admin/Modal/Modal.Logout/Modal.Logout";

interface data {
  username: any;
  permission: any;
  table: any;
  sideSelect: any;
}

export default function ResponsiveDrawer(data: data) {
  const navigate = useNavigate()

  const { username, permission, table, sideSelect } = data;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedItem, setSelectedItem] = useState(sideSelect);
  const [isTabletWidth, setIsTabletWidth] = useState(false);
  const [canHideInfo, setCanHideInfo] = useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const menuId = "primary-search-account-menu";

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const OpenSidebar = () => {
    if (isTabletWidth === false) {
      setIsTabletWidth(true);
    } else {
      setIsTabletWidth(false);
    }
  };

  const handleItemClick = (index: any) => {
    setSelectedItem(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const goToDashboard = () => {
    navigate(routes.admin.Root)
  }

  const goToUnderDev = () => {
    navigate(routes.home.UnderDevPage)
  }

  useEffect(() => {
    setSelectedItem(sideSelect);
  }, [sideSelect]);

  useEffect(() => {
    function handleResize() {
      const tabletWidth = 1048;
      if (window.innerWidth <= tabletWidth) {
        setIsTabletWidth(true);
        setCanHideInfo(true);
      } else {
        setCanHideInfo(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={goToUnderDev}>Profile</MenuItem>
    </Menu>
  );

  return (
    <div className="container" style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div
        className="side-container"
        style={{
          position: canHideInfo ? "absolute" : "relative",
          width: "250px",
          height: "100vh",
          backgroundColor: "#0B2447",
          zIndex: "999999",
        }}
        hidden={isTabletWidth}
      >
        {/* Menu */}
        <div hidden={!canHideInfo}>
          <div
            className="menu"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "20px",
              marginTop: "16px",
            }}
          >
            <IconButton sx={{ marginLeft: "20px" }} onClick={OpenSidebar}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </div>
        </div>
        {/* Item */}
        <div className="item" style={{ marginTop: "40px" }}>
          {/* Logo */}
          <div
            className="side-logo"
            style={{ display: "flex", justifyContent: "center" }}
            onClick={goToDashboard}
          >
            <img
              className="logo"
              style={{ width: "120px", height: "110px" }}
              src={AssetImages.LOGO}
              alt="Logo"
            />
          </div>
          {/* Options */}
          <div className="option-item">
            <div
              className="option-title"
              style={{ marginTop: "50px", marginLeft: "20px" }}
            >
              <label htmlFor="" style={{ color: "#B7B9C7" }}>
                Manager options
              </label>
            </div>
            <div className="option-select">
              <List>
                {["Account", "Category", "Shop", "Transaction"].map((text, index) => (
                  <ListItem
                    className="option-item-list"
                    key={text}
                    disablePadding
                  >
                    <Link
                      to={`/admin/${text.toLowerCase()}`}
                      style={{ width: "100%" }}
                    >
                      <ListItemButton
                        onClick={() => handleItemClick(index)}
                        sx={{
                          backgroundColor:
                            index === selectedItem ? "#07182F" : "inherit",
                        }}
                      >
                        <ListItemIcon sx={{ color: "white" }}>
                          {index === 0 ? <PersonIcon /> : null}
                          {index === 1 ? <InventoryIcon /> : null}
                          {index === 2 ? <StorefrontIcon /> : null}
                          {index === 3 ? <PaidIcon /> : null}
                        </ListItemIcon>
                        <ListItemText sx={{ color: "white" }} primary={text} />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
        </div>
        {/* Logout */}
        <div
          className="side-logout"
          style={{
            position: "absolute",
            bottom: "33px",
            left: "20px",
            right: "20px",
          }}
        >
          <div hidden={!canHideInfo}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                color: "white",
              }}
            >
              {/* User */}
              <div className="avatar">
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle sx={{ fontSize: "30px" }} />
                </IconButton>
              </div>
              <div
                className="person"
                style={{ marginLeft: "10px", marginBottom: "30px" }}
              >
                <div className="name">
                  <label className="username">
                    <b>{username}</b>
                  </label>
                </div>
                <div className="permission" style={{ textAlign: "left" }}>
                  <label className="status">{permission}</label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <LogoutModal>
              <IconButton style={{ width: "100%" }}>
                <Button
                  className="btn-side-logout"
                  variant="outlined"
                  style={{
                    color: "white",
                    width: "100%",
                    borderColor: "white",
                    height: "35px",
                  }}
                >
                  Logout
                </Button>
              </IconButton>
            </LogoutModal>
          </div>
        </div>
      </div>
      {/* Navbar */}
      <div style={{ width: "100%", overflow: "auto" }}>
        {/* Navbar title*/}
        <div
          className="nav-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "nowrap",
            alignItems: "center",
            width: "100%",
            height: "70px",
            backgroundColor: "#07182F",
          }}
        >
          {/* Navbar left */}
          <div
            className="title"
            style={{ display: "flex", alignItems: "center" }}
          >
            {/* Menu stick */}
            <div className="menu">
              <IconButton sx={{ marginLeft: "20px" }} onClick={OpenSidebar}>
                <MenuIcon sx={{ color: "white" }} />
              </IconButton>
            </div>
            {/* Brand name */}
            <div className="brand">
              <h2
                style={{ fontSize: "25px", marginLeft: "20px", color: "white" }}
              >
                <b>ADMIN PANEL</b>
              </h2>
            </div>
          </div>
          {/* Navbar right */}
          <div
            className="info"
            style={{ display: "flex", color: "white", marginRight: "20px" }}
          >
            {/* Bell */}
            <div className="bell" onClick={goToUnderDev}>
              <IconButton
                size="large"
                aria-label="show 3 new notifications"
                color="inherit"
                style={{ marginTop: "5px" }}
              >
                <Badge badgeContent={3} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </div>
            {/* Vertical */}
            <div
              className="vertical-slide"
              style={{
                width: "3px",
                height: "40px",
                margin: "0px 30px",
                backgroundColor: "gray",
              }}
              hidden={canHideInfo}
            ></div>
            {/* User */}
            <div
              className="person"
              style={{ marginRight: "5px" }}
              hidden={canHideInfo}
            >
              <div className="name">
                <label className="username">
                  <b>{localStorage.getItem("username")}</b>
                </label>
              </div>
              <div className="permission" style={{ textAlign: "right" }}>
                <label className="status">{permission}</label>
              </div>
            </div>
            <div className="avatar" hidden={canHideInfo}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle sx={{ fontSize: "30px" }} />
              </IconButton>
            </div>
          </div>
        </div>
        {/* Table data */}
        <div
          className="table-data"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="data"
            style={{
              width: "100%",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
              marginTop: "20px",
              marginLeft: "20px",
              marginRight: "20px",
              marginBottom: "20px",
            }}
          >
            {table}
          </div>
        </div>
      </div>
      {renderMenu}
    </div>
  );
}
