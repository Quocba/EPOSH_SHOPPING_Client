import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { themeColors } from "../../../themes/schemes/PureLightTheme";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes";

const NewArrivals = ({ listProduct }: { listProduct?: any }) => {

  const navigate = useNavigate();

  const gotoProductDetail = (productId: any) => {
    localStorage.setItem("product_id", productId);
    navigate(routes.home.ProductDetailPage);
    document.documentElement.scrollTop = 0;
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "394px",
        display: "flex",
        borderRadius: "8px",
        flexWrap: "wrap",
        justifyContent: "space-between",
        backgroundColor: themeColors.secondary,
        padding: "24px",
      }}
    >
      {[listProduct?.slice(0, 3), listProduct?.slice(3, 6), listProduct?.slice(6, 9), listProduct?.slice(9, 12), listProduct?.slice(12, 15), listProduct?.slice(15, 18)].map((item: any, index: any) => {
        return (
          <Box
            sx={{
              width: "32%",
              height: "160px",
              marginBottom: "24px",
              borderRadius: "8px",
              backgroundColor: themeColors.white,
              boxShadow:
                "0 2px 4px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.1);",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                padding: "10px",
              }}
            >
              {
                index === 0 ? "New Arrivals" : index === 1 ? "Top ranking" : index === 2 ? "Savings spotlight" : index === 3 ? "Dropshipping" : index === 4 ? "Regional specialties" : "Tips" 
              }
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {item?.map((productItem: any, productIndex: any) => {
                return (
                  <Box
                    onClick={() => gotoProductDetail(productItem?.id)}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "30%",
                      alignItems: "center",
                      cursor: "pointer",
                      margin: "10px",
                      ':hover': {scale: '1.02'}
                    }}
                  >
                    <Card
                      sx={{
                        height: 60,
                        width: 60,
                        borderRadius: "4px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={productItem?.image}
                        alt="banner"
                        height="100%"
                        width="100%"
                      />
                    </Card>
                    <Typography variant="h5">${(productItem?.price).toFixed(2)}</Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontSize: "10px",
                      }}
                    >
                      50 sets
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default NewArrivals;
