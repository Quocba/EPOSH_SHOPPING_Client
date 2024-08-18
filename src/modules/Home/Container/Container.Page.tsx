/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Card, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BannerSlider from "../SlideBanner/SlideBanner";
import { themeColors } from "../../../themes/schemes/PureLightTheme";
import { saveListCategory, saveListProduct } from "./../Home.Action";
import { getAllCategory, getAllProduct } from "./../Home.Api";
import "./Container.Page.Style.scss";
import { formatFollower } from "../../../utils/helper";
import Button from "@mui/material/Button";
import { formatNumberToMoney } from "../../../utils/string";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes";
import { listBannerBig, listBannerSmall, listSlider } from "../../../utils/fake/banner";
import CategoryHome from "../Components/CategoryHome";
import NewArrivals from "../NewArrivals/NewArrivals";
import FlashSale from "../FlashSale/FlashSale";

const ContainerPage: React.FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listCategory = useSelector((state: any) => state.home.listCategory);
  const listProduct = useSelector((state: any) => state.home.listProduct);

  const [productPage, setProductPage] = useState(19);

  const gotoProductDetail = (productId: any) => {
    localStorage.setItem("product_id", productId);
    navigate(routes.home.ProductDetailPage);
    document.documentElement.scrollTop = 0;
  };

  const goCategoryProduct = (categoryName: any) => {
    localStorage.setItem("category_name", categoryName);
    navigate(routes.home.CategoryProductPage);
    document.documentElement.scrollTop = 0;
  };

  const handleSeemore = () => {
    setProductPage((prev) => prev + 20);
  };

  const init = async () => {
    const categoryResponse = await getAllCategory(dispatch);
    const productResponse = await getAllProduct(dispatch);

    if (categoryResponse) {
      saveListCategory(categoryResponse);
    }
    if (productResponse) {
      saveListProduct(productResponse);
    }
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, [listCategory, listProduct, productPage]);

  return (
    <Box
      sx={{
        width: "100%",
        padding: "20px 210px 0",
        "@media screen and  (min-width: 46.1875em) and (max-width: 1194px)": {
          padding: "20px 50px 0",
        },
        "@media only screen and (min-width: 340px) and (max-width:740px)": {
          padding: "10px 10px 0",
        },
      }}
    >
      {/* ========== slide bannder ========== */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
        }}
      >
        <CategoryHome listCategory={listCategory} filterCategory={goCategoryProduct} />
        <BannerSlider banners={listSlider} autoplayInterval={3000} />
      </Box>

      <NewArrivals listProduct={listProduct.sort((a: any, b: any) => b?.total_view - a?.total_view).slice(0, 18)} />

      <FlashSale listProduct={listProduct.sort((a: any, b: any) => b?.discount - a?.discount).slice(0, 6)} />

      {/* ========== banner top ========== */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          maxHeight: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "40px",
          marginTop: "40px",
          "@media only screen and (min-width: 340px) and (max-width:740px)": {
            height: "30%",
            marginBottom: "10px",
          },
        }}
      >
        {listBannerBig?.map((item: any, index: any) => {
          return (
            <Box
              key={index}
              sx={{
                width: "49.5%",
                height: "100%",
                borderRadius: 10,
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  boxShadow:
                    "0 2px 4px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.16);",
                }}
              >
                <CardMedia
                  component="img"
                  image={item?.image}
                  alt="banner"
                  height="100%"
                  width="100%"
                />
              </Card>
            </Box>
          );
        })}
      </Box>

      {/* ========== banner ========== */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "36px",
          height: 100,
          "@media only screen and (min-width: 340px) and (max-width:740px)": {
            height: 50,
            marginBottom: "10px",
          },
        }}
      >
        {listBannerSmall?.map((item: any, index: any) => {
          return (
            <Box
              key={index}
              sx={{
                width: "32.7%",
                height: 100,
                borderRadius: 10,
                "@media only screen and (min-width: 340px) and (max-width:740px)":
                {
                  height: "100%",
                },
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  boxShadow:
                    "0 2px 4px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.16);",
                }}
              >
                <CardMedia
                  component="img"
                  image={item?.image}
                  alt="banner"
                  height="100%"
                  width="100%"
                />
              </Card>
            </Box>
          );
        })}
      </Box>

      {/* ========== product ========== */}
      <Box
        sx={{
          width: "101%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: 4,
          flexWrap: "wrap",
          marginLeft: "-0.5%",
        }}
      >
        {listProduct?.map((item: any, index: any) => {
          if (index > productPage) {
            return null;
          }

          return (
            <Box
              key={item?.id}
              sx={{
                padding: "10px",
                // height: '348px',
                width: "20%",
                transition: "all 0.2s ease-in-out",
                cursor: "pointer",
                "@media only screen and (min-width: 740px) and (max-width:1194px)":
                {
                  width: "25%",
                },
                "@media only screen and (min-width: 340px) and (max-width:740px)":
                {
                  width: "50%",
                  // height: '320px',
                },
                ":hover": {
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => gotoProductDetail(item?.id)}
            >
              <Box
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  boxShadow:
                    "0 2px 4px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.1);",
                  backgroundColor: themeColors.white,
                  position: "relative",
                }}
              >
                {
                  (item?.total_view === 1 || item?.total_view === 2) && (
                    <Box
                      sx={{
                        position: "absolute",
                        width: "46px",
                        height: "20px",
                        backgroundColor: themeColors.error,
                        borderRadius: "4px",
                        top: "10px",
                        left: "-4px",
                        color: themeColors.white,
                        textAlign: "center",
                        fontSize: "12px",
                      }}
                    >
                      Mall
                    </Box>
                  )
                }
                <Box
                  sx={{
                    position: "absolute",
                    width: "40px",
                    height: "42px",
                    backgroundColor: themeColors.avatar,
                    right: "0px",
                    borderRadius: "4px",
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{ color: themeColors.error  }}>{(item?.discount * 100).toFixed(0)}%</Typography>
                  <Typography
                    sx={{ color: themeColors.white, fontSize: "12px" }}
                  >
                    OFF
                  </Typography>
                </Box>
                <Card
                  sx={{
                    width: "100%",
                    height: 200,
                    borderRadius: "8px 8px 0 0",
                    boxShadow: "none",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item?.image}
                    alt="banner"
                    height="100%"
                    width="100%"
                  />
                </Card>
                <Box
                  sx={{
                    padding: "10px",
                  }}
                >
                  <Box
                    sx={{
                      minHeight: "70px",
                    }}
                  >
                    <Typography
                      style={{
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitLineClamp: 3, // Số dòng tối đa hiển thị
                        WebkitBoxOrient: "vertical",
                        fontWeight: "500",
                      }}
                      height={"100%"}
                    >
                      {item?.name}
                    </Typography>
                  </Box>
                  <Typography sx={{ color: themeColors.dark_gray, textDecoration: "line-through" }}>${(item?.price / (1 - item?.discount)).toFixed(2)}</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Typography variant="subtitle1" color={themeColors.error}>
                        $
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color={themeColors.error}
                        sx={{
                          fontWeight: "bold",
                          marginLeft: "1px",
                        }}
                      >
                        {formatNumberToMoney(item?.price.toFixed(2))}
                      </Typography>
                    </Box>
                    <Typography variant="subtitle1">
                      {formatFollower(item?.sold)}&nbsp;sold
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* see more button */}
      <Box
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {productPage <= listProduct?.length ? (
          <Button
            sx={{
              width: "10%",
              height: "20px",
              border: "1px solid #000",
              borderRadius: "4px",
              margin: "0 0 40px 0",
              padding: "12px 0",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
              ":hover": {
                cursor: "pointer",
                opacity: "0.5",
              },
            }}
            onClick={() => handleSeemore()}
          >
            See more
          </Button>
        ) : (
          <Box
            sx={{
              marginBottom: 4,
            }}
          >
            <Typography>
              You viewed all product ({listProduct?.length} products)
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ContainerPage;
