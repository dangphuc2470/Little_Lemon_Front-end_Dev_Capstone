import Chefb from "../../assets/chefb.webp";
import Restaurant from "../../assets/restaurant.webp";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__title">Little Lemon</h2>
        <h3 className="about__subtitle">Chicago</h3>
        <p>We are a family-owned Mediterranean restaurant, located on Melrose Street in Chicago, Illinois. We focus on traditional recipes served with a modern twist.</p>
      </div>
      <div className="about__imgs">
        <img src={Restaurant} alt="Chef DamianLittle Lemon Restaurant" className="about__imgs__bottom" />
        <img src={Chefb} alt="Chef's Damian and Jordan Little Lemon Restaurant" className="about__imgs__top" />
      </div>
    </section>
  )
}

export default About;