import { Box, Avatar, Typography, Divider, Stack, Switch, SwitchProps, styled, FormControlLabel } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BoxContainer from '../../../component/Box/Box.Container'
import SellerHeader from '../../../layouts/Header/Seller/SellerHeader'
import { AssetImages } from '../../../utils/images'
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import RssFeedOutlined from '@mui/icons-material/RssFeedOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import { themeColors } from '../../../themes/schemes/PureLightTheme'
import { Link } from 'react-router-dom'

const SellerSetUpShopPage: React.FC<{}> = () => {
    const IOSSwitch = styled((props: SwitchProps) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'light' ? '#2ECA45' : '#65C466',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));

    const [isSwitchDark, setSwitchDark] = useState(false);
    const [isSwitchFeed, setSwitchFeed] = useState(false);
    const [isSwitchFavorite, setSwitchFavorite] = useState(false);

    const handleSwitchDark = (event: any) => {
        setSwitchDark(event.target.checked);
    }

    const handleSwitchFeed = (event: any) => {
        setSwitchFeed(event.target.checked);
    }

    const handleSwitchFavorite = (event: any) => {
        setSwitchFavorite(event.target.checked);
    }

    useEffect(() => {
        setSwitchDark(false);
        setSwitchFeed(false);
        setSwitchFavorite(false);
    }, []);

    return (
        <BoxContainer property='seller-set-up-shop__content'>
            <Box className='seller-set-up-shop__top'>
                <Box sx={{ position: 'relative' }}>
                    <SellerHeader />
                </Box>
                <Box>
                    <Link to={'/seller'} >
                        <Avatar
                            src={AssetImages.LOGO}
                            sx={{
                                position: 'absolute',
                                width: '80px',
                                height: '80px',
                                top: '.7rem',
                                left: '45px'
                            }}
                        />
                    </Link>
                </Box>
            </Box>
            <Stack className='seller-set-up-shop__bottom'
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    backgroundColor: themeColors.white,
                    m: '30px',
                    borderRadius: '10px',
                    boxShadow: '2px 4px 10px 1px rgba(0, 0, 0, 0.47)'
                }}
            >
                <Box className='seller-set-up-shop__bottom-header'
                    sx={{ m: '30px', width: '100%' }}
                >
                    <Typography sx={{ mb: '15px', fontSize: '22px', fontWeight: 'bold' }}>
                        Shop Setup
                    </Typography>

                    <Typography sx={{ color: themeColors.borderDividerAndDecs }}>
                        Change the settings for your Shop
                    </Typography>
                    <Divider sx={{ mr: '60px', backgroundColor: themeColors.borderDividerAndDecs }} />
                </Box>
                <Box className='seller-set-up-shop__bottom-footer' sx={{
                    m: '0 30px 30px 30px',
                }}>
                    <Box className='seller-set-up-shop__bottom-footer_dark'
                        sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}
                    >
                        <DarkModeOutlined sx={{ width: '40px', height: '40px', color: themeColors.borderDividerAndDecs }} />
                        <Box sx={{ ml: '15px', color: themeColors.borderDividerAndDecs, position: 'relative' }}>
                            <Typography sx={{ fontSize: '18px', mb: '5px' }}>
                                Dark Mode
                            </Typography>
                            <Typography sx={{ fontSize: '14px' }}>
                                Turn on Vacation Mode to prevent buyers from placing new orders. Existing orders must still be fulfilled. It may take up to 1 hour to take effect.
                            </Typography>
                        </Box>
                        <FormControlLabel
                            checked={isSwitchDark} onChange={handleSwitchDark}
                            sx={{ position: 'absolute', right: '2.2rem' }}
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                            label={undefined}
                        />
                    </Box>
                    <Box className='seller-set-up-shop__bottom-footer_feed'
                        sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}
                    >
                        <RssFeedOutlined sx={{ width: '40px', height: '40px', color: themeColors.borderDividerAndDecs }} />
                        <Box sx={{ ml: '15px', color: themeColors.borderDividerAndDecs, position: 'relative' }} >
                            <Typography sx={{ fontSize: '18px', mb: '5px' }}>
                                Private Activities
                            </Typography>
                            <Typography sx={{ fontSize: '14px' }}>
                                Turn on private activity to hide your likes and comments from people who are following you
                            </Typography>
                        </Box>
                        <FormControlLabel
                            checked={isSwitchFeed} onChange={handleSwitchFeed}
                            sx={{ position: 'absolute', right: '2.2rem' }}
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                            label={undefined}
                        />
                    </Box>
                    <Box className='seller-set-up-shop__bottom-footer_favorite'
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <FavoriteBorderOutlined sx={{ width: '40px', height: '40px', color: themeColors.borderDividerAndDecs }} />
                        <Box sx={{ ml: '15px', color: themeColors.borderDividerAndDecs, position: 'relative' }} >
                            <Typography sx={{ fontSize: '18px', mb: '5px' }}>
                                Hide my likes
                            </Typography>
                            <Typography sx={{ fontSize: '14px' }}>
                                People cannot see your likes in shop profile page if enabled
                            </Typography>
                        </Box>
                        <FormControlLabel
                            checked={isSwitchFavorite} onChange={handleSwitchFavorite}
                            sx={{ position: 'absolute', right: '2.2rem' }}
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                            label={undefined}

                        />
                    </Box>
                </Box>

            </Stack>
        </BoxContainer>
    )
}

export default SellerSetUpShopPage
