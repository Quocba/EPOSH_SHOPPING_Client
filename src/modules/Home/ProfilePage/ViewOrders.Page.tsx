/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import UserHeader from "../../../layouts/Header/User/UserHeader";
import { Box, Typography } from "@mui/material";
import { themeColors } from "../../../themes/schemes/PureLightTheme";
import DrawerProfile from "../../../layouts/Drawer/DrawerHome/DrawerProfile";
import { getAllTransaction } from "../Home.Api";

const ViewOrdersPage: React.FC<{}> = () => {
  const [listTransaction, setListTransaction] = React.useState([]);

  const init = async () => {
    const listTransactionApi = await getAllTransaction();
    console.log(listTransactionApi);
    setListTransaction(listTransactionApi);
  };

  React.useEffect(() => {
    init();
  }, []);

  React.useEffect(() => {}, [listTransaction]);

  return (
    <Box sx={{ width: "100%" }}>
      {/* header */}
      <UserHeader />
      <Box
        sx={{
          width: "100%",
          padding: "40px 260px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: themeColors.white,
        }}
      >
        <DrawerProfile page={2} />

        <Box
          sx={{
            width: "70%",
            minHeight: "500px",
            maxHeight: "500px",
            padding: "40px 0",
            marginTop: "120px",
            borderRadius: "10px",
            boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.2)",
            overflow: "auto",
          }}
        >
          <Box
            sx={{
              width: "90%",
              display: "flex",
              backgroundColor: themeColors.secondary,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              padding: "15px 0px",
              marginBottom: "20px",
              marginLeft: "5%",
            }}
          >
            <Typography variant="h4" color={themeColors.primary}>
              My order
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              padding: "0 40px",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <Typography variant="h6" color={themeColors.primary}>
              Product
            </Typography>
            <Box
              sx={{
                display: "flex",
                marginRight: "27px"
              }}
            >
              <Typography variant="h6" color={themeColors.primary} sx={{
                marginLeft: "50px"
              }}>
                Status
              </Typography>
              <Typography variant="h6" color={themeColors.primary} sx={{
                marginLeft: "68px"
              }}>
                Date
              </Typography>
              <Typography variant="h6" color={themeColors.primary} sx={{
                marginLeft: "58px"
              }}>
                Price
              </Typography>
            </Box>
          </Box>
          {listTransaction?.map((data: any) => {
            return data?.transactionDetails?.map((transaction: any) => {
              return (
                <div>
                  {/* line product */}
                  <Box
                    sx={{
                      width: "100%",
                      padding: "0 40px",
                      display: "flex",
                      alignItems: "center",
                      ":hover": { backgroundColor: themeColors.secondary },
                    }}
                  >
                    {/* image */}
                    <Box
                      sx={{
                        width: "70px",
                        height: "70px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "left",
                      }}
                    >
                      <img alt="product" src={transaction?.image} />
                    </Box>
                    {/* title */}
                    <Box
                      sx={{
                        width: "45%",
                        height: "70px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "left",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                      }}
                    >
                      <Typography>
                        {transaction?.product_name.length > 50
                          ? transaction?.product_name.substring(0, 50) + "..."
                          : transaction?.product_name}
                      </Typography>
                    </Box>
                    {/* quantity */}
                    <Box
                      sx={{
                        width: "13%",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                        textAlign: "center",
                        backgroundColor: data?.status === "completed" ? themeColors.success : data?.status === "canceled" ? themeColors.gray : themeColors.warning,
                      }}
                    >
                      <Typography sx={{
                        color: themeColors.white
                      }}>{data?.status === "wait for confirm" ? "waiting" : data?.status}</Typography>
                    </Box>
                    {/* date order */}
                    <Box
                      sx={{
                        width: "16%",
                        height: "70px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                      }}
                    >
                      <Typography>{data?.time}</Typography>
                    </Box>
                    {/* total price */}
                    <Box
                      sx={{
                        width: "10%",
                        height: "70px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                        textAlign: "right",
                      }}
                    >
                      <Typography>$ {transaction?.price}</Typography>
                    </Box>
                  </Box>
                </div>
              );
            });
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ViewOrdersPage;
