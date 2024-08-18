import { routes } from "../routes";

export const capitalizeString = (str: string): string => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatNumber = (num: number): string => {
  if (!num) return "0";
  return num.toLocaleString();
};

export const formatDate = (date: Date): string => {
  if (!date) return "";
  return date.toLocaleDateString();
};

export const formatFollower = (num: number): string => {
  if (num > 999) return (num / 1000).toFixed(0) + "k";
  return num + "";
};

export const checkIsPhoneNumber = (phoneNumber: any) => {
  if (phoneNumber.startsWith('0') && phoneNumber.length === 10 && /^\d+$/.test(phoneNumber)) {
    return true;
  } else {
    return false;
  }
}

export const checkIsEmail = (email: any) => {
  const emailFormatRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailFormatRegex.test(email);
}

export const checkSignIned = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

export const checkAdminRoute = () => {
  if (localStorage.getItem("role") === "3") {
    return true;
  } else {
    return false;
  }
};

export const checkPermission = (navigate: any) => {
  switch (localStorage.getItem("role")) {
    case "3":
      navigate(routes.admin.Root);
      break;
    case "2":
      navigate(routes.seller.Root);
      break;
    case "1":
      navigate(routes.home.Root);
      break;
    default:
      navigate(routes.home.Root);
      break;
  }
};

const Helper = {
  capitalizeString,
  formatNumber,
  formatDate,
};

export default Helper;
