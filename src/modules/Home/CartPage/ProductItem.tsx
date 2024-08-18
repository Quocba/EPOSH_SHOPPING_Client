/* eslint-disable react-hooks/exhaustive-deps */
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as React from "react";
import BoxContainer from "../../../component/Box/Box.Container";
import { themeColors } from "../../../themes/schemes/PureLightTheme";
import { AssetImages } from "../../../utils/images";
import "./Cart.Page.Style.scss";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes";

const ProductItem = ({
  subOrder,
  checkSubOrder,
  changeQuantity,
  orderID,
  deleteSub,
}: {
  subOrder?: any;
  checkSubOrder?: any;
  changeQuantity?: any;
  orderID?: any;
  deleteSub?: any;
}) => {
  const [product, setProduct] = React.useState({
    quantity: 0,
    product: { image: "", price: 0.0, name: "" },
  });

  const navigate = useNavigate();

  const gotoProductDetail = (productId: any) => {
    localStorage.setItem("product_id", productId);
    navigate(routes.home.ProductDetailPage);
    document.documentElement.scrollTop = 0;
  };

  const init = async () => {
    setProduct({
      quantity: 0,
      product: { image: "", price: 0.0, name: "" },
    });
    setProduct(subOrder);
    console.log(subOrder.id.productId);
    console.log(subOrder.id.orderId);
  };

  React.useEffect(() => {
    init();
  }, []);

  React.useEffect(() => {}, [product, subOrder]);

  return (
    <BoxContainer property="product_1">
      {/* <div style={{ display: "flex" }}> */}
      <FormControlLabel
        label=""
        control={
          <Checkbox
            checked={subOrder?.status === 1 ? true : false}
            onChange={() => checkSubOrder(subOrder)}
          />
        }
      />
      <img
        alt=""
        src={product?.product?.image || AssetImages.NO_IMAGE}
        style={{
          width: "80px",
          height: "80px",
          marginRight: "10px",
        }}
      />
      <BoxContainer property="left">
        <Typography
          sx={{
            ":hover": {
              color: themeColors.avatar,
              cursor: "pointer",
            },
          }}
          onClick={() => gotoProductDetail(subOrder?.id?.productId)}
        >
          {product?.product?.name.length > 50
            ? product?.product?.name.substring(0, 50) + "..."
            : product?.product?.name || "error"}
        </Typography>
       
      </BoxContainer>
      {/* </div> */}

      <BoxContainer property="right">
        <Typography style={{ width: "25%", textAlign: "center" }} variant="h6">
          ${(product?.product?.price).toFixed(2)}
        </Typography>
        <BoxContainer property="quantity">
          <Button
            sx={{
              background: themeColors.lightGray,
              border: "1px solid #ddd",
              borderRadius: 0.5,
              minWidth: "30px",
              maxHeight: "29px",
              lineHeight: 2,
              padding: 0,
              fontSize: "18px",
            }}
            variant="text"
            onClick={() => changeQuantity( subOrder, subOrder?.id?.orderId, subOrder?.id?.productId, "decrease")}
          >
            -
          </Button>
          <Box
            sx={{
              color: themeColors.black,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "4px",
              margin: "1px 4px",
              padding: "3px 14px",
            }}
          >
            {subOrder?.quantity}
          </Box>
          <Button
            sx={{
              background: themeColors.lightGray,
              borderRadius: 0.5,
              border: "1px solid #ddd",
              // width: "40px",
              maxHeight: "29px",
              minWidth: "30px",
              lineHeight: 2,
              fontSize: "18px",
              padding: 0,
            }}
            variant="text"
            onClick={() => changeQuantity(subOrder,subOrder?.id?.orderId, subOrder?.id?.productId, "increase")}
          >
            +
          </Button>
        </BoxContainer>

        <Typography style={{ width: "25%", textAlign: "center" }} variant="h4">
          ${(product?.product?.price * subOrder?.quantity).toFixed(2)}
        </Typography>
        <Typography
          style={{
            width: "25%",
            textAlign: "center",
            color: themeColors.error,
          }}
          variant="h5"
        >
          <DeleteOutlineIcon
            sx={{ ":hover": { cursor: "pointer" } }}
            onClick={() => deleteSub(subOrder, orderID)}
          />
        </Typography>
      </BoxContainer>
    </BoxContainer>
  );
};
export default ProductItem;
