/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import DrawerComponent from '../../../../layouts/Drawer/DrawerSeller/DrawerComponent'
import SellerHeader from '../../../../layouts/Header/Seller/SellerHeader'
import './Seller.ReviewStyle.scss'
import BoxContainer from '../../../../component/Box/Box.Container'
import { Box, FormControl, Select, MenuItem, Button, SelectChangeEvent, TextField, List, Stack, ListItem, ListItemButton, Typography, Divider } from '@mui/material'
import { themeColors } from '../../../../themes/schemes/PureLightTheme'
import { NoSimOutlined, SearchOutlined } from '@mui/icons-material'
import SellerAllList from './Seller.ShopReviewList/Seller.AllList/Seller.AllList'
import SellerFiveStars from './Seller.ShopReviewList/Seller.FiveStars/Seller.FiveStars'
import SellerFourStars from './Seller.ShopReviewList/Seller.FourStars/Seller.FourStars'
import SellerThreeStars from './Seller.ShopReviewList/Seller.ThreeStars/Seller.ThreeStars'
import SellerTwoStars from './Seller.ShopReviewList/Seller.TwoStars/Seller.TwoStars'
import SellerOneStar from './Seller.ShopReviewList/Seller.OneStar/Seller.OneStar'

const SellerReviewPage: React.FC<{}> = () => {

    const items = ['All', '5 stars', '4 stars', '3 stars', '2 stars', '1 star'];

    const [isFilterItem, setFilterItem] = useState(0);
    const [isSelectedItem, setSelectedItem] = useState(0);
    const [isSelectedSearchItem, setSelectedSearchItem] = useState('');

    const handleSelectedFilterItemClick = (index: number) => {
        setFilterItem(index);
    }

    const handleSelectItemClick = (index: number) => {
        setSelectedItem(index);
    }

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedSearchItem(event.target.value);
    };

    useEffect(() => { }, [isFilterItem, isSelectedItem, isSelectedSearchItem])

    return (
        <div className='seller-shop-review__container'>
            <DrawerComponent />
            <div className='seller-shop-review-right__content'>
                <SellerHeader />
                <BoxContainer property='seller-shop-review__content'>
                    <Box className='content-top'>
                        <Typography className='seller-shop-review__title'>Shop Reviews</Typography>
                        <Typography className='seller-shop-review__rating'>3.0/5</Typography>
                    </Box>
                    {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', p: '30px 0' }}>
                        <FormControl
                            sx={{
                                minWidth: '120px',
                                ml: '30px',
                            }}>
                            <Select
                                value={isSelectedSearchItem}
                                onChange={handleChange}
                                displayEmpty
                                size='small'
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'Product Name'}>Product Name</MenuItem>
                                <MenuItem value={'Category'}>Category</MenuItem>
                            </Select>
                        </FormControl>
                        <Box sx={{ width: '65%' }}>
                            <TextField variant='outlined' placeholder='Search...' size='small' sx={{ width: '100%', position: 'relative' }} />
                            <Button size='small' sx={{
                                position: 'absolute', right: '21.2%', top: '29.2%', p: '6px 12px',
                                '&:hover': {
                                    bgcolor: 'transparent'
                                }
                            }}>
                                <SearchOutlined />
                            </Button>
                        </Box>
                        <Button size='small' sx={{
                            border: '1px solid #BBBBBF',
                            mr: '30px',
                            fontSize: '15px'
                        }}>
                            Remove Filter Search
                        </Button>
                    </Box> */}

                    <List disablePadding>
                        <Stack direction='row' gap='1rem'>
                            {items.map((text, index) => (
                                <ListItem key={index} sx={{
                                    width: index === 0 ? '7%' : '8%',
                                    m: '0',
                                    p: '30px 0 0 0'
                                }}>
                                    <ListItemButton
                                        onClick={() => handleSelectItemClick(index)}
                                        sx={{
                                            ml: index === 0 ? '30px' : '0',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: index === isSelectedItem ? themeColors.primary : 'inherit',
                                                fontWeight: index === isSelectedItem ? 'bold' : 'inherit',
                                                width: '100%',
                                                textAlign: 'center',
                                                '&:hover': {
                                                    color: themeColors.primary
                                                }
                                            }}
                                        >
                                            {text}
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </Stack>
                    </List>
                    <Divider sx={{ bgcolor: themeColors.borderDividerAndDecs }} />

                    <Box className='seller-shop-review__list-detail'>
                        <Box className='seller-shop-review__header' sx={{
                            bgcolor: themeColors.orderInfors,
                            border: '1px solid rgba(0,0,0,.2)',
                            borderRadius: '5px 5px 0 0',
                        }}>
                            <Box className='left'>
                                <Typography sx={{ width: '85%' }}>Product Information</Typography>
                                <Typography sx={{ width: '15%' }}>Rating</Typography>
                            </Box>
                            <Box className='right'>
                                <Typography>Buyer's Review</Typography>
                            </Box>
                        </Box>
                        <Box className='seller-shop-review__footer' sx={{
                            border: '1px solid rgba(0,0,0,.2)',
                            borderRadius: '0 0 5px 5px',
                            height: '100%',
                        }}>
                            {isSelectedItem === 0 ? <SellerAllList /> : null}
                            {isSelectedItem === 1 ? <SellerFiveStars /> : null}
                            {isSelectedItem === 2 ? <SellerFourStars /> : null}
                            {isSelectedItem === 3 ? <SellerThreeStars /> : null}
                            {isSelectedItem === 4 ? <SellerTwoStars /> : null}
                            {isSelectedItem === 5 ? <SellerOneStar /> : null}
                        </Box>
                    </Box>
                </BoxContainer>
            </div>
        </div>
    )
}

export default SellerReviewPage
