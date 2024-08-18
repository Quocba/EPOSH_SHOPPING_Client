import { ApiUrl } from "../../services/ApiUrl";
import axiosClient from "../../utils/axiosClient";

// ===== Get all user =====
export const getAllUser = async () => {
  try {
    const response = await axiosClient.get(ApiUrl.GET_ALL_ACCOUNT);
    if (response.data.result) {
      return response.data.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

// ===== Search user by name =====
export const searchAccountByName = async (accountName: any) => {
  try {
    const response = await axiosClient.get(ApiUrl.SEARCH_ACCOUNT + `?account-name=${accountName}`
    );
    if (response.data.result) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

// ===== Filter account =====
export const filterAccount = async (status: any, role: any) => {
  try {
    const response = await axiosClient.get(ApiUrl.FILTER_ACCOUNT + `?status=${status}&roleID=${role}`
    );
    if (response.data.result) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

// ===== Get all category =====
export const getAllShopCategory = async () => {
  try {
    const response = await axiosClient.get(ApiUrl.GET_ALL_CATEGORY_ADMIN);
    if (response.data.result) {
      return response.data.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

// ===== Set category status =====
export const setCategoryStatus = async (id: any) => {
  try {
    const response = await axiosClient.put(ApiUrl.SET_CATEGORY_STATUS + `?id=${id}`);
    if (response.data.result) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

// ===== Search category by name =====
export const searchCategoryByName = async (name: any) => {
  try {
    const response = await axiosClient.get(ApiUrl.SEARCH_CATEGORY_NAME + `?name=${name}`);
    if (response.data.result) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log("FUCK");
    return null;
  }
};

// ===== Get all shop =====
export const getAllShopInformation = async () => {
  try {
    const response = await axiosClient.get(ApiUrl.GET_ALL_SHOP);
    if (response.data.result) {
      return response.data.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

// ===== Set voucher status =====
export const setVoucherConfirmStatus = async (id: any) => {
  try {
    const response = await axiosClient.put(ApiUrl.SET_VOUCHER_CONFIRM_STATUS + `?id=${id}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const setVoucherRejectStatus = async (id: any) => {
  try {
    const response = await axiosClient.delete(ApiUrl.SET_VOUCHER_REJECT_STATUS + `?id=${id}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// ===== Search shop by name =====
export const searchShopByName = async (name: any) => {
  try {
    const response = await axiosClient.get(ApiUrl.SEARCH_SHOP_NAME + `?shop-name=${name}`);
    if (response.data.result) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

// ===== Get voucher by shop ID =====
export const getVoucherByShopID = async (id: any) => {
  try {
    const response = await axiosClient.get(ApiUrl.GET_VOUCHER_BY_SHOP_ID + `?id=${id}`);
    if (response.data.result) {
      console.log(response.data.data);
      return response.data.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

// ===== Get all transaction =====
export const getAllTransaction = async () => {
  try {
    const response = await axiosClient.get(ApiUrl.GET_ALL_TRANSACTION);
    if (response.data.result) {
      console.log(response.data.data);
      return response.data.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

// ===== Set transaction status =====
export const setTransactionStatus = async (id: any, newStatus: any) => {
  try {
    const response = await axiosClient.put(ApiUrl.SET_TRANSACTION_STATUS + `/${id}`, { status: newStatus });
    if (response.data.result) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};