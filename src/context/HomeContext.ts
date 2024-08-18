import { routes } from "../routes";

export const homeContext = (navigate: any) => {
  switch (window.location.pathname) {
    case "/":
      navigate(routes.home.Root);
      break;
    case "/profile":
      navigate(routes.home.ProfilePage);
      break;
    case "/ChangePasswordPage":
      navigate(routes.home.ChangePasswordPage);
      break;
    case "/view-orders":
      navigate(routes.home.ViewOrdersPage);
      break;
    case "/address-deliver":
      navigate(routes.home.EditAddressDeliverPage);
      break;
    case "category":
      navigate(routes.home.CategoryProductPage);
      break;
    case "/payment":
      navigate(routes.home.PaymentPage);
      break;
    case "/cart":
      navigate(routes.home.CartPage);
      break;
    case "/search":
      navigate(routes.home.SearchProductPage);
      break;
    case "/shop":
      navigate(routes.home.ShopDetailPage);
      break;
    case "/add-column":
      navigate(routes.home.AddColumnPage);
      break;
      case "/product":
        navigate(routes.home.ProductDetailPage);
        break;
    default:
      navigate(routes.home.NotFoundPage);
      break;
  }
};
