import React from 'react'
import './Seller.ThreeStarsStyle.scss'
import BoxContainer from '../../../../../../component/Box/Box.Container'
import { Box, Typography } from '@mui/material'

const SellerThreeStars: React.FC<{}> = () => {
    return (
        <BoxContainer property='seller-review__three-stars'>
            <Box className='three-stars__rows'>
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
        </BoxContainer>
    )
}

export default SellerThreeStars
