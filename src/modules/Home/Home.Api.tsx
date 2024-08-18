import {
  saveCartData,
  saveListCategory,
  saveListProduct,
} from "./Home.Action";
import { ApiUrl } from "../../services/ApiUrl";
import axiosClient from "../../utils/axiosClient";
import { toastError } from "../Auth/Auth.Action";

// ========== get list product ========== //
export const getAllProduct = async (dispatch: any) => {
  try {
    const response = await axiosClient.get(ApiUrl.GET_ALL_PRODUCT);
    if (response.data.result) {
      console.log(response.data);

      dispatch(saveListProduct(response.data.data));
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// ========== get list category ========== //
export const getAllCategory = async (dispatch: any) => {
  try {
    const response = await axiosClient.get(ApiUrl.GET_ALL_CATEGORY);
    if (response.data.result) {
      dispatch(saveListCategory(response.data.data));
      console.log(response.data);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// ========== get product by id ========== //
export const getProductByID = async (productID: any) => {
  try {
    const response = await axiosClient.get(`${ApiUrl.GET_PRODUCT_BY_ID}?id=${productID}`);
    if (response.data.result) {
      return response.data.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// ========== get Shop by Product id ========== //
export const getShopByProductID = async (productID: any) => {
  try {
    const response = await axiosClient.get(`${ApiUrl.GET_SHOP_BY_PRODUCT_ID}?id=${productID}`);
    if (response.data.result) {
      return response.data.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// ========== get Shop by id ========== //
export const getShopByID = async (shopID: any) => {
  try {
    const response = await axiosClient.get(`${ApiUrl.GET_SHOP_BY_ID}?id=${shopID}`);

    if (response.data.result) {
      return response.data.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// ========== get All product by shop id ========== //
export const getAllProductByShopID = async (shopID: any) => {
  try {
    const response = await axiosClient.get(`${ApiUrl.GET_ALL_PRODUCT_BY_SHOP_ID}?id=${shopID}`);
    if (response.data.result) {
      return response.data.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// ========== get product by category name ========== //
export const getProductByCategoryName = async (categoryName: any) => {
  try {
    const name = encodeURIComponent(categoryName)
    const response = await axiosClient.get(`${ApiUrl.GET_PRODUCT_BY_CATEGORY_NAME}?category-name=${name}`);
    if (response.data.result) {
      return response.data.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// ========== get product by category name ========== //
export const getCategoryByShopID = async (shopID: any) => {
  try {
    const response = await axiosClient.get(`${ApiUrl.GET_CATEGORY_BY_SHOP_ID}?shop-id=${shopID}`);
    console.log(response);

    if (response.data.result) {
      return response.data.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// ========== get product by category name ========== //
export const updateProfileByAccountID = async (accountID: any, data: any) => {
  try {
    const headers = {
      "Content-Type": "multipart/form-data",
      "Content-length": 1,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
    const response = await axiosClient.put(`${ApiUrl.UPDATE_PROFILE}/${accountID}`, data, { headers });
    console.log(response);
    if (response.data.result) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// ========== SEARCH PRODUCT BY NAME ========== //
export const searchProductByName = async (productName: any) => {
  try {
    productName = encodeURIComponent(productName)
    const response = await axiosClient.get(`${ApiUrl.SEARCH_PRODUCT_BY_NAME}?product-name=${productName}`);
    if (response.data.result) {
      return response.data.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// ========== SEARCH SHOP BY NAME ========== //
export const searchShopByName = async (shopName: any) => {
  try {
    shopName = encodeURIComponent(shopName)
    const response = await axiosClient.get(`${ApiUrl.SEARCH_SHOP_BY_NAME}?shop-name=${shopName}`);
    if (response.data.result) {
      return response.data.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// ========== SEARCH SHOP BY NAME ========== //
export const addProductToCart = async (data: any) => {
  try {
    const response = await axiosClient.post(`${ApiUrl.ADD_PRODUCT_TO_CART}`, data);
      return response.data.result;
  } catch (error) {
    return false;
  }
};

// ========== SEARCH SHOP BY NAME ========== //
export const addPaymentToTransaction = async (data: any) => {
  try {
    const response = await axiosClient.post(`${ApiUrl.ADD_PRODUCT_TO_CART}`, data);
    console.log(response.data.data);

    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};

// ========== get order by account ========== //
export const getCartByAccountID = async (dispatch: any, accountID: any) => {
  try {
    const response = await axiosClient.get(`${ApiUrl.GET_CART_BY_ACCOUNT_ID}?account-id=${accountID}`);
    if (response.data.result) {

      dispatch(saveCartData(response.data.data));
      // console.log(response.data.data.orders);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// ========== update cart  ========== //
export const updateCart = async (dispatch: any) => {
  try {
    const response = await axiosClient.get(ApiUrl.UPDATE_CART);
    if (response.data.result) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// ========== delete subOrder  ========== //
export const deleteSubOrder = async (orderID: any, productID: any, dispatch: any, accountID: any) => {
  try {
    const response = await axiosClient.delete(`${ApiUrl.DELETE_SUB_ORDER}/${productID}/${orderID}`);
    if (response.data.result) {
      console.log(response.data);
      getCartByAccountID(dispatch, accountID)
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// ========== create transaction  ========== //
export const createTransaction = async (data: any, discount: any, dispatch :any) => {
  try {
    const response = await axiosClient.post(ApiUrl.CREATE_TRANSACTION + "/" + discount, data);
    if (response.data.result) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
    // console.log(error);
  }
};

// ========== get all transaction  ========== //
export const getAllTransaction = async () => {
  try {
    const response = await axiosClient.get(ApiUrl.USER_GET_ALL_TRANSACTION);
    // console.log(response.data);
    if (response.data.statusCode === '200') {
      return response.data.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// ========== get profile by account id  ========== //
export const getProfileByAccountID = async (accountId: any) => {
  try {
    const response = await axiosClient.get(`${ApiUrl.GET_PROFILE_BY_ACCOUNT_ID}/${accountId}`);
    if (response.data.result) {
      return response.data.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// ========== get product by category name ========== //
export const GetAddColumn = async (file: any, header: any) => {
  try {
    let formData = new FormData();
    formData.append("inputFile", file);
    formData.append("newHeader", header)

    const headers = {
      "Content-Type": "multipart/form-data",
      "Content-length": file.length,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
    const response = await axiosClient.post(`${ApiUrl.ADD_COLUMN}`, formData, { headers });
    console.log(response);
    if (response.data.result) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// ========== get voucher by id  ========== //
export const getVoucherID = async (voucherId: any) => {
  try {
    const response = await axiosClient.get(`${ApiUrl.GET_VOUCHER_BY_ID}/${voucherId}`);
    if (response.data.result) {
      return response.data.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// ========== get voucher by shop id  ========== //
export const getVoucherByShopID = async (shopId: any) => {
  try {
    const response = await axiosClient.get(`${ApiUrl.USER_GET_VOUCHER_BY_SHOP_ID}?id=${shopId}`);
    if (response.data.result) {
      return response.data.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// ========== update quantity  ========== //
export const updateQuantity = async (item: any, orderID: any, productID: any, status: any) => {
  try {
    const response = await axiosClient.get(`${ApiUrl.UPDATE_QUANTITY}/${productID}/${orderID}?value=${status}`);
    if (response.data.result) {
      return response.data.data;
    } else {
      return false;
    }
  } catch (error) {

    console.log(error);
  }
};

// ========== update quantity  ========== //
export const createAddress = async (address: any) => {
  try {
    const response = await axiosClient.post(`${ApiUrl.CREATE_ADDRESS}`, address);
    console.log(response);
    if (response.data.result) {
      return true;
    } else {
      return false;
    }
  } catch (error) {

    console.log(error);
  }
};
