/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import FooterComponent from "../../../layouts/Footer/FooterComponent";
import BoxContainer from "../../../component/Box/Box.Container";
import UserHeader from "../../../layouts/Header/User/UserHeader";
import './SearchProduct.Style.scss';
import ShopCart from "./ShopCart/ShopCart";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { themeColors } from "../../../themes/schemes/PureLightTheme";
import { formatFollower } from "../../../utils/helper";
import { searchProductByName, searchShopByName } from "../Home.Api";
import { useNavigate } from "react-router-dom";
import { formatNumberToMoney } from "../../../utils/string";
import Button from "@mui/material/Button";
import { routes } from "../../../routes";

const SearchProductPage: React.FC<{}> = () => {
    const navigate = useNavigate();

    const [productPage, setProductPage] = useState(19);
    const [products, setProducts] = useState<any>([]);
    const [shops, setShops] = useState<any>([]);

    const inputValue = localStorage.getItem("input_search");

    const handleSeemore = () => {
        setProductPage((prev) => prev + 20);
    };

    const gotoProductDetail = (productId: any) => {
        localStorage.setItem("product_id", productId);
        navigate(routes.home.ProductDetailPage)
        document.documentElement.scrollTop = 0;
    }

    const init = async () => {
        const productResponse = await searchProductByName(inputValue);
        const shopResponse = await searchShopByName(inputValue);
        productResponse ? setProducts(productResponse) : setProducts([]);
        shopResponse ? setShops(shopResponse) : setShops([])
    };

    useEffect(() => { }, [products, productPage,]);

    useEffect(() => {
        init();
    }, [inputValue])

    return (
        <BoxContainer property="search-product-page">
            {/* header */}
            <UserHeader />

            <BoxContainer property={"search-product-container"}>

                {/* shop related */}
                <BoxContainer property={"shop-search"}>
                    <Typography variant="h4" sx={{ marginBottom: '10px', width: '100%' }}>Related Shops</Typography>
                    {
                        shops?.length > 0 ? (
                            <BoxContainer property={"shop-list"}>
                                {shops?.map((item: any, index: any) => {
                                    if (index > 2) {
                                        return null
                                    }
                                    return (
                                        <ShopCart idProduct={item?.id} key={item?.id} name={item?.name} rate={item?.rate || 4.5} followers={item?.followers || 5000} image={item?.image} />
                                    )
                                })}
                            </BoxContainer>
                        ) : (
                            <Typography sx={{ display: 'block' }}>
                                There are no shop related to "{inputValue}" key word
                            </Typography>
                        )
                    }

                </BoxContainer>

                {/* list product related */}
                <BoxContainer property={"product-search"}>
                    <Typography variant="h4" sx={{ margin: '30px 0 10px' }}>Related Products</Typography>
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
                        {products?.map((item: any, index: any) => {
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
                                            )
                                        }
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
                                            <Typography sx={{ color: themeColors.error }}>{(item?.discount * 100).toFixed(0)}%</Typography>
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
                </BoxContainer>

                {/* see more button */}
                <Box
                    sx={{
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                    }}
                >
                    {productPage <= products?.length ? (
                        <Button
                            sx={{
                                width: "10%",
                                height: "20px",
                                border: "1px solid black",
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
                            {products?.length === 0 ? (
                                <Typography>
                                    There are no products related to "{inputValue}" key word
                                </Typography>
                            ) : (
                                <Typography>
                                    You viewed all product ({products?.length} products)
                                </Typography>
                            )}

                        </Box>
                    )}
                </Box>
            </BoxContainer>

            {/* Footer */}
            <FooterComponent />
        </BoxContainer >
    );
};


export default SearchProductPage;