import React from "react";
import BoxContainer from "../../../../component/Box/Box.Container";
import "./ShopCart.Style.scss";
import { Box, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import StarIcon from '@mui/icons-material/Star';
import { themeColors } from "../../../../themes/schemes/PureLightTheme";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../routes";

function ShopCart({
    name,
    rate,
    image,
    followers,
    idProduct
}: {
    name: string;
    rate: number;
    image: any;
    followers: number;
    idProduct?: number
}) {
    const navigate = useNavigate();

    const goToShopDetail = () => {
        localStorage.setItem("shop_id", idProduct + "");
        navigate(routes.home.ShopDetailPage)
        document.documentElement.scrollTop = 0;
    }
    return (
        <BoxContainer property={"container-shop"}>
            <BoxContainer property={"container-image"}>
                <img src={image} alt="avtar-shop" />
            </BoxContainer>

            <BoxContainer property={"container-title"}>
                <Typography variant="h5">{name}</Typography>
            </BoxContainer>

            <BoxContainer property={"container-rate-followers"}>
                <BoxContainer property={"favourite-box"}>
                    <Typography>Favourite</Typography>
                </BoxContainer>
                <Divider orientation="vertical" flexItem sx={{ margin: '0 10px' }} />
                <BoxContainer property={"star-rate"}>
                    <StarIcon />&nbsp;
                    <Typography color={themeColors.red}>{rate}</Typography>
                </BoxContainer>
                <Divider orientation="vertical" flexItem sx={{ margin: '0 10px' }} />
                <Typography color={themeColors.dark_gray}>{followers + " Followers"}</Typography>
            </BoxContainer>

            <Box className={"container-viewshop-button"} onClick={goToShopDetail}>
                View shop
            </Box>
        </BoxContainer>
    );
}

export default ShopCart;