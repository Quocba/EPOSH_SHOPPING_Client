import React, { useEffect } from "react";
import {
  GridViewOutlined,
  Inventory2Outlined,
  MonetizationOnOutlined,
  SpeedOutlined,
  StoreOutlined,
  ExpandMore,
  PhoneInTalkOutlined,
  ExpandLess,
} from "@mui/icons-material";
import {
  Avatar,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/index";
import { AssetImages } from "../../../utils/images";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSidebar,
  changeSubSidebar,
} from "../../../modules/Seller/Seller.Action";
import { themeColors } from "../../../themes/schemes/PureLightTheme";

export default function ClippedDrawer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const indexSidebar = useSelector((state: any) => state.seller.indexSidebar);
  const indexSubSidebar = useSelector(
    (state: any) => state.seller.indexSubSidebar
  );

  const [isShopManagerExpanded, setShopManagerExpanded] = React.useState(false);
  const [isShopManagerCollapseOpen, setShopManagerCollapseOpen] =
    React.useState(false);
  const [isDisplayDropdownIcon, setDisplayDropdownIcon] = React.useState(false);

  const goToRoot = () => {
    navigate(routes.seller.Root);
  };

  const goToTransaction = () => {
    navigate(routes.seller.TransactionPage);
  };

  const goToProduct = () => {
    navigate(routes.seller.ProductPage);
  };

  const goToPerformance = () => {
    navigate(routes.seller.PerformancePage);
  };

  const goToShopReview = () => {
    navigate(routes.seller.ShopReviewsPage);
  };

  const goToShopProfile = () => {
    navigate(routes.seller.ShopProfilePage);
  };

  const goToCatalogOfShop = () => {
    navigate(routes.seller.CatalogShopPage);
  };

  const handleShopManagerClick = () => {
    setShopManagerExpanded(!isShopManagerExpanded);
    setShopManagerCollapseOpen(!isShopManagerCollapseOpen);
    setDisplayDropdownIcon(!isDisplayDropdownIcon);
  };

  const handleItemClick = (index: number) => {
    dispatch(changeSidebar(index));
    if (index >= 0 && index <= 3) {
      setShopManagerCollapseOpen(false);
    }
    if (index === 0) {
      goToRoot();
    } else if (index === 1) {
      goToTransaction();
    } else if (index === 2) {
      goToProduct();
    } else if (index === 3) {
      goToPerformance();
    }
  };

  const handleShopManagerSelectedClick = (index: number) => {
    dispatch(changeSubSidebar(index));
    if (index === 0) {
      goToShopReview();
    } else if (index === 1) {
      goToShopProfile();
    } else if (index === 2) {
      goToCatalogOfShop();
    }
  };

  useEffect(() => { }, [indexSidebar, indexSubSidebar]);

  return (
    <Drawer
      className="seller__sidebar"
      variant="permanent"
      sx={{
        width: "286px",
        flexShrink: 0,
        "@media screen and (min-width: 740px) and (max-width: 1194px)": {
          width: "200px",
        },
        [`& .MuiDrawer-paper`]: {
          width: "286px",
          boxSizing: "border-box",
          backgroundColor: themeColors.sellerSecondary,
          color: themeColors.white,
          "@media screen and (min-width: 740px) and (max-width: 1194px)": {
            width: "200px",
          },
        },
      }}
    >
      <List disablePadding>
        <Stack
          sx={{
            width: "100%",
            m: "20px 0 20px 0",
            "@media screen and (min-width: 740px) and (max-width: 1194px)": {
              m: "20px 0 10px 0",
            },
          }}
          direction="row"
          justifyContent="center"
        >
          <Avatar
            className="seller__sidebar-logo"
            src={AssetImages.LOGO}
            sx={{
              width: "90px",
              height: "90px",
              "@media screen and (min-width: 740px) and (max-width: 1194px)": {
                width: "65px",
                height: "65px",
              },
            }}
          />
        </Stack>
        <Stack direction="column">
          {[
            "Dashboard",
            "Transaction Management",
            "Product Management",
            "Performance",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => handleItemClick(index)}
                sx={{
                  backgroundColor:
                    index === indexSidebar
                      ? themeColors.sellerPrimary
                      : "inherit",
                  height: "50px",
                  mt: "0.5rem",
                  "&:hover": {
                    backgroundColor: themeColors.sellerPrimary,
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: themeColors.white,
                    ml: "0.4rem",
                    "@media screen and (min-width: 740px) and (max-width: 1194px)":
                    {
                      ml: "-.3rem",
                    },
                  }}
                >
                  {index === 0 ? (
                    <GridViewOutlined
                      sx={{
                        "@media screen and (min-width: 740px) and (max-width: 1194px)":
                        {
                          width: "20px",
                          height: "20px",
                        },
                      }}
                    />
                  ) : null}
                  {index === 1 ? (
                    <MonetizationOnOutlined
                      sx={{
                        "@media screen and (min-width: 740px) and (max-width: 1194px)":
                        {
                          width: "20px",
                          height: "20px",
                        },
                      }}
                    />
                  ) : null}
                  {index === 2 ? (
                    <Inventory2Outlined
                      sx={{
                        "@media screen and (min-width: 740px) and (max-width: 1194px)":
                        {
                          width: "20px",
                          height: "20px",
                        },
                      }}
                    />
                  ) : null}
                  {index === 3 ? (
                    <SpeedOutlined
                      sx={{
                        "@media screen and (min-width: 740px) and (max-width: 1194px)":
                        {
                          width: "20px",
                          height: "20px",
                        },
                      }}
                    />
                  ) : null}
                </ListItemIcon>

                <Typography
                  sx={{
                    ml: "-15px",
                    "@media screen and (min-width: 740px) and (max-width: 1194px)":
                    {
                      ml: "-25px",
                      fontSize: "12px",
                    },
                  }}
                >
                  {text}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleItemClick(5)}
              sx={{
                backgroundColor:
                  5 === indexSidebar ? themeColors.sellerPrimary : "inherit",
                height: "50px",
                mt: "0.5rem",
                "&:hover": {
                  backgroundColor: themeColors.sellerPrimary,
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: themeColors.white,
                  ml: "0.4rem",
                  "@media screen and (min-width: 740px) and (max-width: 1194px)":
                  {
                    ml: "-.3rem",
                  },
                }}
              >
                <StoreOutlined
                  sx={{
                    "@media screen and (min-width: 740px) and (max-width: 1194px)":
                    {
                      width: "20px",
                      height: "20px",
                    },
                  }}
                />
              </ListItemIcon>
              {
                <Typography
                  onClick={handleShopManagerClick}
                  sx={{
                    ml: "-15px",
                    width: "100%",
                    "@media screen and (min-width: 740px) and (max-width: 1194px)":
                    {
                      ml: "-25px",
                      fontSize: "12px",
                    },
                  }}
                >
                  Shop Manager
                </Typography>
              }

              {
                <Toolbar>
                  <IconButton
                    onClick={handleShopManagerClick}
                    sx={{ marginLeft: "auto", color: themeColors.white }}
                  >
                    {isShopManagerExpanded ? (
                      isShopManagerCollapseOpen ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )
                    ) : !isShopManagerCollapseOpen ? (
                      <ExpandMore />
                    ) : (
                      <ExpandLess />
                    )}
                  </IconButton>
                </Toolbar>
              }
            </ListItemButton>
          </ListItem>

          <Collapse
            in={isShopManagerCollapseOpen}
            timeout="auto"
            unmountOnExit
            sx={{
              ml: "2.9rem",
              "@media screen and (min-width: 740px) and (max-width: 1194px)": {
                ml: "2rem",
              },
            }}
          >
            <Stack direction="column">
              {[
                "Shop Reviews",
                "Shop Profile",
                "The catalog of the shop"
              ].map((text, count) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    onClick={() => handleShopManagerSelectedClick(count)}
                    sx={{
                      backgroundColor:
                        count === indexSubSidebar
                          ? themeColors.sellerPrimary
                          : "inherit",
                      height: "45px",
                      mt: "0.5rem",
                      "&:hover": {
                        backgroundColor: themeColors.sellerPrimary,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        "@media screen and (min-width: 740px) and (max-width: 1194px)":
                        {
                          fontSize: "12px",
                        },
                      }}
                    >
                      {text}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </Stack>
          </Collapse>

          <ListItem sx={{ mt: "0.5rem" }}>
            <ListItemIcon
              sx={{
                color: themeColors.white,
                ml: "0.4rem",
                "@media screen and (min-width: 740px) and (max-width: 1194px)":
                {
                  ml: "-.3rem",
                },
              }}
            >
              <PhoneInTalkOutlined
                sx={{
                  "@media screen and (min-width: 740px) and (max-width: 1194px)":
                  {
                    width: "20px",
                    height: "20px",
                  },
                }}
              />
            </ListItemIcon>
            {
              <Typography
                sx={{
                  ml: "-15px",
                  "@media screen and (min-width: 740px) and (max-width: 1194px)":
                  {
                    ml: "-25px  ",
                    fontSize: "12px",
                  },
                }}
              >
                Hotline: 0907625917
              </Typography>
            }
          </ListItem>
          <Stack
            sx={{
              width: "100%",
              m: "2rem 0 20px 0",
              "@media screen and (min-width: 740px)": {
                display: "none",
              },
            }}
            direction="row"
            justifyContent="center"
          >
            <Avatar
              sx={{
                backgroundColor: themeColors.avatar,
                width: "40px",
                height: "40px",
              }}
            >
              <Typography color={themeColors.white} sx={{ fontSize: "22px" }}>
                H
              </Typography>
            </Avatar>
          </Stack>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                border: "1px solid white",
                bgcolor: "transparent",
                margin: "0 2rem 0",
                "&:hover": {
                  bgcolor: themeColors.sellerPrimary,
                },
                "@media screen and (min-width: 740px)": {
                  display: "none",
                },
              }}
            >
              <ListItemText
                primary="Log Out"
                sx={{ color: themeColors.white }}
              />
            </ListItemButton>
          </ListItem>
        </Stack>
      </List>
    </Drawer>
  );
}
