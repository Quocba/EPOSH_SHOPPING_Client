/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import DrawerComponent from '../../../../layouts/Drawer/DrawerSeller/DrawerComponent'
import SellerHeader from '../../../../layouts/Header/Seller/SellerHeader'
import './Seller.ProfileStyle.scss'
import BoxContainer from '../../../../component/Box/Box.Container'
import { Avatar, Box, Button, Divider, Modal, TextField, Typography } from '@mui/material'
import { themeColors } from '../../../../themes/schemes/PureLightTheme'
import { getShopProfile, updateCategory, updateProfile } from '../../Seller.Api'
import { useSelector } from 'react-redux'
import { routes } from '../../../../routes'

const style = {
    borderRadius: '5px',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const SellerProfilePage: React.FC<{}> = () => {

    const listProfile = useSelector((state: any) => state.seller.listProfile);
    const [open, setOpen] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [image, imageChange] = useState<string | ArrayBuffer | null>('');
    const id = localStorage.getItem('shop_id');
    const [imageProfile, setImageProfile] = useState(null);
    const [name, nameChange] = useState('');
    const [address, addressChange] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleBoxClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileInputChange = (event: any) => {
        const file = event.target.files?.[0];
        if (file) {
            setImageProfile(file)

            const reader = new FileReader();

            reader.onloadend = () => {
                imageChange(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const init = () => {
        console.log(listProfile);
    }

    const handleUpdateProfile = async (e: any) => {
        let data = {
            name: name,
            image: image,
            address: address
        };
        console.log(data);

        try {
            await updateProfile(id, data, imageProfile);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        init()
    }, [])

    useEffect(() => { }, [open, id, fileInputRef, listProfile]);

    return (
        <div className='seller-shop-profile__container'>
            <DrawerComponent />
            <div className='seller-shop-profile-right__content'>
                <SellerHeader />
                <BoxContainer property='seller-shop-profile__content'>
                    <Box className='seller-shop-profile__top'>
                        <Typography className='seller-shop-profile__title'>Shop Information</Typography>
                        <Typography className='seller-shop-profile__desc'>View and update your shop profile</Typography>
                    </Box>
                    <Divider sx={{ mt: '30px' }} />
                    <Box className='seller-shop-profile__bottom'>
                        <Box className='seller-basic-information__top'>
                            <Typography className='seller-basic-information__title'>Basic Information</Typography>
                            <Box className='seller-basic-information__btn'>
                                <Button size='small' sx={{
                                    color: themeColors.black,
                                    bgcolor: themeColors.white,
                                    border: '1px solid #bbbbbf',
                                    borderRadius: '5px',
                                    m: '0 15px'
                                }}
                                    href={routes.home.ShopDetailPage}
                                >
                                    View My Shop
                                </Button>
                                <Button
                                    onClick={handleOpen}
                                    size='small'
                                    sx={{
                                        color: themeColors.black,
                                        bgcolor: themeColors.white,
                                        border: '1px solid #bbbbbf',
                                        borderRadius: '5px',
                                        m: '0 15px'
                                    }}>
                                    Edit
                                </Button>
                            </Box>
                        </Box>


                        <Box className='seller-basic-information__bottom'>
                            <Box className='seller-basic-information__bottom-left'>
                                <Typography>Shop Name</Typography>
                                <Typography sx={{ height: '40px', lineHeight: '40px' }}>Shop Logo</Typography>
                                <Typography>Address</Typography>
                            </Box>
                            <Box className='seller-basic-information__bottom-right'>
                                <Typography>{listProfile?.name}</Typography>
                                <img src={listProfile?.image} alt='shop-img' style={{
                                    width: '40px',
                                    height: '40px'
                                }} />
                                <Typography>{listProfile?.address}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Box className='modal-modal__top'>
                                <Typography id="modal-modal-title" variant="h2" component="h2">
                                    Edit Profile
                                </Typography>
                            </Box>
                            <Box className='modal-modal__bottom'>
                                <Box className='modal-edit-information__bottom'>
                                    <Box className='modal-edit-information__bottom-left'>
                                        <Typography sx={{ height: '37px', lineHeight: '37px' }}>Shop Name</Typography>
                                        <Typography sx={{ height: '40px', lineHeight: '40px' }}>Shop Logo</Typography>
                                        <Typography sx={{ height: '40px', lineHeight: '40px' }}>Address</Typography>
                                    </Box>
                                    <Box className='modal-edit-information__bottom-right'>
                                        <TextField size='small' defaultValue={listProfile?.name} onChange={e => nameChange(e.target.value)} />
                                        <Box sx={{ display: 'flex', gap: '3rem' }}>
                                            <img src={listProfile?.image} alt='shop-logo' style={{
                                                width: '40px',
                                                height: '40px'
                                            }} />
                                            <Button
                                                onClick={handleBoxClick}
                                                sx={{
                                                    bgcolor: themeColors.avatar,
                                                    color: themeColors.white,
                                                    fontSize: '12px',
                                                    '&:hover': {
                                                        opacity: '0.7'
                                                    }
                                                }}>
                                                Upload File
                                                <input
                                                    ref={fileInputRef}
                                                    type='file'
                                                    style={{ display: 'none' }}
                                                    onChange={handleFileInputChange}
                                                />
                                            </Button>
                                        </Box>
                                        <TextField size='small' defaultValue={listProfile?.address} onChange={e => addressChange(e.target.value)} />
                                    </Box>
                                </Box>
                                <Box sx={{ mt: '30px', display: 'flex', justifyContent: 'flex-end', gap: '30px' }}>
                                    <Button
                                        onClick={handleClose}
                                        sx={{
                                            bgcolor: themeColors.white,
                                            color: themeColors.black,
                                            padding: '10px 50px',
                                            border: '1px solid #bbbbbf',
                                            '&:hover': {
                                                bgcolor: themeColors.borderDividerAndDecs
                                            }
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        onClick={handleUpdateProfile}
                                        sx={{
                                            bgcolor: themeColors.primary,
                                            padding: '10px 50px',
                                            color: themeColors.white,
                                            '&:hover': {
                                                color: themeColors.black
                                            }
                                        }}
                                    >
                                        Save
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Modal>
                </BoxContainer>
            </div>
        </div>
    )
}

export default SellerProfilePage
