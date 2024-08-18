import React from 'react'
import './Seller.OneStarStyle.scss'
import BoxContainer from '../../../../../../component/Box/Box.Container'
import { Box, Typography } from '@mui/material'

const SellerOneStar: React.FC<{}> = () => {
  return (
    <BoxContainer property='seller-review__one-star'>
      <Box className='one-star__rows'>
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
            1 Stars
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

export default SellerOneStar
