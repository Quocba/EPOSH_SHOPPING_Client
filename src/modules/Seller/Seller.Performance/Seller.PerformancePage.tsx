import React from 'react'
import DrawerComponent from '../../../layouts/Drawer/DrawerSeller/DrawerComponent'
import SellerHeader from '../../../layouts/Header/Seller/SellerHeader'
import BoxContainer from '../../../component/Box/Box.Container'
import './Seller.PerformanceStyle.scss'
import { Box, Divider, Stack, Typography } from '@mui/material'
import { themeColors } from '../../../themes/schemes/PureLightTheme'

const SellerPerformancePage: React.FC<{}> = () => {
    return (
        <div className='seller-performance__container'>
            <DrawerComponent />
            <div className='seller-performance-right__content'>
                <SellerHeader />
                <BoxContainer property='seller-performance__top'>
                    <Typography className='seller-performance__title' sx={{ fontSize: '24px' }}>
                        Issues to improve
                    </Typography>
                    <Typography className='seller-performance__desc' sx={{ fontSize: '16px' }}>
                        There are 0 issue(s) you can improve on.
                    </Typography>
                    <Box className='seller-performance__data'>
                        <Box className='seller-performance__list-issue'>
                            <Typography className='seller-performance__list-issue-title' sx={{ fontSize: '18px' }}>
                                Listings with issues
                            </Typography>
                            <Typography className='seller-performance__list-issue-data' sx={{ fontSize: '20px' }}>
                                0
                            </Typography>
                            <Divider />
                            <Typography className='seller-performance__list-issue-desc' sx={{ fontSize: '12px' }}>
                                Problematic listings can result in penalty points under Listing Violations.
                            </Typography>
                        </Box>

                        <Box className='seller-performance__late-order'>
                            <Typography className='seller-performance__late-order-title' sx={{ fontSize: '18px' }}>
                                Late orders
                            </Typography>
                            <Typography className='seller-performance__late-order-data' sx={{ fontSize: '20px' }}>
                                0
                            </Typography>
                            <Divider />
                            <Typography className='seller-performance__late-order-desc' sx={{ fontSize: '12px' }}>
                                Late orders will contribute to your Late Shipment Rate.
                            </Typography>
                        </Box>
                    </Box>
                </BoxContainer>

                <BoxContainer property='seller-performance__bottom'>
                    <Typography className='seller-performance__title' sx={{ fontSize: '24px' }}>
                        Metrics
                    </Typography>
                    <Typography className='seller-performance__sub-title' sx={{ fontSize: '20px' }}>
                        Listing Violations
                    </Typography>
                    <Stack className='seller-performance__list-violations'>
                        <Box className='seller-performance__list-violations-top' sx={{
                            bgcolor: themeColors.orderInfors,
                            border: '1px solid rgba(0,0,0,.2)',
                            borderRadius: '5px 5px 0 0',
                        }}>
                            <Box className='seller-performance__lvt-left'>
                                <Typography sx={{ fontSize: '16px' }}>Metric</Typography>
                            </Box>
                            <Box className='seller-performance__lvt-right'>
                                <Typography sx={{ fontSize: '16px' }}>My Shop</Typography>
                                <Typography sx={{ fontSize: '16px' }}>Targets</Typography>
                                <Typography sx={{ fontSize: '16px' }}>Last Period</Typography>
                                <Typography className='seller-performance__lvtr-points' sx={{ fontSize: '16px' }}>Penalty Points</Typography>
                            </Box>
                        </Box>

                        <Box className='seller-performance__list-violations-bottom' sx={{
                            border: '1px solid rgba(0,0,0,.2)',
                            borderRadius: '0 0 5px 5px',
                        }}>
                            <Box className='seller-performance__lvb-rows'>
                                <Box className='seller-performance__lvb-left'>
                                    <Typography>Spam Listings</Typography>
                                </Box>
                                <Box className='seller-performance__lvb-right'>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>0</Typography>
                                    <Typography sx={{ width: '9%', textAlign: 'center' }}>0</Typography>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>-</Typography>
                                    <Typography className='seller-performance__lvbr-points'>0 point(s)</Typography>
                                </Box>
                            </Box>

                            <Divider />

                            <Box className='seller-performance__lvb-rows'>
                                <Box className='seller-performance__lvb-left'>
                                    <Typography>Counterfeit/IP infringement</Typography>
                                </Box>
                                <Box className='seller-performance__lvb-right'>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>0</Typography>
                                    <Typography sx={{ width: '9%', textAlign: 'center' }}>0</Typography>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>-</Typography>
                                    <Typography className='seller-performance__lvbr-points'>0 point(s)</Typography>
                                </Box>
                            </Box>

                            <Divider />

                            <Box className='seller-performance__lvb-rows'>
                                <Box className='seller-performance__lvb-left'>
                                    <Typography>Prohibited Listings</Typography>
                                </Box>
                                <Box className='seller-performance__lvb-right'>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>0</Typography>
                                    <Typography sx={{ width: '9%', textAlign: 'center' }}>0</Typography>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>-</Typography>
                                    <Typography className='seller-performance__lvbr-points'>0 point(s)</Typography>
                                </Box>
                            </Box>

                            <Divider />

                            <Box className='seller-performance__lvb-rows'>
                                <Box className='seller-performance__lvb-left'>
                                    <Typography>Days of Pre-order Listing Violation</Typography>
                                </Box>
                                <Box className='seller-performance__lvb-right'>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>0</Typography>
                                    <Typography sx={{ width: '9%', textAlign: 'center' }}>6</Typography>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>-</Typography>
                                    <Typography className='seller-performance__lvbr-points'>N/A</Typography>
                                </Box>
                            </Box>

                            <Divider />

                            <Box className='seller-performance__lvb-rows'>
                                <Box className='seller-performance__lvb-left'>
                                    <Typography>Other Listing Violations</Typography>
                                </Box>
                                <Box className='seller-performance__lvb-right'>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>0</Typography>
                                    <Typography sx={{ width: '9%', textAlign: 'center' }}>0</Typography>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>-</Typography>
                                    <Typography className='seller-performance__lvbr-points'>N/A</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Stack>


                    <Typography className='seller-performance__sub-title' sx={{ fontSize: '20px' }}>
                        Fulfilments
                    </Typography>
                    <Stack className='seller-performance__list-fulfilments'>
                        <Box className='seller-performance__list-fulfilments-top' sx={{
                            bgcolor: themeColors.orderInfors,
                            border: '1px solid rgba(0,0,0,.2)',
                            borderRadius: '5px 5px 0 0',
                        }}>
                            <Box className='seller-performance__lft-left'>
                                <Typography sx={{ fontSize: '16px' }}>Metric</Typography>
                            </Box>
                            <Box className='seller-performance__lft-right'>
                                <Typography sx={{ fontSize: '16px' }}>My Shop</Typography>
                                <Typography sx={{ fontSize: '16px' }}>Targets</Typography>
                                <Typography sx={{ fontSize: '16px' }}>Last Period</Typography>
                                <Typography className='seller-performance__lftr-points' sx={{ fontSize: '16px' }}>Penalty Points</Typography>
                            </Box>
                        </Box>

                        <Box className='seller-performance__list-fulfilments-bottom' sx={{
                            border: '1px solid rgba(0,0,0,.2)',
                            borderRadius: '0 0 5px 5px',
                        }}>
                            <Box className='seller-performance__lfb-rows'>
                                <Box className='seller-performance__lfb-left'>
                                    <Typography>Cancellation Rate</Typography>
                                </Box>
                                <Box className='seller-performance__lfb-right'>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>0</Typography>
                                    <Typography sx={{ width: '9%', textAlign: 'center' }}>{`<`}5%</Typography>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>-</Typography>
                                    <Typography className='seller-performance__lfbr-points'>N/A</Typography>
                                </Box>
                            </Box>

                            <Divider />

                            <Box className='seller-performance__lfb-rows'>
                                <Box className='seller-performance__lfb-left'>
                                    <Typography>Return-refund Rate</Typography>
                                </Box>
                                <Box className='seller-performance__lfb-right'>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>0</Typography>
                                    <Typography sx={{ width: '9%', textAlign: 'center' }}>{`<`}5%</Typography>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>-</Typography>
                                    <Typography className='seller-performance__lfbr-points'>N/A</Typography>
                                </Box>
                            </Box>

                            <Divider />

                            <Box className='seller-performance__lfb-rows'>
                                <Box className='seller-performance__lfb-left'>
                                    <Typography>Late Shipment Rate</Typography>
                                </Box>
                                <Box className='seller-performance__lfb-right'>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>0</Typography>
                                    <Typography sx={{ width: '9%', textAlign: 'center' }}>{`<`}10%</Typography>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>-</Typography>
                                    <Typography className='seller-performance__lfbr-points'>0 point(s)</Typography>
                                </Box>
                            </Box>

                            <Divider />

                            <Box className='seller-performance__lfb-rows'>
                                <Box className='seller-performance__lfb-left'>
                                    <Typography>Preparation Time</Typography>
                                </Box>
                                <Box className='seller-performance__lfb-right'>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>0</Typography>
                                    <Typography sx={{ width: '9%', textAlign: 'center' }}>{`<`}1.5 days</Typography>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>-</Typography>
                                    <Typography className='seller-performance__lfbr-points'>N/A</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Stack>

                    <Typography className='seller-performance__sub-title' sx={{ fontSize: '20px' }}>
                        Customer Service
                    </Typography>
                    <Stack className='seller-performance__list-customer-service'>
                        <Box className='seller-performance__list-customer-service-top' sx={{
                            bgcolor: themeColors.orderInfors,
                            border: '1px solid rgba(0,0,0,.2)',
                            borderRadius: '5px 5px 0 0',
                        }}>
                            <Box className='seller-performance__lcst-left'>
                                <Typography sx={{ fontSize: '16px' }}>Metric</Typography>
                            </Box>
                            <Box className='seller-performance__lcst-right'>
                                <Typography sx={{ fontSize: '16px' }}>My Shop</Typography>
                                <Typography sx={{ fontSize: '16px' }}>Targets</Typography>
                                <Typography sx={{ fontSize: '16px' }}>Last Period</Typography>
                                <Typography className='seller-performance__lcstr-points' sx={{ fontSize: '16px' }}>Penalty Points</Typography>
                            </Box>
                        </Box>

                        <Box className='seller-performance__list-customer-service-bottom' sx={{
                            border: '1px solid rgba(0,0,0,.2)',
                            borderRadius: '0 0 5px 5px',
                        }}>
                            <Box className='seller-performance__lcs-rows'>
                                <Box className='seller-performance__lcsb-left'>
                                    <Typography>Response Rate</Typography>
                                </Box>
                                <Box className='seller-performance__lcsb-right'>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>100%</Typography>
                                    <Typography sx={{ width: '9%', textAlign: 'center' }}>{`>`}80%</Typography>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>-</Typography>
                                    <Typography className='seller-performance__lcsbr-points'>N/A</Typography>
                                </Box>
                            </Box>

                            <Divider />

                            <Box className='seller-performance__lcs-rows'>
                                <Box className='seller-performance__lcsb-left'>
                                    <Typography>Return-refund Rate</Typography>
                                </Box>
                                <Box className='seller-performance__lcsb-right'>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>0</Typography>
                                    <Typography sx={{ width: '9%', textAlign: 'center' }}>{`<`}0.5 days</Typography>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>-</Typography>
                                    <Typography className='seller-performance__lcsbr-points'>N/A</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Stack>

                    <Typography className='seller-performance__sub-title' sx={{ fontSize: '20px' }}>
                        Customer Satisfaction
                    </Typography>
                    <Stack className='seller-performance__list-customer-satisfaction'>
                        <Box className='seller-performance__list-customer-satisfaction-top' sx={{
                            bgcolor: themeColors.orderInfors,
                            border: '1px solid rgba(0,0,0,.2)',
                            borderRadius: '5px 5px 0 0',
                        }}>
                            <Box className='seller-performance__lcst-left'>
                                <Typography sx={{ fontSize: '16px' }}>Metric</Typography>
                            </Box>
                            <Box className='seller-performance__lcst-right'>
                                <Typography sx={{ fontSize: '16px' }}>My Shop</Typography>
                                <Typography sx={{ fontSize: '16px' }}>Targets</Typography>
                                <Typography sx={{ fontSize: '16px' }}>Last Period</Typography>
                                <Typography className='seller-performance__lcstr-points' sx={{ fontSize: '16px' }}>Penalty Points</Typography>
                            </Box>
                        </Box>

                        <Box className='seller-performance__list-customer-satisfaction-bottom' sx={{
                            border: '1px solid rgba(0,0,0,.2)',
                            borderRadius: '0 0 5px 5px',
                        }}>
                            <Box className='seller-performance__lcs-rows'>
                                <Box className='seller-performance__lcsb-left'>
                                    <Typography>Shop Rating</Typography>
                                </Box>
                                <Box className='seller-performance__lcsb-right'>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>-</Typography>
                                    <Typography sx={{ width: '9%', textAlign: 'center' }}>{`>`}4/5</Typography>
                                    <Typography sx={{ width: '8%', textAlign: 'center' }}>-</Typography>
                                    <Typography className='seller-performance__lcsbr-points'>N/A</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Stack>
                </BoxContainer>
            </div>
        </div>
    )
}

export default SellerPerformancePage
