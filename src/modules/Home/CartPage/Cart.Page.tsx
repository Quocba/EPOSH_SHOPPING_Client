/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BoxContainer from "../../../component/Box/Box.Container";
import FooterComponent from "../../../layouts/Footer/FooterComponent";
import UserHeader from "../../../layouts/Header/User/UserHeader";
import { routes } from "../../../routes";
import { themeColors } from "../../../themes/schemes/PureLightTheme";
import { saveCartData, saveSelectedProducts } from "../Home.Action";
import { deleteSubOrder, getCartByAccountID, updateQuantity } from "../Home.Api";
import "./Cart.Page.Style.scss";
import ProductItem from "./ProductItem";
import WestIcon from "@mui/icons-material/West";

const CartPage: React.FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartDataFake = useSelector((state: any) => state.home.cartData);
  console.log(cartDataFake)

  const [change, setChange] = React.useState(false);
  const [isCheckAll, setIsCheckAll] = React.useState(false);
  const [selectedProductCount, setSelectedProductCount] = React.useState(0);
  const accountID = localStorage.getItem("account-id");

  const goToPayment = () => {
    const selectedProducts = cartDataFake?.orders?.reduce(
      (selected: any, order: any) => {
        order?.subOrder?.forEach((subOrder: any) => {
          if (subOrder.status === 1) {
            const shopName = order?.shop?.name;
            const shopImage = order?.shop?.image;
            const shopId = order?.shop?.id;
            const total = subOrder?.quantity * subOrder?.product?.price;
            const existingShop = selected.find(
              (item: any) => item.shopName === shopName
            );
            if (existingShop) {
              existingShop.subOrders.push(subOrder);
            } else {
              const newShop = {
                total,
                shopName,
                shopImage,
                shopId,
                subOrders: [subOrder],
              };

              selected.push(newShop);
            }
          }
        });
        return selected;
      },
      []
    );
    console.log(selectedProducts);
    dispatch(saveSelectedProducts(selectedProducts));
    navigate(routes.home.PaymentPage, { state: selectedProducts });
  };

  const goToHome = () => {
    navigate(routes.home.Root);
  };

  const goToShopDetail = (shopId: any) => {
    localStorage.setItem("shop_id", shopId);
    navigate(routes.home.ShopDetailPage);
    document.documentElement.scrollTop = 0;
  };

  const checkOrderStatus = (order: any) => {
    for (const subOrder of order?.subOrder) {
      if (subOrder.status === 0) {
        return 0;
      }
    }
    return 1;
  };

  const calculateSelectedProductCount = () => {
    let totalCount = 0;
    cartDataFake?.orders?.forEach((order: any) => {
      order?.subOrder?.forEach((subOrder: any) => {
        if (subOrder.status === 1) {
          totalCount += subOrder.quantity;
        }
      });
    });
    setSelectedProductCount(totalCount);
  };

  const checkAll = () => {
    if (isCheckAll) {
      setIsCheckAll(false);
      cartDataFake?.orders?.forEach((order: any) => {
        order.status = 0;
        order?.subOrder?.forEach((subOrder: any) => {
          subOrder.status = 0;
        });
      });
    } else {
      setIsCheckAll(true);
      cartDataFake?.orders?.forEach((order: any) => {
        order.status = 1;
        order?.subOrder?.forEach((subOrder: any) => {
          subOrder.status = 1;
        });
      });
    }
    calculateSelectedProductCount();
    dispatch(saveCartData(cartDataFake));
    setChange(!change);
  };

  const checkOrder = (order: any) => {
   
    if (order.status === 1) {
      order.status = 0;
      order?.subOrder?.forEach((subOrder: any) => {
        subOrder.status = 0;
      });
    } else {
      order.status = 1;
      order?.subOrder?.forEach((subOrder: any) => {
        subOrder.status = 1;
      });
    }
    const isAllSubOrdersSelected = cartDataFake?.orders.every(
      (order: any) => order.status === 1
    );

    setIsCheckAll(isAllSubOrdersSelected);
    calculateSelectedProductCount();
    dispatch(saveCartData(cartDataFake));
    setChange(!change);
  };

  const checkSubOrder = (subOrder: any) => {
    if (subOrder.status === 1) {
      subOrder.status = 0;
    } else {
      subOrder.status = 1;
    }

    const order = cartDataFake?.orders.find((order: any) =>
      order.subOrder.includes(subOrder)
    );

    if (order) {
      order.status = checkOrderStatus(order);
    }

    const isAllProductsSelected = order?.subOrder.every(
      (product: any) => product.status === 1
    );

    if (isAllProductsSelected) {
      order.status = 1;
    } else {
      order.status = 0;
    }

    const isAllSubOrdersSelected = cartDataFake?.orders.every((order: any) =>
      order?.subOrder.every((subOrder: any) => subOrder.status === 1)
    );

    setIsCheckAll(isAllSubOrdersSelected);
    calculateSelectedProductCount();
    dispatch(saveCartData(cartDataFake));
    setChange(!change);
  };

  const init = async () => {
    await getCartByAccountID(dispatch, accountID);
  };

  const changeQuantity = async (item:any, orderID: any, productID: any, status: any ) => {
    if (status === "increase" && item.quantity < 100) {
      let result = await updateQuantity(dispatch,orderID, productID,"increase");
      if (result) {
        item.quantity++
        calculateSelectedProductCount();
      }
      
    } else if (status === "decrease" && item.quantity > 1) {
      
      let result = await updateQuantity(dispatch, orderID, productID,"decrease");
      if (result) {
        item.quantity--
        calculateSelectedProductCount();
      }
    }
    dispatch(saveCartData(cartDataFake));
    setChange(!change);
    
  };

  const totalPrice = () => {
    let total = 0;

    cartDataFake?.orders?.forEach((order: any) => {
      order?.subOrder?.forEach((subOrder: any) => {
        if (subOrder.status === 1) {
          total += subOrder?.product?.price * subOrder.quantity;
        }
      });
    });

    return total;
  };

  const selectedSubOrdersTotal = totalPrice();
  const isCheckoutDisabled = selectedSubOrdersTotal === 0;

  const deleteSub = async (subOrder: any, orderID: any) => {
    console.log(cartDataFake);
    const productID = subOrder?.product?.id;
    await deleteSubOrder(orderID, productID, dispatch, accountID);
    setChange(!change);
    console.log(cartDataFake);
  };

  React.useEffect(() => {
    init();
  }, []);

  React.useEffect(() => {}, [cartDataFake, change, totalPrice]);
  return (
    <Box>
      <Box>
        <UserHeader />
      </Box>
      <Box
        sx={{
          width: "100%",
          padding: "0px 210px 0",
          "@media screen and  (min-width: 740px) and (max-width: 1194px)": {
            padding: "20px 50px 0",
          },
          "@media only screen and (min-width: 340px) and (max-width:740px)": {
            padding: "0px 10px 0",
          },
        }}
      >
        <BoxContainer property="path">
          <Typography onClick={goToHome} className="home">
            Home
          </Typography>
          <Typography>&nbsp;&nbsp;/</Typography>
          <Typography variant="h4">&nbsp;&nbsp; Cart</Typography>
        </BoxContainer>

        {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "40px",
          }}
        >
          <Box>
            <BoxContainer property="order_product">
              <BoxContainer property="left">
                <div>
                  <FormControlLabel
                    label={<Typography variant="h5">Select All</Typography>}
                    control={
                      <Checkbox
                        checked={isCheckAll}
                        onChange={() => checkAll()}
                      />
                    }
                  />
                </div>
              </BoxContainer>
              <BoxContainer property="right">
                <Typography className="title" variant="h5">
                  Price
                </Typography>
                <Typography className="title" variant="h5">
                  Quantity
                </Typography>
                <Typography className="title" variant="h5">
                  Total Price
                </Typography>
                <Typography className="title" variant="h5">
                  Actions
                </Typography>
              </BoxContainer>
            </BoxContainer>
            {cartDataFake?.orders?.map((item: any, index: any) => {
              return (
                <BoxContainer property="shop_1" key={index}>
                  <BoxContainer property="shop_name">
                    <FormControlLabel
                      label={""}
                      checked={item?.status}
                      control={<Checkbox onChange={() => checkOrder(item)} />}
                    />

                    <Typography
                      variant="h5"
                      sx={{
                        display: "flex",
                        ":hover": {
                          color: themeColors.avatar,
                          cursor: "pointer",
                        },
                      }}
                      onClick={() => goToShopDetail(item?.shop?.id)}
                    >
                      <img
                        alt=""
                        style={{
                          width: "20px",
                          height: "20px",
                          marginRight: "5px",
                        }}
                        src={item?.shop?.image}
                      />

                      {item?.shop?.name || "lmht.vn"}
                    </Typography>
                  </BoxContainer>
                  {cartDataFake?.orders[index]?.subOrder?.map(
                    (itemm: any, index: any) => {
                      return (
                        <ProductItem
                          key={index}
                          subOrder={itemm}
                          checkSubOrder={checkSubOrder}
                          changeQuantity={changeQuantity}
                          orderID={item?.id}
                          deleteSub={deleteSub}
                        />
                      );
                    }
                  )}
                </BoxContainer>
              );
            })}
            <Box sx={{
              backgroundColor: themeColors.primary,
              padding: '10px',
              width: '180px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              marginTop: '20px',
            }}>
              <WestIcon sx={{
                color: themeColors.white,
                marginRight: '6px',
              }}/>
              <Typography onClick={goToHome} sx={{color: themeColors.white, cursor: 'pointer', fontWeight: "600"}}>
                 Continue shopping
              </Typography>
            </Box>
          </Box>

          <Box>
            <BoxContainer property="cart_total">
              <Typography variant="h4">
                &nbsp;&nbsp;{selectedProductCount} products are selected
              </Typography>
              <BoxContainer property="right">
                <BoxContainer property="total_price">
                  <Typography variant="h5" sx={{ paddingLeft: "10px" }}>
                    Total:
                  </Typography>
                  <Typography variant="h3" sx={{ color: "black" }}>
                    ${selectedSubOrdersTotal.toFixed(2)}
                  </Typography>
                </BoxContainer>
                <Box
                  className={`checkout ${isCheckoutDisabled ? "disabled" : ""}`}
                  onClick={isCheckoutDisabled ? undefined : goToPayment}
                  style={{
                    cursor: isCheckoutDisabled ? "not-allowed" : "pointer",
                  }}
                >
                  <Typography
                    color={themeColors.white}
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    Checkout
                  </Typography>
                </Box>
              </BoxContainer>
              {/* </a> */}
            </BoxContainer>
          </Box>
        </Box>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
      </Box>
      <Box>
        <FooterComponent />
      </Box>
    </Box>
  );
};
export default CartPage;
