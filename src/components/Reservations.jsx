import BookingForm from "./Content/BookingForm";

function Reservations() {
  return (
    <main>
      <section className="reserve">
        <div className="reserve__layout">
          <h1 className="reserve__title">Savor your spot at Little Lemon</h1>
          <p className="reserve__description">Snag your table with ease at Little Lemon. Reserve your spot for a delightful dining experience. Book now and savor the flavors of our exquisite menu</p>
          <BookingForm />
        </div>
      </section>
    </main>
  )
}

export default Reservations;