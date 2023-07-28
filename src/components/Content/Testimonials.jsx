import Avatar1 from "../../assets/avatar1.webp";
import Avatar2 from "../../assets/avatar2.webp";
import Avatar3 from "../../assets/avatar3.webp";
import Avatar4 from "../../assets/avatar4.webp";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__layout">
        <h2 className="testimonials__title">Testimonials</h2>
        <div className="testimonials__container">
          <div className="testimonials__card">
            <div className="testimonials__card__container">
              <h3>Rating 5⭐</h3>
              <img src={Avatar1} alt="Avatar" />
            </div>
            <div className="testimonials__card__info">
              <p className="name">Davis</p>
              <p>The hummus was so creamy and fresh, it felt like I was in a small village in Greece.</p>
            </div>
          </div>
          <div className="testimonials__card">
            <div className="testimonials__card__container">
              <h3>Rating 4.8⭐</h3>
              <img src={Avatar2} alt="Avatar" />
            </div>
            <div className="testimonials__card__info">
              <p className="name">Cooper</p>
              <p>The flavors of the Mediterranean burst in my mouth - a truly authentic experience.</p>
            </div>
          </div>
          <div className="testimonials__card">
            <div className="testimonials__card__container">
              <h3>Rating 4.9⭐</h3>
              <img src={Avatar3} alt="Avatar" />
            </div>
            <div className="testimonials__card__info">
              <p className="name">Hang</p>
              <p>A perfect spot for a cozy dinner with friends, the seafood was cooked to perfection.</p>
            </div>
          </div>
          <div className="testimonials__card">
            <div className="testimonials__card__container">
              <h3>Rating 4.7⭐</h3>
              <img src={Avatar4} alt="Avatar" />
            </div>
            <div className="testimonials__card__info">
              <p className="name">Rodriguez</p>
              <p>The lamb kebab was incredible and the portion size was huge - I'll definitely be back for more.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;