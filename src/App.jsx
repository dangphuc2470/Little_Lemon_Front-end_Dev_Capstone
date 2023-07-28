import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import Order from "./components/Order";
import "./App.css"
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/Order" element={<Order />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;