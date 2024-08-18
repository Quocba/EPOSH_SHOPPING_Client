import React from 'react'
import './Seller.FiveStarsStyle.scss'
import BoxContainer from '../../../../../../component/Box/Box.Container'
import { Box, Typography } from '@mui/material'

const SellerFiveStars: React.FC<{}> = () => {
    return (
        <BoxContainer property='seller-review__five-stars'>
            <Box className='five-stars__rows'>
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
        </BoxContainer>
    )
}

export default SellerFiveStars
