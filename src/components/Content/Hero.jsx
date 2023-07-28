import Heroimg from "../../assets/Hero.webp";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__layout">
        <div className="hero__container">
          <h1 className="hero__title">Little Lemon</h1>
          <h2 className="hero__subtitle">Chicago</h2>
          <p>We are a family-owned Mediterranean restaurant, located on Melrose Street in Chicago, Illinois. We focus on traditional recipes served with a modern twist.</p>
          <Link to="/Reservations">Reserve a table</Link>
        </div>
        <div className="hero__img">
          <img src={Heroimg} alt="Little Lemon Restaurant" />
        </div>
      </div>
    </section>
  )
}

export default Hero;