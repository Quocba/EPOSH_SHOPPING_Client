/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import SellerProfilePage from './Seller.ProfilePage'
import { useDispatch } from 'react-redux'
import { getShopProfile } from '../../Seller.Api'

const SellerProfileContainer: React.FC<{}> = () => {
    const dispatch = useDispatch()


    // ========== get profile by shop id ========== //
    const profile = async () => {
        const accountId = localStorage.getItem("account-id")

        await getShopProfile(accountId, dispatch)
    }

    useEffect(() => {
        profile();
    }, [])
    return (
        <SellerProfilePage />
    )
}

export default SellerProfileContainer
