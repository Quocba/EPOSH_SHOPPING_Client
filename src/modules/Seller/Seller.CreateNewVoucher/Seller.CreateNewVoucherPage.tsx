/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import BoxContainer from '../../../component/Box/Box.Container'
import SellerHeader from '../../../layouts/Header/Seller/SellerHeader'
import { Avatar, Box, Button, FormControl, MenuItem, Modal, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import './Seller.CreateNewVoucherStyle.scss'
import { AssetImages } from '../../../utils/images'
import { themeColors } from '../../../themes/schemes/PureLightTheme'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../../../routes'
import { useSelector } from 'react-redux'
import { createVoucher } from '../Seller.Api'

const style = {
    borderRadius: '5px',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const SellerCreateNewVoucherPage: React.FC<{}> = () => {

    const voucher = useSelector((state: any) => state.seller.voucher)

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [title, titleChange] = useState('');
    const [type, typeChange] = useState('');
    const [name, nameChange] = useState('');
    const [desc, descChange] = useState('');
    const [discount, discountChange] = useState('');
    const [minimumPrice, minimumPriceChange] = useState('');
    const [quantity, quantityChange] = useState('');


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event: SelectChangeEvent) => {
        typeChange(event.target.value);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        let voucherData = {
            title: title,
            type: type,
            name: name,
            description: desc,
            discount: discount,
            minimum_price: minimumPrice,
            usageAmount: quantity,
        };
        try {
            await createVoucher(voucherData);
        } catch (error) {
            console.error(error);
        }
        navigate(routes.seller.Root);
    };

    useEffect(() => { }, [open, voucher, handleSubmit]);

    return (

        <BoxContainer property='seller-create-new-voucher__content'>
            <Box className='seller-create-new-voucher__top'>
                <Box sx={{ position: 'relative' }}>
                    <SellerHeader />
                </Box>
                <Link to={routes.seller.Root}>
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
            <form method='post' onSubmit={handleSubmit}>
                <Box className='seller-create-new-voucher__bottom'>
                    <Box className='seller-create-new-voucher__title-desc'>
                        <Typography className='seller-create-new-voucher__title'>Create New Voucher</Typography>
                    </Box>
                    <Box className='seller-create-new-voucher__information'>
                        <Box className='seller-create-new-voucher__left'>
                            <Typography className='seller-create-new-voucher__label'>Voucher Title</Typography>
                            <Typography className='seller-create-new-voucher__label'>Voucher Type</Typography>
                            <Typography className='seller-create-new-voucher__label'>Voucher Name</Typography>
                            <Typography className='seller-create-new-voucher__label'>Voucher Description</Typography>
                            <Typography className='seller-create-new-voucher__label'>Discount By Amount</Typography>
                            <Typography className='seller-create-new-voucher__label'>Minimum Basket Price</Typography>
                            <Typography className='seller-create-new-voucher__label'>Usage Quantity</Typography>
                        </Box>

                        <Box className='seller-create-new-voucher__right'>
                            <TextField required variant='outlined' size='small' value={title} onChange={e => titleChange(e.target.value)} />
                            <FormControl
                                sx={{
                                    maxWidth: '40%',
                                }}>
                                <Select
                                    value={type}
                                    onChange={handleChange}
                                    displayEmpty
                                    size='small'
                                >
                                    <MenuItem value="">
                                        <em onClick={() => typeChange('')}>None</em>
                                    </MenuItem>
                                    <MenuItem value='Shop Voucher'>Shop Voucher</MenuItem>
                                    <MenuItem value='Product Voucher'>Product Voucher</MenuItem>
                                    <MenuItem value='New Buyer Voucher'>New Buyer Voucher</MenuItem>
                                    <MenuItem value='Ship Voucher'>Ship Voucher</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField required variant='outlined' size='small' value={name} onChange={e => nameChange(e.target.value)} />
                            <TextField required variant='outlined' size='small' value={desc} onChange={e => descChange(e.target.value)} />
                            <TextField required variant='outlined' size='small' value={discount} onChange={e => discountChange(e.target.value)} />
                            <TextField required variant='outlined' size='small' value={minimumPrice} onChange={e => minimumPriceChange(e.target.value)} />
                            <TextField required variant='outlined' size='small' value={quantity} onChange={e => quantityChange(e.target.value)} />
                        </Box>
                    </Box>
                    <Box className='seller-create-new-voucher__cancel-confirm-btn'>
                        <Button
                            onClick={handleOpen}
                            sx={{
                                width: '12%',
                                color: themeColors.white,
                                bgcolor: themeColors.dark_gray,
                                '&:hover': {
                                    color: themeColors.black
                                }
                            }}>
                            Cancel
                        </Button>

                        <Button
                            type='submit'
                            sx={{
                                width: '12%',
                                color: themeColors.white,
                                bgcolor: themeColors.primary,
                                mr: '30px',
                                '&:hover': {
                                    color: themeColors.black
                                }
                            }}>
                            Confirm
                        </Button>
                    </Box>
                </Box>
            </form>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h2" component="h2" sx={{ color: themeColors.warning }}>
                        Attention
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: '16px' }}>
                        Are you sure want to leave?
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '2rem', pt: '30px' }}>
                        <Button sx={{
                            color: themeColors.white,
                            bgcolor: themeColors.dark_gray,
                            '&:hover': {
                                color: themeColors.black
                            }
                        }}
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button sx={{
                            color: themeColors.white,
                            bgcolor: themeColors.avatar,
                            '&:hover': {
                                color: themeColors.black
                            }
                        }}
                            href={routes.seller.Root}
                        >
                            Leave
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </BoxContainer>
    )
}

export default SellerCreateNewVoucherPage
