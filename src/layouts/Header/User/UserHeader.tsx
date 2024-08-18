import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BoxContainer from "../../../component/Box/Box.Container";
import ButtonComponent from "../../../component/Button/Button.Component";
import { routes } from "../../../routes";
import { themeColors } from "../../../themes/schemes/PureLightTheme";
import { AssetImages } from "../../../utils/images";
import DrawerHome from "../../Drawer/DrawerHome/DrawerHome";
import "./UserHeader.scss";
import { Box } from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function UserHeader({ goToCart }: { goToCart?: any }) {
  const drawerWidth = 240;
  const inputSearch = useRef<HTMLInputElement | null>(null);
  const theme = useTheme();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  }));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const gotoCart = () => {
    navigate(routes.home.CartPage);
  };

  const gotoUnderDevelopment = () => {
    navigate(routes.seller.Root)
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      gotoSearch();
    }
  };

  const gotoSearch = () => {
    if (inputSearch.current) {
      const inputValue = inputSearch.current.value;
      if (inputValue !== '') {
        localStorage.setItem("input_search", inputValue);
        navigate(routes.home.SearchProductPage);
      }
    }
  };

  const handleScroll = () => {
    navigate(routes.home.Root);
    const scrollTarget = 1300;
    const duration = 500;
    const start = window.pageYOffset;
    const startTime = performance.now();
    const animateScroll = (currentTime: any) => {
      const elapsed = currentTime - startTime;
      const scrollAmount =
        start + (scrollTarget - start) * (elapsed / duration);
      window.scrollTo(0, scrollAmount);
      if (elapsed < duration) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    window.requestAnimationFrame(animateScroll);
  };

  return (
    <BoxContainer property="header_customer_container">
      {/* header slogan */}
      <BoxContainer property="header_customer_logan">
        <BoxContainer property="header_seller">
          
        </BoxContainer>
        <BoxContainer property="mid_logan">
          <Typography variant="body2" color="#000">
            Eposh Choice, Right Choice!&nbsp;&nbsp;
          </Typography>
          <Typography
            sx={{
              color: themeColors.black,
              fontWeight: "bold",
              fontSize: "14px",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handleScroll}
          >
            ShopNow
          </Typography>
        </BoxContainer>
        <BoxContainer>&nbsp;</BoxContainer>
      </BoxContainer>

      <BoxContainer property="header_customer_main">
        <BoxContainer property="header_customer_logo">
          <a href="/">
            <img
              src={AssetImages.LOGO}
              alt="This is logo"
              className="header_customer_logo_img"
            />
          </a>
        </BoxContainer>

        <BoxContainer property="header_customer_searchbar_container">
          <input
            ref={inputSearch}
            type="text"
            placeholder="Search here ..."
            id="search_product"
            className="header_customer_searchbar"
            onKeyDown={handleKeyDown}
          />
          <ButtonComponent
            property="header_customer_searchicon"
            onPress={() => gotoSearch()}
          >
            <SearchIcon />
          </ButtonComponent>
        </BoxContainer>

        <BoxContainer property="header_customer_info">

          <BoxContainer>
            <ButtonComponent onPress={gotoCart} property="header_customer_cart">
              <ShoppingCartIcon />
            </ButtonComponent>
          </BoxContainer>

          <BoxContainer property="header_customer_cart">
            <ShoppingBagIcon
              onClick={() => gotoUnderDevelopment()}
              sx={{ cursor: "pointer" }}
            />
          </BoxContainer>
          <BoxContainer property="header_customer_account">
            <DrawerHome />
          </BoxContainer>
          <BoxContainer property="header_customer_drawer">
            {/* <DrawerUserMobile /> */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: "none" }), color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          </BoxContainer>
        </BoxContainer>
      </BoxContainer>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
          backgroundColor: themeColors.primary,
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts", "Seller"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </BoxContainer>
  );
}

export default UserHeader;
