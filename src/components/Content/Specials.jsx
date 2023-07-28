import Iconfood from "../../assets/icon-food.webp";
import Greeksalad from "../../assets/greek-salad.webp";
import Bruchetta from "../../assets/bruchetta.webp";
import Lemondessert from "../../assets/lemon-dessert.webp";
import { Link } from "react-router-dom";

function Specials() {
  return (
    <section className="specials">
      <h2 className="specials__title">Specials</h2>
      <Link to="/Order" className="specials__cta">Online menu</Link>
      <div className="specials__container">
        <div className="specials__card">
          <img src={Greeksalad} alt="Greek Salad" />
          <div className="specials__card__container">
            <div className="specials__card__price">
              <h3>Greek Salad</h3>
              <strong className="price">$12.99</strong>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies dictum lacus id condimentum. Etiam commodo augue dui. Vestibulum facilisis nunc sed laoreet ultrices.</p>
            <Link to="/order">Order a delivery <img src={Iconfood} alt="" /></Link>
          </div>
        </div>
        <div className="specials__card">
          <img src={Bruchetta} alt="Bruchetta" />
          <div className="specials__card__container">
            <div className="specials__card__price">
              <h3>Brtuchetta</h3>
              <strong className="price">$14.99</strong>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies dictum lacus id condimentum. Etiam commodo augue dui. Vestibulum facilisis nunc sed laoreet ultrices.</p>
            <Link to="/order">Order a delivery <img src={Iconfood} alt="" /></Link>
          </div>
        </div>
        <div className="specials__card">
          <img src={Lemondessert} alt="Lemon dessert" />
          <div className="specials__card__container">
            <div className="specials__card__price">
              <h3>Lemon dessert</h3>
              <strong className="price">$5.00</strong>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies dictum lacus id condimentum. Etiam commodo augue dui. Vestibulum facilisis nunc sed laoreet ultrices.</p>
            <Link to="/order">Order a delivery <img src={Iconfood} alt="" /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Specials;