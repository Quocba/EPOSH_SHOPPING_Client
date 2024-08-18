/* eslint-disable no-useless-concat */
import axios from "axios";
import { ApiUrl } from "../../services/ApiUrl";
import axiosClient from "../../utils/axiosClient";
import { saveListChart, saveListProduct, saveListProfile, saveListTransaction, saveListTransactionFilterMonth, saveListVoucher } from "./Seller.Action";

// ========== get all product by shopid ========== //
export const getAllProductByShopId = async (shopID: any, dispatch: any) => {
  try {
    const response = await axiosClient.get(
      `${ApiUrl.GET_ALL_PRODUCT_BY_SHOP_ID}?id=${shopID}`
    );
    if (response.data.result) {
      dispatch(saveListProduct(response.data.data));
      return true;
    } else {
      return false;
    }
  } catch (error) {
    // console.error("Error fetching data: ", error);
    // throw error;
  }
};

// ========== Search product by name ========== //
export const searchProduct = async (key: any) => {
  try {
    const response = await axiosClient.get(`${ApiUrl.SEARCH_PRODUCT_BY_NAME_SELLER}?name=${key}`)
    if (response.data.result) {
      return response.data.data
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
    // throw error;
  }
};

// ========== delete product by name ========== //
export const deleteProduct = async (productID: any) => {
  try {
    const response = await axiosClient.delete(`${ApiUrl.DELETE_PRODUCT}/${productID}`)
    if (response.data.result) {
      return true
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// ========== createproduct ========== //
export const createProduct = async (productData: any, file: any) => {
  try {
    let formData = new FormData();
    const productString =
      `description: ${productData.desc}` + ";" +
      `discount: ${productData.discount}` + ";" +
      `name: ${productData.name}` + ";" +
      `price: ${productData.price}` + ";" +
      `category_id: 1` + ";" +
      `stock: ${productData.stock}`

    console.log(productString);

    formData.append("product", productString);
    formData.append("image", file);

    const headers = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
    const response = await axios.post('https://eposh-server-production.up.railway.app/api/v2/seller/product/create-product', formData, { headers });
    console.log(response.data.data);
    return response.data.result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// ========== update product ========== //
export const updateProduct = async (productId: any, productData: any, file: any) => {
  try {
    let formData = new FormData();
    const productString =
      `description: ${productData.desc}` + ";" +
      `discount: ${productData.discount}` + ";" +
      `name: ${productData.name}` + ";" +
      `price: ${productData.price}` + ";" +
      `category_id: 1` + ";" +
      `stock: ${productData.stock}`

    console.log(productString);

    formData.append("product", productString);
    formData.append("images", file);

    const headers = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }

    const response = await axios.put('https://eposh-server-production.up.railway.app/api/v2/seller/product/update/' + productId, formData, { headers });
    console.log(response.data.data);

    return response.data.result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// ========== get all transaction by shopid ========== //
export const getAllTransactionByShopId = async (dispatch: any) => {
  try {
    const response = await axiosClient.get(
      `${ApiUrl.GET_ALL_TRANSACTION_BY_SHOP_ID}`
    );
    if (response.data.result) {
      dispatch(saveListTransaction(response.data.data));
      dispatch(saveListTransactionFilterMonth(response.data.data));
      return true;
    } else {
      return false;
    }
  } catch (error) {
    // console.error("Error fetching data: ", error);
    // throw error;
  }
};

// ========== get all category ========== //
export const getAllCategory = async (shopID: any) => {
  try {
    const response = await axiosClient.get(
      `${ApiUrl.GET_ALL_CATEGORIES}`
    );
    if (response.data.result) {
      return response.data.data;
    } else {
      return false;
    }
  } catch (error) {
    // console.error("Error fetching data: ", error);
    // throw error;
  }
};

// ========== create category ========== //
export const addCategory = async (categoryData: any, file: any) => {
  try {
    let formData = new FormData();
    const categoryString = `name: ${categoryData.name}` + ";"

    formData.append("category", categoryString);
    formData.append("image", file);

    const headers = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }

    const response = await axios.post('https://eposh-server-production.up.railway.app/api/v2/seller/category/create', formData, { headers });
    console.log(response.data.data);

    return response.data.result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// ========== update category ========== //
export const updateCategory = async (categoryID: any, categoryData: any, file: any) => {
  try {
    let formData = new FormData();
    const categoryString = `name: ${categoryData.name}` + ";"

    formData.append("category", categoryString);
    formData.append("image", file);

    const headers = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }

    const response = await axios.put('https://eposh-server-production.up.railway.app/api/v2/seller/category/update/' + categoryID, formData, { headers });
    console.log(response.data.data);

    return response.data.result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// ========== get all voucher by shopid ========== //
export const getAllVoucherByShopId = async (shopID: any, dispatch: any) => {
  try {
    const response = await axiosClient.get(
      `${ApiUrl.GET_ALL_VOUCHER_BY_SHOP_ID}?id=${shopID}`
    );
    if (response.data.result) {
      dispatch(saveListVoucher(response.data.data));
      return true;
    } else {
      return false;
    }
  } catch (error) {
    // console.error("Error fetching data: ", error);
    // throw error;
  }
};

// ========== create voucher ========== //
export const createVoucher = async (voucherData: any) => {
  try {
    const response = await axiosClient.post(`${ApiUrl.CREATE_VOUCHER}`, voucherData);
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
}

// ========== get shop profile by account id ========== //
export const getShopProfile = async (accountId: any, dispatch: any) => {
  try {
    const response = await axiosClient.get(
      `${ApiUrl.GET_SHOP_PROFILE}?id=${accountId}`
    );

    if (response.data.result) {
      dispatch(saveListProfile(response.data.data));
      localStorage.setItem("shop_id", response.data.data.id);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    // console.error("Error fetching data: ", error);
    // throw error;
  }
};

// ========== update profile ========== //
export const updateProfile = async (shopId: any, profileData: any, file: any) => {
  try {
    let formData = new FormData();
    const profileString =
      `name: ${profileData.name}` + ";" +
      `address: ${profileData.address}`

    formData.append("shop", profileString);
    formData.append("image", file);

    const headers = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }

    const response = await axios.put('https://eposh-server-production.up.railway.app/api/v2/seller/shop/update/' + shopId, formData, { headers });
    console.log(response.data.data);

    return response.data.result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// ========== export transaction ========== //
export const exportExcel = async (month: any) => {
  try {
    const response = await axiosClient.get(`${ApiUrl.EXPORT_EXCEL}?month=${month}`)
    console.log(response);

    if (response.data.result) {
      return response.data.data
    } else {
      return false;
    }
  } catch (error) {
    // console.error("Error fetching data: ", error);
    // throw error;
  }
}

// ========== get data chart ========== //
export const getDataChart = async (month: any, dispatch: any) => {
  try {
    const response = await axiosClient.get(`${ApiUrl.GET_DATA_CHART}?month=${month}`)
    if (response.data.result) {
      dispatch(saveListChart(response.data.data));
      return true;
    } else {
      return false;
    }
  } catch (error) {
    // console.error("Error fetching data: ", error);
    // throw error;
  }
}

// ========== get transaction by month ========== //
export const getTransactionByMonth = async (month: any, accountID: any, dispatch: any) => {
  try {
    const response = await axiosClient.get(`${ApiUrl.GET_ALL_TRANSACTION_BY_MONTH}?month=${month}&accountID=${accountID}`)
    if (response.data.result) {
      dispatch(saveListTransactionFilterMonth(response.data.data));
      return true
    } else {
      return false;
    }
  } catch (error) {
    // console.error("Error fetching data: ", error);
    // throw error;
  }
}