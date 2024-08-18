import { ApiUrl } from "../../services/ApiUrl";
import axiosClient from "../../utils/axiosClient";
import { saveAccount, toastError } from "./Auth.Action";

// ========== sign in ========== //
export const signIn = async (dispatch: any, data: any) => {
  try {
    const response: any = await axiosClient.post(ApiUrl.SIGN_IN, data);

    if (response?.data?.result) {
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("role", response.data.data.account_role);
      localStorage.setItem("account-id", response.data.data.account_id);
      localStorage.setItem("username", response.data.data.account_username);
      return true;
    } else {
      if (response?.response?.status === 401) {
        dispatch(
          toastError({
            open: true,
            status: "error",
            message: "Account is signed in at another device ! Please sign out before !",
          })
        );
        setTimeout(() => {
          dispatch(toastError({ open: false, status: "error", message: "" }));
        }, 3000);
        return false;
      } else {
        dispatch(
          toastError({
            open: true,
            status: "error",
            message: "Username or password is not valid ! Please try again !",
          })
        );
        setTimeout(() => {
          dispatch(toastError({ open: false, status: "error", message: "" }));
        }, 3000);
        return false;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

// ========== sign up ========== //
export const signUp = async (dispatch: any, data: any) => {
  try {
    const response = await axiosClient.post(ApiUrl.SIGN_UP, data);
    console.log(response.data);
    
    if (response.data.result) {
      dispatch(saveAccount(response.data.data));
      console.log(data);
      
      return true;
    } else {
      return false;
    }
  } catch (error) {
    dispatch(
      toastError({
        open: true,
        status: "error",
        message: "Username or passowrd not valid !!",
      })
    );
    setTimeout(() => {
      dispatch(toastError({ open: false, status: "error", message: "" }));
    }, 3000);
    console.log(error);
  }
};

// ========== sign out ========== //
export const signOut = async () => {
  try {
    const response = await axiosClient.get(ApiUrl.SIGN_OUT);
    console.log(response.data);

    if (response.data.result) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("account-id");
      localStorage.removeItem("username");
      localStorage.removeItem("shop_id");
      localStorage.removeItem("fullname");
      localStorage.removeItem("input_search");
      localStorage.removeItem("monthChart");
      localStorage.removeItem("category_name");
      localStorage.removeItem("product_id");
      localStorage.removeItem("productList");
      localStorage.removeItem("monthFilter");
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// ========== change password  ========== //
export const changePassword = async (data:any) => {
  try {
    const response = await axiosClient.post(ApiUrl.CHANGE_PASSWORD,data);
    console.log(data);
    
    if (response.data.result) {
      return response.data.data;
    } else {
      return false;
    }
  } catch (error) {

    console.log(error);
  }
};
