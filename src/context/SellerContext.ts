import { routes } from "../routes";

export const sellerContext = (navigate: any) => {
  switch (window.location.pathname) {
    case "/":
      navigate(routes.seller.Home);
      break;
    case "/seller":
      navigate(routes.seller.Root);
      break;
    case "/seller/voucher/create":
      navigate(routes.seller.CreateVoucherPage);
      break;
    case "/seller/transaction":
      navigate(routes.seller.TransactionPage);
      break;
    case "/seller/product":
      navigate(routes.seller.ProductPage);
      break;
    case "/seller/product/add":
      navigate(routes.seller.AddProductPage);
      break;
    case "/seller/performance":
      navigate(routes.seller.PerformancePage);
      break;
    case "/seller/shop-management/review":
      navigate(routes.seller.ShopReviewsPage);
      break;
    case "/seller/shop-management/profile":
      navigate(routes.seller.ShopProfilePage);
      break;
    case "/seller/shop-management/catalog":
      navigate(routes.seller.CatalogShopPage);
      break;
    case "/seller/setting":
      navigate(routes.seller.ShopSetupPage);
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
    case "/product":
      navigate(routes.home.ProductDetailPage);
      break;
    default:
      navigate(routes.seller.NotFoundPage);
      break;
  }
};
