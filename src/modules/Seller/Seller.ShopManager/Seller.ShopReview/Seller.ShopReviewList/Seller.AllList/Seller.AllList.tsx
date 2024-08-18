import React from 'react'
import './Seller.AllListStyle.scss'
import BoxContainer from '../../../../../../component/Box/Box.Container'
import { Box, Typography } from '@mui/material'

const SellerAllList: React.FC<{}> = () => {
    return (
        <BoxContainer property='seller-review__all-list'>
            <Box className='all-list__rows'>
                <Box className='left'>
                    <Box className='product-information'>
                        <img
                            className='product-img'
                            alt=""
                            src="https://ghechua.net/wp-content/uploads/2022/05/mep-cam-dao.jpg"
                        />
                        <Typography className='product-name'>
                            Mèo Méo Meo Con Mòe
                        </Typography>
                    </Box>
                    <Box className='rating'>
                        5 Stars
                    </Box>
                </Box>
                <Box className='right'>
                    <Typography className='user-review'>
                        This product is fantastic! It exceeded all my expectations, and I couldn't be happier with my purchase. I highly recommend it to anyone looking for a top-notch solution. 5 stars!
                    </Typography>
                </Box>
            </Box>

            <Box className='all-list__rows'>
                <Box className='left'>
                    <Box className='product-information'>
                        <img
                            className='product-img'
                            alt=""
                            src="https://ghechua.net/wp-content/uploads/2022/05/mep-cam-dao.jpg"
                        />
                        <Typography className='product-name'>
                            Mèo Méo Meo Con Mòe
                        </Typography>
                    </Box>
                    <Box className='rating'>
                        4 Stars
                    </Box>
                </Box>
                <Box className='right'>
                    <Typography className='user-review'>
                        The product is excellent with its impressive features and reliable performance. It meets my expectations and serves its purpose well. I'm deducting one star due to the slightly high price. Overall, a great choice!
                    </Typography>
                </Box>
            </Box>

            <Box className='all-list__rows'>
                <Box className='left'>
                    <Box className='product-information'>
                        <img
                            className='product-img'
                            alt=""
                            src="https://ghechua.net/wp-content/uploads/2022/05/mep-cam-dao.jpg"
                        />
                        <Typography className='product-name'>
                            Mèo Méo Meo Con Mòe
                        </Typography>
                    </Box>
                    <Box className='rating'>
                        3 Stars
                    </Box>
                </Box>
                <Box className='right'>
                    <Typography className='user-review'>
                        The product is decent, offering good features and functionality. However, it lacks some essential elements, and the quality could be improved. Overall, a satisfactory purchase.
                    </Typography>
                </Box>
            </Box>

            <Box className='all-list__rows'>
                <Box className='left'>
                    <Box className='product-information'>
                        <img
                            className='product-img'
                            alt=""
                            src="https://ghechua.net/wp-content/uploads/2022/05/mep-cam-dao.jpg"
                        />
                        <Typography className='product-name'>
                            Mèo Méo Meo Con Mòe
                        </Typography>
                    </Box>
                    <Box className='rating'>
                        2 Stars
                    </Box>
                </Box>
                <Box className='right'>
                    <Typography className='user-review'>
                        The product was average, it had some useful features, but it also had its drawbacks. The performance was satisfactory, but the build quality seemed subpar. Overall, a mediocre experience.
                    </Typography>
                </Box>
            </Box>

            <Box className='all-list__rows'>
                <Box className='left'>
                    <Box className='product-information'>
                        <img
                            className='product-img'
                            alt=""
                            src="https://ghechua.net/wp-content/uploads/2022/05/mep-cam-dao.jpg"
                        />
                        <Typography className='product-name'>
                            Mèo Méo Meo Con Mòe
                        </Typography>
                    </Box>
                    <Box className='rating'>
                        1 Star
                    </Box>
                </Box>
                <Box className='right'>
                    <Typography className='user-review'>
                        Terrible product! I would not recommend it to anyone. The quality is extremely poor, and it broke after just a few uses. Waste of money.
                    </Typography>
                </Box>
            </Box>
        </BoxContainer>
    )
}

export default SellerAllList
