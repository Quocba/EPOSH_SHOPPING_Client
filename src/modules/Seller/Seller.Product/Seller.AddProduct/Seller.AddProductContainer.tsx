/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import SellerAddProductPage from './Seller.AddProductPage'
import { useDispatch } from 'react-redux';
import { getShopProfile } from '../../Seller.Api';

const SellerAddProductContainer: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const accountID = localStorage.getItem("id")

    // ========== get profile by account id ========== //
    const profile = async () => {
        await getShopProfile(accountID, dispatch)
    }

    useEffect(() => {
        profile()
    }, [])

    return (
        <SellerAddProductPage />
    )
}

export default SellerAddProductContainer
