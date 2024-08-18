import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import "./FooterComponentV2.scss";

function FooterComponent() {
  const navigate = useNavigate();

  const goToNotFound = () => {
    navigate(routes.home.NotFoundPage);
  };
  const goToSeller = () => {
    navigate(routes.seller.Root);
}

  const goToCart = () => {
    navigate(routes.home.CartPage);
  };

  return (
    <Box>
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <i className="fab fa-slack"></i>
              <LocalGroceryStoreIcon sx={{
                fontSize: 36,
                marginRight: 1,
              }}/>
              <span className="logo_name">Eposh</span>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">About us</li>
              <li><a href="#">eposh.helper@gmail.com</a></li>
              <li><a href="#">+84-911-558-530</a></li>
              <li><a href="#">600, Nguyen Van Cu </a></li>
              <li><a href="#">- Ninh Kieu - Can Tho</a></li>
            </ul>
            <ul className="box">
              <li className="link_name">Services</li>
              <li><a href="#" onClick={goToSeller}>Seller</a></li>
              <li><a href="#">Advertisement</a></li>
              <li><a href="#">Shopping</a></li>
              <li><a href="#">Deliver</a></li>
            </ul>
            <ul className="box">
              <li className="link_name">Account</li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Login / Register</a></li>
              <li><a href="#" onClick={goToCart}>Cart</a></li>
              <li><a href="#">Shop</a></li>
            </ul>
            <ul className="box">
              <li className="link_name">Quick Link</li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <ul className="box input-box">
              <li className="link_name">Subscribe</li>
              <li><input type="text" placeholder="Enter your email" /></li>
              <li><input type="button" value="Subscribe" /></li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text" style={{color: '#000'}}>Copyright © 2021 <a href="#" style={{color: '#000', fontWeight: "bold"}} >CPL JAVA 01.</a>All rights reserved</span>
            <span className="policy_terms" >
              <a href="#" style={{color: '#000'}}>Privacy policy</a>
              <a href="#" style={{color: '#000'}}>Terms & condition</a>
            </span>
          </div>
        </div>
      </footer>
    </Box>
  );
}

export default FooterComponent;
