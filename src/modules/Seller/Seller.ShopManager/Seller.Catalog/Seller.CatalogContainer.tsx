/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import SellerCatalogPage from './Seller.CatalogPage'
import { useDispatch } from 'react-redux'
import { getAllProductByShopId } from '../../Seller.Api'

const SellerCatalogContainer: React.FC<{}> = () => {
    // const dispatch = useDispatch()
    // const shopID = localStorage.getItem("shop_id")

    // // ========== get all product by shopid ========== //
    // const init = async () => {
    //     await getAllProductByShopId(shopID, dispatch)
    // }

    // useEffect(() => {
    //     init();
    // }, [])
    return (
        <SellerCatalogPage data={[]} />
    )
}

export default SellerCatalogContainer
