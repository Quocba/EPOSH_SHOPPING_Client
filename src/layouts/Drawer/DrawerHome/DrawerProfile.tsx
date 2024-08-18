import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { themeColors } from "../../../themes/schemes/PureLightTheme";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import HomeIcon from '@mui/icons-material/Home';


export default function DrawerProfile({ page, avatar }: { page?: any, avatar?: any }) {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [fullname, setFullname] = useState<any>(" ");

    const goToEditProfile = () => {
        navigate(routes.home.ProfilePage)
    }

    const goToEditAddressDeliver = () => {
        navigate(routes.home.EditAddressDeliverPage)
    }

    const goToViewOrders = () => {
        navigate(routes.home.ViewOrdersPage)
    }

    const goToSeller = () => {
        navigate(routes.seller.Root)
    }

    const goToChangePassword = () => {
        navigate(routes.home.ChangePasswordPage)
    }

    const changeStateOpen = () => {
        setOpen(!open);
    }

    const init = async () => {
        const fullname = localStorage.getItem("fullname");
        setFullname(fullname)

    };

    useEffect(() => {
        init();
    }, []);

    return (
        <Box sx={{ width: '30%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100px' }}>
                <Avatar alt="Travis Howard" sx={{ width: '80px', height: '80px', marginRight: '20px' }} src={avatar} />
                <Typography fontSize={'22px'} color={themeColors.black} fontWeight={600}>{fullname}</Typography>
            </Box>
            <Box sx={{ margin: '20px 0 0 30px' }}>
                <Typography onClick={goToEditProfile} sx={{
                    color: themeColors.black, cursor: 'pointer', fontWeight: '500', margin: '16px 0', ":hover": {
                        color: '#000000',
                        fontSize: '18px'
                    },
                    opacity: page === 1 ? '1' : '0.4',
                    fontSize: page === 1 ? '18px' : '16px'
                }}><EditIcon sx={{ fontSize: '20px', marginRight: '10px' }} /> Edit profile</Typography>
                <Typography onClick={goToEditAddressDeliver} sx={{
                    color: themeColors.black, cursor: 'pointer', fontWeight: '500', margin: '16px 0', ":hover": {
                        color: '#000000',
                        fontSize: '18px'
                    },
                    opacity: page === 3 ? '1' : '0.4',
                    fontSize: page === 3 ? '18px' : '16px'
                }}><HomeIcon sx={{ fontSize: '20px', marginRight: '10px' }} /> Edit address deliver</Typography>

                <Typography onClick={goToViewOrders} sx={{
                    color: themeColors.black, cursor: 'pointer', fontWeight: '500', margin: '16px 0', ":hover": {
                        color: '#000000',
                        fontSize: '18px'
                    },
                    opacity: page === 2 ? '1' : '0.4',
                    fontSize: page === 2 ? '18px' : '16px'
                }}><BorderAllIcon sx={{ fontSize: '20px', marginRight: '10px' }} /> View orders</Typography>
                {/* <Typography onClick={goToSeller} sx={{
                    color: themeColors.black, cursor: 'pointer', fontWeight: '500', margin: '16px 0', ":hover": {
                        color: '#000000',
                        fontSize: '18px'
                    },
                    opacity: page === 3 ? '1' : '0.4',
                    fontSize: page === 3 ? '18px' : '16px'
                }}><ShoppingBasketIcon sx={{ fontSize: '20px', marginRight: '10px' }} /> View shop (seller)</Typography> */}
                <Typography onClick={goToChangePassword} sx={{
                    color: themeColors.black, cursor: 'pointer', fontWeight: '500', margin: '16px 0', ":hover": {
                        color: '#000000',
                        fontSize: '18px'
                    },
                    opacity: page === 4 ? '1' : '0.4',
                    fontSize: page === 4 ? '18px' : '16px'
                }}><ChangeCircleOutlinedIcon sx={{ fontSize: '20px', marginRight: '10px' }} /> Change password</Typography>
                {/* <Typography onClick={changeStateOpen} sx={{
                    color: themeColors.black, cursor: 'pointer', fontWeight: '500', margin: '16px 0', ":hover": {
                        color: '#000000',
                        fontSize: '18px'
                    },
                    opacity: page === 5 ? '1' : '0.4',
                    fontSize: page === 5 ? '18px' : '16px'
                }}><DeleteOutlineOutlinedIcon sx={{ fontSize: '20px', marginRight: '10px' }} /> Delete account</Typography>
                <Box sx={{ width: '100%', height: '100%', position: 'absolute', top: '0%', left: '0', backgroundColor: '#000000', display: open ? 'block' : 'none', opacity: '0.5' }} onClick={changeStateOpen}>

                </Box>
                <Box sx={{ width: '30%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: themeColors.white, display: open ? 'block' : 'none', zIndex: '10', textAlign: 'center', padding: '40px 60px 60px 60px', borderRadius: '8px' }}>
                    <WarningAmberIcon sx={{ fontSize: '30px', color: themeColors.red }} />
                    <Typography sx={{ fontSize: '24px', color: themeColors.red, margin: '10px 0' }}>Confirm Account Deletion</Typography>
                    <Typography>Are you sure to delete your whole account? You will lose everythings. Usernames, avatar, history of orders, your personal information and everthing you've ever posted will be gone forever.</Typography>
                    <Typography>If you still want to delete, please confirm below?</Typography>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginTop: '60px' }}>
                        <div></div>
                        <Button variant="contained" sx={{ backgroundColor: themeColors.red, width: '34%' }} >Yes, delete</Button>
                        <Button variant="outlined" color="success" onClick={changeStateOpen} sx={{ width: '34%' }}>No, cancel</Button>
                        <div></div>
                    </Box>
                </Box> */}

            </Box>
        </Box>

    );
}
