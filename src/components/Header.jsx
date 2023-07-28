import { useState } from "react";
import Logo from "../assets/Logo.webp";
import { Link } from "react-router-dom";

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <header className="header">
      <div className="header__layout">
        <img src={Logo} alt="" className="header__img" />
        <nav className="header__nav">
          <ul>
            <li><Link to="/" className={isHovered ? 'active' : ''} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>Home</Link></li>
            <li><Link to="/Menu" className={isHovered ? 'active' : ''} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>Menu</Link></li>
            <li><Link to="/Reservations" className={isHovered ? 'active' : ''} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>Reservations</Link></li>
            <li><Link to="/Order" className={isHovered ? 'active' : ''} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>Order online</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;