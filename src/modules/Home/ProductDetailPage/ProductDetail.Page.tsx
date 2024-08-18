/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Card, CardMedia } from "@mui/material";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BoxContainer from "../../../component/Box/Box.Container";
import Button from "../../../component/Button/Button.Component";
import FooterComponent from "../../../layouts/Footer/FooterComponent";
import UserHeader from "../../../layouts/Header/User/UserHeader";
import { routes } from "../../../routes";
import { themeColors } from "../../../themes/schemes/PureLightTheme";
import { checkSignIned, formatFollower } from "../../../utils/helper";
import { AssetImages } from "../../../utils/images";
import { formatCommas, formatNumberToMoney } from "../../../utils/string";
import {
  addProductToCart,
  getAllProductByShopID,
  getProductByID,
  getShopByProductID,
} from "../Home.Api";
import ColorButton from "./ColorButton/ColorButton";
import "./ProductDetail.Style.scss";
import { toastError } from "../../Auth/Auth.Action";
import { useDispatch } from "react-redux";

const ProductDetailPage: React.FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<any>([]);
  const [shop, setShop] = useState<any>([]);
  const [listProduct, setListProduct] = useState<any>([]);
  const [productPage, setProductPage] = useState(19);

  const productId = localStorage.getItem("product_id");

  const minusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // subtract 1 from the current quantity
    }
  };
  const plusQuantity = () => {
    setQuantity(quantity + 1); // add 1 to the current quantity
    console.log(product);
    console.log(shop);
  };

  const gotoUnderDevelopment = () => {
    navigate(routes.home.UnderDevPage);
  };

  const gotoProductDetail = (productId: any) => {
    localStorage.setItem("product_id", productId);
    window.location.reload();
    document.documentElement.scrollTop = 0;
  };

  const goToShopDetail = () => {
    localStorage.setItem("shop_id", shop?.id);
    navigate(routes.home.ShopDetailPage);
    document.documentElement.scrollTop = 0;
  };

 

  const handleAddToCart = async () => {

    const data = {
      quantity: quantity,
      productId: productId,
    };

    const responseAPI = await addProductToCart(data);
    console.log(responseAPI);

    if (!responseAPI) {
      if(!checkSignIned()){
        dispatch(
          toastError({
            open: true,
            status: "error",
            message: "You must be login to continue shopping!!!",
          })
        );
        setTimeout(() => {
          dispatch(toastError({ open: false, status: "error", message: "" }));
        }, 3000);
      } else {
        dispatch(
          toastError({
            open: true,
            status: "error",
            message: "You can not buy your own product !",
          })
        );
        setTimeout(() => {
          dispatch(toastError({ open: false, status: "error", message: "" }));
        }, 3000);
      }
      
    } else {
      navigate(routes.home.CartPage);
    }
    
    
   
  };

  const handleSeemore = () => {
    setProductPage((prev) => prev + 20);
  };

  const init = async () => {
    const responseProduct = await getProductByID(productId);
    const responseShop = await getShopByProductID(productId);
    const responseListProduct = await getAllProductByShopID(responseShop?.id);
    responseProduct ? setProduct(responseProduct) : setProduct(null);
    responseShop ? setShop(responseShop) : setShop(null);
    responseListProduct
      ? setListProduct(responseListProduct)
      : setListProduct([]);
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {}, [product, productPage, shop]);

  return (
    <BoxContainer property="product-detail-page">
      {/* header */}
      <UserHeader />

      {/* content of product detail page */}
      <BoxContainer property={"product-detail-container"}>
        {/* product information */}
        <BoxContainer property={"product"}>
          {/* image product */}
          <BoxContainer property={"product-image"}>
            <BoxContainer property={"big-image-container"}>
              <img
                src={product?.image}
                alt="productImage"
                className="big-image"
              />
            </BoxContainer>
            <BoxContainer property={"small-image-container"}>
              <img
                src={AssetImages?.NO_IMAGE}
                alt="productImage"
                className="small-image"
              />
              <img
                src={AssetImages?.NO_IMAGE}
                alt="productImage"
                className="small-image"
              />
              <img
                src={AssetImages?.NO_IMAGE}
                alt="productImage"
                className="small-image"
              />
              <img
                src={AssetImages?.NO_IMAGE}
                alt="productImage"
                className="small-image"
              />
            </BoxContainer>
          </BoxContainer>

          {/* info image */}
          <BoxContainer property={"product-info"}>
            <BoxContainer property={"product-title"}>
              <Typography variant="h4">{product?.name}</Typography>
            </BoxContainer>

            <BoxContainer property={"product-rate"}>
              <Rating
                name="half-rating-read"
                defaultValue={4.4}
                precision={0.1}
                readOnly
                size="small"
              />
              <Divider
                orientation="vertical"
                flexItem
                sx={{ margin: "0 10px" }}
              />
              <Typography>{formatCommas(product?.total_view)} views</Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ margin: "0 10px" }}
              />
              <Typography>{formatCommas(product?.sold)} sold</Typography>
            </BoxContainer>

            <BoxContainer property={"product-price"}>
              <Typography variant="h3" color={themeColors.error}>
                {" "}
                $ {formatNumberToMoney(product?.price)}
              </Typography>
            </BoxContainer>

            <BoxContainer property={"choose-color-size"}>
              <Typography variant="h5" sx={{ marginRight: "18px" }}>
                {" "}
                Color:{" "}
              </Typography>
              <ColorButton>Red</ColorButton>
              <ColorButton>White</ColorButton>
              <ColorButton>Black</ColorButton>
              <ColorButton>Gray</ColorButton>
            </BoxContainer>

            <BoxContainer property={"choose-color-size"}>
              <Typography variant="h5" sx={{ marginRight: "18px" }}>
                {" "}
                Size:{" "}
              </Typography>
              <Box
                sx={{
                  width: "30px",
                  heigh: "30px",
                  cursor: "pointer",
                  backgroundColor: "#ffffff",
                  border: "1px solid #858585",
                  margin: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "6px",
                }}
              >
                S
              </Box>
              <Box
                sx={{
                  width: "30px",
                  heigh: "30px",
                  cursor: "pointer",
                  backgroundColor: "#ffffff",
                  border: "1px solid #858585",
                  margin: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "6px",
                }}
              >
                M
              </Box>
              <Box
                sx={{
                  width: "30px",
                  heigh: "30px",
                  cursor: "pointer",
                  backgroundColor: "#ffffff",
                  border: "1px solid #858585",
                  margin: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "6px",
                }}
              >
                L
              </Box>
              <Box
                sx={{
                  width: "30px",
                  heigh: "30px",
                  cursor: "pointer",
                  backgroundColor: "#ffffff",
                  border: "1px solid #858585",
                  margin: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "6px",
                }}
              >
                XL
              </Box>
            </BoxContainer>

            <BoxContainer property={"choose-quantity"}>
              <Typography variant="h5" sx={{ marginRight: "18px" }}>
                {" "}
                Quantity:{" "}
              </Typography>
              <Button onPress={() => minusQuantity()} property={"set-quantity"}>
                -
              </Button>
              <BoxContainer property={"quantity"}>{quantity}</BoxContainer>
              <Button onPress={() => plusQuantity()} property={"set-quantity"}>
                +
              </Button>
            </BoxContainer>

            <BoxContainer property={"desciption-product"}>
              <Typography variant="h5" sx={{ marginRight: "18px" }}>
                {" "}
                Description:{" "}
              </Typography>
              <Typography sx={{ marginRight: "18px" }}>
                {product?.description}
              </Typography>
            </BoxContainer>

            <BoxContainer property={"choose-action"}>
              <Button property={"add2cart-button"} onPress={handleAddToCart}>
                Add to cart
              </Button>
              <Button property={"buynow-button"} onPress={gotoUnderDevelopment}>
                Buy now
              </Button>
            </BoxContainer>

            <Divider sx={{ margin: "20px 0" }} />
            <BoxContainer property={"promise"}>
              <Typography variant="h6">7 days free returns</Typography>
              <Typography variant="h6">100% genuine goods</Typography>
              <Typography variant="h6">Free shipping</Typography>
            </BoxContainer>
          </BoxContainer>
        </BoxContainer>

        {/* shop information of this product */}
        <BoxContainer property={"shop-info-container"}>
          {/* image and shop name */}
          <BoxContainer property={"shop-info"}>
            <BoxContainer property={"avatar-shop-container"}>
              <img src={shop?.image} alt="avatar" className="avatar-shop" />
            </BoxContainer>
            <BoxContainer property={"shop-name"}>
              <Typography variant="h5">
                {shop?.name} - {shop?.address}
              </Typography>
              <BoxContainer property={"shop-action"}>
                <Button property={"shop-chat"} onPress={gotoUnderDevelopment}>
                  Chat
                </Button>
                <Button property={"shop-view"} onPress={goToShopDetail}>
                  View shop
                </Button>
              </BoxContainer>
            </BoxContainer>
          </BoxContainer>
          <Divider orientation="vertical" flexItem />

          {/* other info fb, followers, join... */}
          <BoxContainer property={"shop-sub-info-container"}>
            <BoxContainer property={"shop-sub-info"}>
              <BoxContainer property={"shop-content"}>
                <Typography>Feedback</Typography>
                <Typography color={themeColors.error}>54.3k</Typography>
              </BoxContainer>
              <BoxContainer property={"shop-content"}>
                <Typography>Products</Typography>
                <Typography color={themeColors.error}>332</Typography>
              </BoxContainer>
            </BoxContainer>
            <Divider orientation="vertical" flexItem />
            <BoxContainer property={"shop-sub-info"}>
              <BoxContainer property={"shop-content"}>
                <Typography>Join</Typography>
                <Typography color={themeColors.error}>3 months ago</Typography>
              </BoxContainer>
              <BoxContainer property={"shop-content"}>
                <Typography>Followers</Typography>
                <Typography color={themeColors.error}>332k</Typography>
              </BoxContainer>
            </BoxContainer>
          </BoxContainer>
        </BoxContainer>

        {/* ========== product ========== */}
        <Typography variant="h4" sx={{ margin: "30px 0 10px" }}>
          Related Products
        </Typography>
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
                  {(item?.total_view === 1 || item?.total_view === 2) && (
                    <Box
                      sx={{
                        position: "absolute",
                        width: "46px",
                        height: "20px",
                        backgroundColor: "#DB4444",
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
                  )}
                  <Box
                    sx={{
                      position: "absolute",
                      width: "40px",
                      height: "42px",
                      backgroundColor: "#FDCA48",
                      right: "0px",
                      borderRadius: "4px",
                      textAlign: "center",
                    }}
                  >
                    <Typography sx={{ color: themeColors.error }}>
                      {(item?.discount * 100).toFixed(0)}%
                    </Typography>
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
                    <Typography
                      sx={{
                        color: themeColors.dark_gray,
                        textDecoration: "line-through",
                      }}
                    >
                      ${(item?.price / (1 - item?.discount)).toFixed(2)}
                    </Typography>
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
                        <Typography
                          variant="subtitle1"
                          color={themeColors.error}
                        >
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
            <Button property={"buttonSeemore"} onPress={() => handleSeemore()}>
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
      </BoxContainer>

      {/* Footer */}
      <FooterComponent />
    </BoxContainer>
  );
};

export default ProductDetailPage;
