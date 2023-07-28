import Facebook from "../assets/facebook.webp";
import Instagram from "../assets/instagram.webp";
import Twitter from "../assets/twitter.webp";
import LogoFooter from "../assets/logo-footer.webp";
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img src={LogoFooter} alt="Little Lemon Restaurant Logo" />
        <div className="footer__info">
          <div className="footer__doormat">
            <p>Doormat</p>
            <Link to="/">Home</Link>
            <Link to="/Menu">Menu</Link>
            <Link to="/Reservations">Reservations</Link>
            <Link to="/Order">Order</Link>
          </div>
          <div className="footer__contact">
            <p>Address: Maldovo Street, Chicago, Illionis, USA</p>
            <p>Phone number: (555) 123-4567</p>
            <p>Email: info@littlelemonrestaurant.com</p>
          </div>
          <div className="footer__social">
            <p>Social Links</p>
            <div className="footer__social__container">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src={Facebook} alt="Facebook Social" /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={Instagram} alt="Instagram Social" /></a>
              <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><img src={Twitter} alt="Twitter Social" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;