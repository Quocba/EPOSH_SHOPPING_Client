/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useEffect } from "react";
import FooterComponent from "../../../layouts/Footer/FooterComponent";
import BoxContainer from "../../../component/Box/Box.Container";
import UserHeader from "../../../layouts/Header/User/UserHeader";
import '../SearchProductPage/SearchProduct.Style.scss';
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import { themeColors } from "../../../themes/schemes/PureLightTheme";
import { formatFollower } from "../../../utils/helper";
import { getProductByCategoryName } from "../Home.Api";
import { formatNumberToMoney } from "../../../utils/string";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes";

const CategoryProductPage: React.FC<{}> = () => {
    const navigate = useNavigate();

    const [product, setProduct] = React.useState<any>([]);
    const [productPage, setProductPage] = React.useState(19);

    const categoryName = localStorage.getItem("category_name");

    const loadProduct = async () => {
        const response = await getProductByCategoryName(categoryName)
        if (response) {
            setProduct(response);
        } else {
            setProduct([])
        }
    }

    const gotoProductDetail = (productId: any) => {
        localStorage.setItem("product_id", productId);
        navigate(routes.home.ProductDetailPage)
        document.documentElement.scrollTop = 0;
    }

    const handleSeemore = () => {
        setProductPage((prev) => prev + 20);
    };

    useEffect(() => {
        loadProduct();
    }, []);

    return (
        <BoxContainer property="search-product-page">
            {/* header */}
            <UserHeader />

            <BoxContainer property={"search-product-container"}>

                {/* list product related */}
                <BoxContainer property={"product-search"}>
                    <Typography variant="h5" sx={{ margin: '30px 0 10px', fontWeight: "400" }}>Related Products</Typography>
                    <Typography variant="h5" sx={{ margin: '30px 0 10px' }}>&nbsp; {"/ " + categoryName}</Typography>
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
                        {product?.map((item: any, index: any) => {
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
                    {productPage <= product.length ? (
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
                                    opacity: "0.9",
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
                                You viewed all product ({product.length} products)
                            </Typography>
                        </Box>
                    )}
                </Box>
            </BoxContainer>

            {/* Footer */}
            <FooterComponent />
        </BoxContainer >
    );
};


export default CategoryProductPage;