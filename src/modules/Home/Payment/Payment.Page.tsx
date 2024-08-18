/* eslint-disable react-hooks/exhaustive-deps */
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { Box, Typography } from "@mui/material";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BoxContainer from "../../../component/Box/Box.Container";
import FooterComponent from "../../../layouts/Footer/FooterComponent";
import UserHeader from "../../../layouts/Header/User/UserHeader";
import { routes } from "../../../routes";
import { themeColors } from "../../../themes/schemes/PureLightTheme";
import { addressFake } from "../../../utils/fake/address";
import { AssetImages } from "../../../utils/images";
import { createTransaction, getVoucherByShopID } from "../Home.Api";
import "./Payment.Page.Style.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch } from "react-redux";
import { toastError } from "../../Auth/Auth.Action";

interface Address {
  name: string;
  phone: string;
  address: string;
}

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isDisplay, setIsDisplay] = React.useState(false);
  const [selectedProducts, setSelectedProducts] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
  const [voucherData, setVoucherData] = React.useState<any[]>([]);
  const [selectedVoucher, setSelectedVoucher] = React.useState<any | null>(
    null
  );
  const [isVoucherBoxOpen, setIsVoucherBoxOpen] = React.useState(false);
  const [selectedAddress, setSelectedAddress] = React.useState<Address | null>(
    null
  );

  const dispatch = useDispatch();

  const goToHome = () => {
    navigate(routes.home.Root);
  };

  const goToCart = () => {
    navigate(routes.home.CartPage);
  };

  const goToShopDetail = (shopId: any) => {
    localStorage.setItem("shop_id", shopId);
    navigate(routes.home.ShopDetailPage);
    document.documentElement.scrollTop = 0;
  };

  const gotoProductDetail = (productId: any) => {
    localStorage.setItem("product_id", productId);
    navigate(routes.home.ProductDetailPage);
    document.documentElement.scrollTop = 0;
  };

  const handleChangeAddress = () => {
    var element = document.getElementsByClassName("address_delivery")[0];
    if (!isDisplay) {
      setIsDisplay(!isDisplay);
      element.classList.add("displayy");
    } else {
      setIsDisplay(!isDisplay);
      element.classList.remove("displayy");
    }
  };

  const handleOpen = async (shopId: string) => {
    try {
      setIsVoucherBoxOpen(!isVoucherBoxOpen);
      const data = await getVoucherByShopID(shopId);
      setVoucherData(data);
      console.log(data);
      console.log(voucherData);
    } catch (error) {
      console.error("Error fetching voucher data:", error);
    }
  };

  const handleShowVoucher = async (shopId: string) => {
    handleOpen(shopId);
  };
  const handleSelectVoucher = (voucher: any) => {
    setSelectedVoucher(voucher);
    setIsVoucherBoxOpen(false);
  };
  const handlePlaceOrder = (discount: any) => {
    try {
      selectedProducts.map((order: any) => {
        const data: any = [];

        order.subOrders.map((suborder: any) => {
          data.push(suborder.id);
          return null;
        });
        const responseAPI = createTransaction(data, discount, dispatch);
        responseAPI.then((data) => {
          if (!data) {
            dispatch(
              toastError({
                open: true,
                status: "error",
                message: "You don't have address deliver !",
              })
            );
            setTimeout(() => {
              dispatch(
                toastError({ open: false, status: "error", message: "" })
              );
            }, 3000);
          } else {
            setShowSuccessMessage(true);
            setTimeout(() => {
              setShowSuccessMessage(false);
              navigate(routes.home.Root);
            }, 3000);
          }
        });
        return null;
      });
    } catch (error) {
      console.error("Error sending order:", error);
    }
  };

  const init = async () => {
    await setSelectedProducts(location.state);
    // await getVoucherByShopID(shopId);
    // console.log(shopIdd);
  };

  React.useEffect(() => {
    if (addressFake.length > 0) {
      setSelectedAddress(addressFake?.[0] || null);
    }
  }, [addressFake]);
  const handleAddressClick = (address: any) => {
    setSelectedAddress(address);
    handleChangeAddress();
  };

  React.useEffect(() => {
    init();
  }, []);

  React.useEffect(() => {
    let total = 0;
    selectedProducts?.map((item: any) => {
      total += item.total;
      return total;
    });

    setTotalPrice(total);
  }, [selectedProducts]);

  React.useEffect(() => {}, []);

  return (
    <Box>
      {/* <Box sx={{width:'100%', height:'100%', background:themeColors.gray, position:'absolute'}}></Box> */}
      <Box>
        <UserHeader />
      </Box>
      <Box
        sx={{
          width: "100%",
          padding: "0px 210px 0",
          "@media screen and  (min-width: 46.1875em) and (max-width: 1194px)": {
            padding: "20px 50px 0",
          },
          "@media only screen and (min-width: 340px) and (max-width:740px)": {
            padding: "10px 10px 0",
          },
        }}
      >
        <BoxContainer property="path">
          <Typography onClick={goToHome} className="home">
            Home
          </Typography>
          <Typography>&nbsp;&nbsp;/&nbsp;&nbsp;</Typography>
          <Typography onClick={goToCart} className="home">
            Cart
          </Typography>
          <Typography>&nbsp;&nbsp;/&nbsp;&nbsp;</Typography>
          <Typography variant="h4">Checkout</Typography>
        </BoxContainer>
        <BoxContainer property="address_delivery">
          {addressFake?.map((item: any, index: any) => {
            return (
              <Box
                key={index}
                className="item_address"
                onClick={() => handleAddressClick(item)}
              >
                <Typography
                  variant="h5"
                  sx={{ cursor: "pointer", lineHeight: "30px" }}
                >
                  {item?.name} {item?.phone}
                </Typography>
                <Typography sx={{ cursor: "pointer", lineHeight: "30px" }}>
                  &nbsp;&nbsp;&nbsp;{item?.address}
                </Typography>
              </Box>
            );
          })}
        </BoxContainer>
        <Box sx={{ display: "flex", width: "100%" }}>
          <BoxContainer property="payment">
            <div className="line"></div>
            <BoxContainer property="address_deliver">
              <BoxContainer property="left">
                <Typography sx={{ margin: "0px 0px 20px 0px" }}>
                  <LocalShippingOutlinedIcon />
                  &nbsp;&nbsp;Delivery Address
                </Typography>
                {selectedAddress ? (
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="h5" sx={{ display: "inline" }}>
                      {selectedAddress.name} ({selectedAddress.phone})
                    </Typography>
                    <Typography sx={{ display: "inline" }}>
                      &nbsp;&nbsp; - &nbsp;{selectedAddress.address}
                    </Typography>
                  </Box>
                ) : (
                  <Typography variant="h5" sx={{ display: "inline" }}>
                    Default Address not available
                  </Typography>
                )}
              </BoxContainer>
              <BoxContainer property="right">
                <Box>
                  <Typography sx={{ margin: "0px 0px 20px 0px" }}>
                    &nbsp;
                  </Typography>
                  {selectedAddress ? ( // Chỉ hiển thị nút "Change" nếu đã chọn địa chỉ
                    <Typography
                      color={themeColors.error}
                      sx={{
                        paddingRight: "30px",
                        ":hover": { cursor: "pointer", color: themeColors.red },
                      }}
                      variant="h5"
                      onClick={handleChangeAddress}
                    >
                      Change
                    </Typography>
                  ) : null}
                </Box>
              </BoxContainer>
            </BoxContainer>
            <Box
              sx={{
                position: "fixed",
                top: "24%",
                left: "46%",
                transform: "translate(-50%, -50%)",
                width: "400px",
                padding: "30px",
                borderRadius: "4px",
                background: themeColors.gray,
                color: "black",
                textAlign: "center",
                display: showSuccessMessage ? "block" : "none",
              }}
            >
              <Typography>Order Success!</Typography>
              <Typography>Please wait for confirmation from seller!</Typography>
            </Box>

            <BoxContainer property="title">
              <BoxContainer property="left">
                <Typography variant="h4">Product Ordered</Typography>
              </BoxContainer>
              <BoxContainer property="right">
                <Typography
                  sx={{ width: "30%", textAlign: "center" }}
                  variant="h5"
                >
                  Price
                </Typography>
                <Typography
                  sx={{ width: "30%", textAlign: "center" }}
                  variant="h5"
                >
                  Amount
                </Typography>
                <Typography
                  sx={{ width: "30%", textAlign: "center" }}
                  variant="h5"
                >
                  Subtotal
                </Typography>
              </BoxContainer>
            </BoxContainer>
            {selectedProducts?.map((item: any, index: any) => {
              return (
                <BoxContainer key={index} property="shop_1">
                  <BoxContainer property="shop_name">
                    <img
                      alt=""
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "5px",
                      }}
                      src={item?.shopImage}
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        ":hover": {
                          color: themeColors.avatar,
                          cursor: "pointer",
                        },
                      }}
                      onClick={() => goToShopDetail(item?.shopId)}
                    >
                      &nbsp; {item?.shopName || "noname"}
                    </Typography>
                  </BoxContainer>
                  {item?.subOrders?.map((items: any, index: any) => {
                    return (
                      <BoxContainer property="product_1" key={index}>
                        <BoxContainer property="left">
                          <img
                            alt=""
                            src={items?.product?.image || AssetImages.NO_IMAGE}
                            style={{
                              width: "80px",
                              height: "80px",
                              marginRight: "10px",
                            }}
                          />
                          <Typography
                            sx={{
                              width: "70%",
                              ":hover": {
                                color: themeColors.avatar,
                                cursor: "pointer",
                              },
                            }}
                            onClick={() =>
                              gotoProductDetail(items?.id?.productId)
                            }
                          >
                            {items?.product?.name.length > 50
                              ? items?.product?.name.substring(0, 50) + "..."
                              : items?.product?.name || "error"}
                          </Typography>
                        </BoxContainer>

                        <BoxContainer property="right">
                          <Typography
                            variant="h6"
                            sx={{ width: "30%", textAlign: "center" }}
                          >
                            ${items?.product?.price}
                          </Typography>
                          <Typography
                            sx={{ width: "30%", textAlign: "center" }}
                          >
                            {items?.quantity}
                          </Typography>
                          <Typography
                            variant="h4"
                            sx={{ width: "30%", textAlign: "center" }}
                          >
                            $
                            {(items?.product?.price * items?.quantity).toFixed(
                              2
                            )}
                          </Typography>
                        </BoxContainer>
                      </BoxContainer>
                    );
                  })}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      onClick={() => handleShowVoucher(item?.shopId)}
                      sx={{
                        cursor: "pointer",
                        color: themeColors.primary,
                        fontWeight: "bold",
                      }}
                    >
                      Show all vouchers
                    </Typography>
                    <ArrowForwardIcon
                      sx={{
                        fontSize: "18px",
                        marginLeft: "8px",
                      }}
                    />
                  </Box>
                </BoxContainer>
              );
            })}
          </BoxContainer>
          <Box
            className="show_voucher"
            sx={{
              width: "440px",
              height: "auto",
              background: themeColors.white,
              position: "absolute",
              right: "800px",
              bottom: "250px",
              zIndex: 100,  
              // position: "fixed",
              display: isVoucherBoxOpen ? "block" : "none",
              // borderRadius: "8px",
              color: themeColors.black,
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
              // border:'1px solid rgba(0, 0, 0, 0.2)'
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "10px",

                background: themeColors.primary,
                // borderRadius: "8px 8px 0 0",
                color: themeColors.white,
              }}
            >
              &nbsp;Choose one
            </Typography>
            {voucherData.map((voucher, index) => (
              <Box
                key={index}
                onClick={() => handleSelectVoucher(voucher)}
                sx={{
                  cursor: "pointer",
                  padding: "8px",
                  // borderRadius: "0 0 8px 8px",
                  "&:hover": {
                    background: themeColors.secondary,
                    color: themeColors.primary,
                  },
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>{voucher.name}</Typography>
                  <Typography sx={{ display: "flex" }}>
                    <Typography>$</Typography>
                    <Typography variant="h4">
                      &nbsp;{voucher.discount.toFixed(2)}
                    </Typography>
                  </Typography>
                </Typography>
                <Typography></Typography>
              </Box>
            ))}
          </Box>
          <BoxContainer property="total">
            <BoxContainer property="right">
              <Typography variant="h5" sx={{ marginBottom: "5px" }}>
                Voucher:
              </Typography>
              <BoxContainer property="voucher">
                {selectedVoucher ? (
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                      ":hover": { background: themeColors.gray },
                      borderRadius: "4px",
                    }}
                  >
                    <Typography variant="h6">{selectedVoucher.name}</Typography>
                    <Typography sx={{ display: "flex" }}>
                      <Typography>$</Typography>
                      <Typography variant="h4">
                        &nbsp;{selectedVoucher.discount.toFixed(2)}
                      </Typography>
                    </Typography>
                  </Typography>
                ) : (
                  "No voucher selected"
                )}
              </BoxContainer>
              <Typography variant="h4">Ordered Summary</Typography>
              <BoxContainer property="voucher_apply">
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Items</Typography>
                  <Typography sx={{ display: "flex" }}>
                    <Typography>$</Typography>
                    <Typography variant="h4">
                      &nbsp;{totalPrice.toFixed(2)}
                    </Typography>
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Voucher</Typography>
                  {selectedVoucher ? (
                    <Typography sx={{ display: "flex" }}>
                      <Typography>- $</Typography>
                      <Typography variant="h4">
                        &nbsp;{selectedVoucher.discount.toFixed(2)}
                      </Typography>
                    </Typography>
                  ) : (
                    <Typography>$0</Typography>
                  )}
                </Box>
              </BoxContainer>

              <BoxContainer property="cart">
                <Typography variant="h4" sx={{ color: themeColors.red }}>
                  Cart Total:
                </Typography>

                {selectedVoucher ? (
                  <Typography variant="h3" sx={{ color: themeColors.red }}>
                    ${(totalPrice - selectedVoucher.discount).toFixed(2)}
                  </Typography>
                ) : (
                  <Typography variant="h3" sx={{ color: themeColors.red }}>
                    ${totalPrice.toFixed(2)}
                  </Typography>
                )}
              </BoxContainer>

              <BoxContainer property="end_button">
                {selectedVoucher ? (
                  <Box
                    className="place_order"
                    onClick={() => handlePlaceOrder(selectedVoucher.discount)}
                  >
                    <Typography color={themeColors.white}>
                      Place Order
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    className="place_order"
                    onClick={() => handlePlaceOrder(0)}
                  >
                    <Typography
                      color={themeColors.white}
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      Place Order
                    </Typography>
                  </Box>
                )}
              </BoxContainer>
            </BoxContainer>
          </BoxContainer>
        </Box>
      </Box>
      <Box sx={{ marginTop: "10px" }}>
        <FooterComponent />
      </Box>
    </Box>
  );
};
export default PaymentPage;
