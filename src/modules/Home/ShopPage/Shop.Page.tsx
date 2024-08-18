/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import FooterComponent from "../../../layouts/Footer/FooterComponent";
import BoxContainer from "../../../component/Box/Box.Container";
import UserHeader from "../../../layouts/Header/User/UserHeader";
import './Shop.Style.scss';
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { themeColors } from "../../../themes/schemes/PureLightTheme";
import { formatFollower } from "../../../utils/helper";
import { getAllProductByShopID, getCategoryByShopID, getShopByID } from "../Home.Api";
import { useNavigate } from "react-router-dom";
import { formatCommas, formatNumberToMoney } from "../../../utils/string";
import Button from "@mui/material/Button";
import { routes } from "../../../routes";
import TextsmsIcon from '@mui/icons-material/Textsms';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

const ShopPage: React.FC<{}> = () => {
    const navigate = useNavigate();

    const [productPage, setProductPage] = useState(19);
    const [products, setProducts] = useState<any>([]);
    const [categoryType, setCategoryType] = useState<number>(1);
    const [listCateType, setListCateType] = useState<any>([]);
    const [shop, setShop] = useState<any>(null);

    const handleSeemore = () => {
        setProductPage((prev) => prev + 20);
    };

    const gotoUnderDevelopment = () => {
        navigate(routes.home.UnderDevPage)
    }

    const gotoProductDetail = (productId: any) => {
        localStorage.setItem("product_id", productId);
        navigate(routes.home.ProductDetailPage);
        document.documentElement.scrollTop = 0;
    };

    const changeCategory = (index: any, categoryID: any) => {
        setCategoryType(index)
    }

    const init = async () => {
        const shopId = localStorage.getItem("shop_id");
        const productsResponse = await getAllProductByShopID(shopId)
        const shopResponse = await getShopByID(shopId);
        const listCategoryType = await getCategoryByShopID(shopId);
        console.log(listCategoryType);

        productsResponse ? setProducts(productsResponse) : setProducts([]);
        shopResponse ? setShop(shopResponse) : setShop(null);
        setListCateType(['ALL PRODUCTS'])
        setListCateType(listCateType.concat(listCategoryType))

    };

    useEffect(() => { }, [products, productPage, categoryType,]);

    useEffect(() => {
        init();
    }, [])

    return (
        <BoxContainer property="shop-detai-page-container">
            {/* header */}
            <UserHeader />

            <BoxContainer property={"shop-detai-page"}>

                {/* shop information */}
                <BoxContainer property={"shop-information-container"}>

                    {/* shop image and name */}
                    <BoxContainer property={"shop-image-and-name"}>
                        <BoxContainer property={"avatar-shop-container"}>
                            <img src={shop?.image} alt="avatar" className="avatar-shop" />
                        </BoxContainer>
                        <BoxContainer property={"shop-name"}>
                            <BoxContainer>
                                <Typography variant="h4">{shop?.name}</Typography>
                                <Typography variant="h5" color={themeColors.gray}>{shop?.address} </Typography>
                            </BoxContainer>

                            <BoxContainer property={"shop-action"}>
                                <Button className={"shop-chat"} sx={{ width: '46%', border: '1px black solid', padding: '6px 0px' }} onClick={gotoUnderDevelopment}>
                                    <TextsmsIcon sx={{ fontSize: '18px' }} />
                                    &nbsp;Chat
                                </Button>
                                <Button className={"shop-view"} sx={{ width: '46%', border: '1px black solid', padding: '6px 0px' }} onClick={gotoUnderDevelopment}>
                                    <ControlPointIcon sx={{ fontSize: '18px' }} />
                                    &nbsp;Follow
                                </Button>
                            </BoxContainer>
                        </BoxContainer>
                    </BoxContainer>

                    {/* shop others infor */}
                    <BoxContainer property={"shop-infor-detail"}>
                        <BoxContainer property={"shop-infor-part"}>
                            <BoxContainer property={"shop-infor-line"}>
                                <Inventory2Icon sx={{ fontSize: '20px' }} />
                                <Typography>&nbsp;&nbsp;Number of product:&nbsp;&nbsp;</Typography>
                                <Typography color={themeColors.red} sx={{ fontWeight: '500' }}>40</Typography>
                            </BoxContainer>
                            <BoxContainer property={"shop-infor-line"}>
                                <StarOutlineIcon sx={{ fontSize: '20px' }} />
                                <Typography>&nbsp;&nbsp;Rates:&nbsp;&nbsp;</Typography>
                                <Typography color={themeColors.red} sx={{ fontWeight: '500' }}>4.6</Typography>
                            </BoxContainer>
                        </BoxContainer>

                        <BoxContainer property={"shop-infor-part"}>
                            <BoxContainer property={"shop-infor-line"}>
                                <PeopleAltIcon sx={{ fontSize: '20px' }} />
                                <Typography >&nbsp;&nbsp;Followers:&nbsp;&nbsp;</Typography>
                                <Typography color={themeColors.red} sx={{ fontWeight: '500' }}>{formatCommas(5000)}</Typography>
                            </BoxContainer>
                            <BoxContainer property={"shop-infor-line"}>
                                <HourglassEmptyIcon sx={{ fontSize: '20px' }} />
                                <Typography>&nbsp;&nbsp;Join:&nbsp;&nbsp;</Typography>
                                <Typography color={themeColors.red} sx={{ fontWeight: '500' }}>3 months ago</Typography>
                            </BoxContainer>
                        </BoxContainer>
                    </BoxContainer>

                    <BoxContainer property={"shop-page-category"}>
                        {listCateType?.map((item: any, index: any) => {
                            if (index > 5) {
                                return null
                            }
                            return (
                                <Typography
                                    key={index} className="category"
                                    variant="subtitle1"
                                    sx={{
                                        color: categoryType === (index + 1) ? themeColors.red : undefined, cursor: 'pointer', ":hover": { scale: '1.2' }, display: "-webkit-box",
                                        overflow: "hidden",
                                        WebkitLineClamp: 1, // Số dòng tối đa hiển thị
                                        WebkitBoxOrient: "vertical",
                                    }}
                                    onClick={() => changeCategory(index + 1, item?.id)}
                                >
                                    {item}
                                </Typography>
                            )
                        })}
                    </BoxContainer>
                </BoxContainer>



                {/* list product of this shop */}
                <BoxContainer property={"product-of-shop"}>
                    <Typography variant="h4" sx={{ margin: '30px 0 10px' }}>All products of this shop</Typography>
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
                            <Typography>
                                You viewed all product ({products?.length} products)
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


export default ShopPage;