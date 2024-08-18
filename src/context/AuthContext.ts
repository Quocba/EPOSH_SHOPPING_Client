import { routes } from "../routes";
import { checkSignIned } from "../utils/helper";
import { homeContext } from "./HomeContext";
import { sellerContext } from "./SellerContext";

export const authContext = (navigate: any) => {
  if (checkSignIned()) {
    switch (localStorage.getItem("role")) {
      case "3":
        navigate(routes.admin.Root);
        break
      case "2":
        sellerContext(navigate)
        break
      case "1":
        homeContext(navigate)
        break
      default:
        navigate(routes.home.Root);
        break
    }
  } else {
    switch (window.location.pathname) {
      case "/admin":
        navigate(routes.home.SignInPage);
        break;
      case "/seller":
        navigate(routes.home.SignInPage);
        break;
      case "/sign-in":
        navigate(routes.home.SignInPage);
        break;
      case "/sign-up":
        navigate(routes.home.SignUpPage);
        break;
      case "/":
        navigate(routes.home.Root);
        break;
      case "/cart":
        navigate(routes.home.SignInPage);
        break;
      case "/add-column":
        navigate(routes.home.AddColumnPage);
        break;
      default:
        navigate(routes.home.NotFoundPage);
        break;
    }
  }
};
