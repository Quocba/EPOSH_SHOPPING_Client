import { Box, Card, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { themeColors } from "../../../themes/schemes/PureLightTheme";
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from "react-router";
import { routes } from "../../../routes";
import { AssetImages } from "../../../utils/images";
import WestIcon from "@mui/icons-material/West";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const FlashSale = ({ listProduct }: { listProduct: any }) => {
  const navigate = useNavigate();

  const gotoUnderDevelopment = () => {
    navigate(routes.home.UnderDevPage);
  };

  const gotoProductDetail = (productId: any) => {
    localStorage.setItem("product_id", productId);
    navigate(routes.home.ProductDetailPage);
    document.documentElement.scrollTop = 0;
  };

  const [timeUntilNextDay, setTimeUntilNextDay] = useState('');

  useEffect(() => {
    // Function to calculate the time difference
    const calculateTimeDifference = () => {
      const now = new Date();
      const nextDay = new Date(now);
      nextDay.setDate(nextDay.getDate() + 1);
      nextDay.setHours(0, 0, 0, 0);

      const timeDifference = nextDay.getTime() - now.getTime();
      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      setTimeUntilNextDay(formattedTime);
    };

    const interval = setInterval(calculateTimeDifference, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        boxShadow:
          "0 2px 4px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.1);",
        margin: "30px 0 30px",
        borderRadius: '8px',
        padding: '6px 6px 22px',
        backgroundColor: themeColors.secondary,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px"
        }}
      >
        
        
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          
        <img src={AssetImages.FLASH_SALE} alt="sale" style={{ width: "150px", height: "40px" }} />
        <Typography variant="h4" sx={{
        }}>{timeUntilNextDay}</Typography>
        </Box>
        {/* <Typography
          onClick={gotoUnderDevelopment}
          sx={{
            fontSize: "14px",
            color: themeColors.primary,
            fontWeight: "bold",
            cursor: 'pointer',
          }}>View all</Typography> */}
          <Box sx={{
              backgroundColor: themeColors.primary,
              padding: '8px 16px',
              // width: '180px',
              height: '24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
            }}>
              
              <Typography onClick={gotoUnderDevelopment} sx={{color: themeColors.white, cursor: 'pointer', fontWeight: "600", fontSize: "12px"}}>
                 View all product
              </Typography>
              <DoubleArrowIcon sx={{
                color: themeColors.white,
                marginLeft: '6px',
                fontSize: "14px"
              }}/>
            </Box>
      </Box>
      
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {listProduct?.map((item: any, index: any) => {
          return (
            <Box
              onClick={() => gotoProductDetail(item?.id)}
              sx={{
                width: "15%",
                // height: "230px",
                paddingBottom: "8px",
                backgroundColor: "white",
                position: "relative",
                borderRadius: "10px",
                margin: "0 8px",
                boxShadow:
                  "0 2px 4px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.1);",
                cursor: 'pointer',
                ":hover": {
                  scale: "1.02"
                }
              }}
            >
              <Box
                sx={{
                  padding: "2px 4px",
                  backgroundColor: themeColors.avatar,
                  position: "absolute",
                  bottom: "55px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/478/478013.png"
                  alt="sale"
                  style={{ width: "12px", height: "12px" }}
                />
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: themeColors.primary,
                    fontWeight: "bold",
                    marginLeft: 0.3,
                  }}
                >
                  Saling
                </Typography>
              </Box>
              <Card
                sx={{
                  width: "100%",
                  borderRadius: "0px",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  padding: "3px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={
                    item?.image
                  }
                  alt="banner"
                  sx={{
                    height: "160px",
                    width: "100%"
                  }}
                />
              </Card>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: themeColors.error,
                  fontWeight: "bold",
                  padding: "13px 0 0 10px",
                }}
              >
                ${(item?.price).toFixed(2)}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  padding: "0 0 0 10px",
                }}
              >
                <Typography
                  sx={{
                    color: "#bbb",
                    fontSize: "13px",
                    textDecorationLine: "line-through",
                    marginRight: 0.5,
                  }}
                >
                  ${(item?.price / (1 - item?.discount)).toFixed(2)}
                </Typography>
                <Typography
                  sx={{
                    color: themeColors.error,
                    fontSize: "13px",
                  }}
                >
                  {(item?.discount * 100).toFixed(0)}%
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default FlashSale;
