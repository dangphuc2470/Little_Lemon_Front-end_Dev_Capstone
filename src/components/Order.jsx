import UberLogo from "../assets/ubereats.webp";
import Seamless from "../assets/seamless-logo.webp";
import GrubHub from "../assets/grubhub-logo.webp";

function Order() {
  return (
    <main>
      <section className="order">
        <h1>Order Online</h1>
        <div className="order__container">
          <div className="order__card">
            <a href="https://www.ubereats.com" target="_blank" rel="noreferrer"><img src={UberLogo} alt="Uber eats logo" /></a>
            <p>Uber eats</p>
          </div>
          <div className="order__card">
            <a href="https://www.seamless.com" target="_blank" rel="noreferrer"><img src={Seamless} alt="Seamless logo" /></a>
            <p>Seamless</p>
          </div>
          <div className="order__card">
            <a href="https://www.grubhub.com" target="_blank" rel="noreferrer"><img src={GrubHub} alt="Grubhub logo" /></a>
            <p>GrubHub</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Order;