import React, { useEffect, useState } from 'react'
import './Widget.scss';
import { Box, Button, Grid, Modal, Pagination, Stack, Typography } from '@mui/material';
import { themeColors } from '../../../../../themes/schemes/PureLightTheme';
import { CloseOutlined } from '@mui/icons-material';
import { filterProductWithLiveNumber, filterProductWithSoldoutNumber, filterTransWithCanceledNumber, filterTransWithProcessNumber, filterTransWithUnpaidNumber } from '../../../../../utils/sellerHelper';

const style = {
    borderRadius: '5px',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const Widget = ({ listProduct, listTransaction, listVoucher }: { listProduct: any, listTransaction: any, listVoucher: any }) => {

    const [currentPage, setCurrentPage] = useState(1);

    const voucherPerPage = 4;
    const indexOfLastVoucher = currentPage * voucherPerPage;
    const indexOfFirsVoucher = indexOfLastVoucher - voucherPerPage;
    const currentVouchers = listVoucher.slice(indexOfFirsVoucher, indexOfLastVoucher);
    const totalPageVouchers = Math.ceil(listVoucher?.length / voucherPerPage);

    const widgetsTop = [
        {
            data: listTransaction?.length,
            title: 'All Orders'
        },
        {
            data: filterTransWithUnpaidNumber(listTransaction),
            title: 'Unpaid'
        },
        {
            data: filterTransWithProcessNumber(listTransaction),
            title: 'Processed'
        },
        {
            data: filterTransWithCanceledNumber(listTransaction),
            title: 'Order Canceled'
        },
    ];

    const widgetsBot = [
        {
            data: listProduct?.length,
            title: 'All Products'
        },
        {
            data: filterProductWithLiveNumber(listProduct),
            title: 'Product Approved'
        },
        {
            data: filterProductWithSoldoutNumber(listProduct),
            title: 'Sold Out Product'
        }
    ]

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const paginate = (event: any, value: any) => {
        event.preventDefault();
        setCurrentPage(value);
    };

    useEffect(() => { }, [open]);

    return (
        <>
            <Box className='seller__widget-container' sx={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
                <Box className="seller__widget-top" sx={{ display: 'flex' }}>
                    {widgetsTop.map((widget, index) => (
                        <React.Fragment key={index}>
                            <Stack className='seller__widget-items'>
                                <Box className="statistical">
                                    <span className="data">{widget.data}</span>
                                    <span className="link">{widget.title}</span>
                                </Box>
                            </Stack>
                            {index !== widgetsTop.length - 1 && <div className="divider"></div>}
                        </React.Fragment>
                    ))}
                </Box>

                <Box className="seller__widget-bottom" sx={{ display: 'flex', marginBottom: '30px' }}>
                    {widgetsBot.map((widget, index) => (
                        <React.Fragment key={index}>
                            <Stack className='seller__widget-items'>
                                <Box className="statistical">
                                    <span className="data">{widget.data}</span>
                                    <span className="link">{widget.title}</span>
                                </Box>
                            </Stack>
                            {index !== widgetsBot.length && <div className="divider"></div>}
                        </React.Fragment>
                    ))}

                    <Stack className='seller__widget-items'>
                        <Button onClick={handleOpen} className="statistical">
                            <span className="data">{listVoucher?.length}</span>
                            <span className="link">Store Voucher</span>
                        </Button>
                    </Stack>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box>
                            <Box sx={style}>
                                <Box className='modal-modal__top'>
                                    <Typography id="modal-modal-title" variant="h2" component="h2">
                                        Voucher List
                                    </Typography>
                                    <Button
                                        onClick={handleClose}
                                        sx={{
                                            bgcolor: themeColors.white,
                                            color: themeColors.black,
                                            '&:hover': {
                                                bgcolor: themeColors.white,
                                                color: themeColors.avatar
                                            }
                                        }}
                                    >
                                        <CloseOutlined />
                                    </Button>
                                </Box>
                                <Box className='modal-modal__bottom'>
                                    <Stack className='modal-modal__header'>
                                        <Box className='modal__top' sx={{
                                            border: '1px solid rgba(0,0,0,0.2)',
                                        }}>
                                            <Box className='modal__top-left'>
                                                <Typography>Name</Typography>
                                            </Box>
                                            <Box className='modal__top-right'>
                                                <Typography sx={{ width: '15%' }}>Type</Typography>
                                                <Typography sx={{ width: '12%' }}>Discount Amount</Typography>
                                                <Typography sx={{ width: '10%' }}>Usage Quantity</Typography>
                                                <Typography sx={{ width: '15%' }}>Status</Typography>
                                            </Box>
                                        </Box>
                                    </Stack>
                                    <Box className='modal-modal__footer' sx={{
                                        border: '1px solid rgba(0,0,0,0.2)',
                                    }}>
                                        {currentVouchers?.map((data: any, index: any) => (
                                            <Box key={index} className='modal__bottom' >
                                                <Box className='modal__bottom-left'>
                                                    <Typography sx={{ fontWeight: 'bold', color: themeColors.black }}>Code: {data?.code}</Typography>
                                                    <Typography>Name: {data?.name}</Typography>
                                                </Box>
                                                <Box className='modal__bottom-right'>
                                                    <Typography sx={{ width: '15%' }}>{data?.type}</Typography>
                                                    <Typography sx={{ width: '12%' }}>{`$` + data?.discount}</Typography>
                                                    <Typography sx={{ width: '10%' }}>{data?.usageAmount}</Typography>
                                                    <Typography sx={{ width: '15%', fontWeight: 'bold', color: data?.status ? themeColors.primary : themeColors.red }}>{data?.status ? 'Approved' : 'Refuse'}</Typography>
                                                </Box>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: '30px' }}>
                                    <Grid item xs={6}>
                                        <label>
                                            <b>
                                                Showing {currentPage} of {totalPageVouchers}{" "}
                                                {totalPageVouchers > 1 ? "pages" : "page"}
                                            </b>
                                        </label>
                                    </Grid>
                                    <Stack>
                                        {listTransaction?.length > 1 && (
                                            <Pagination
                                                color="standard"
                                                shape="rounded"
                                                defaultPage={1}
                                                count={totalPageVouchers}
                                                page={currentPage}
                                                onChange={paginate}
                                                size="large"
                                            />
                                        )}
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                    </Modal>
                </Box>
            </Box>
        </>
    )
}
export default Widget;