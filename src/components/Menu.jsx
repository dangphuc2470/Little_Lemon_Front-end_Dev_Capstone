import MenuImg from "../assets/menu.webp";

function Menu() {
  return (
    <main>
      <section className="menu">
        <h1>Our Menu</h1>
        <img src={MenuImg} alt="" />
      </section>
    </main>
  )
}

export default Menu;