import { useEffect, useState } from "react";
import { useFormik } from "formik";

function BookingForm() {

  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = s * a % m) / m;
    };
  }

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(new Date(date).getTime());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() < 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  };
  const submitAPI = function (formData) {
    return true;
  };

  const validate = values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required'
    }

    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email adress'
    }

    if (!values.date) {
      errors.date = 'Required'
    }

    if (!values.time) {
      errors.time = 'Required'
    }

    if (!values.guests) {
      errors.guests = 'Required'
    } else if (values.guests.length > 10) {
      errors.guests = 'Must be maximum 10 guests'
    }

    if (!values.occasion) {
      errors.occasion = 'Required'
    }

    return errors;
  }

  // const [form, setForm] = useState({
  //   name: '',
  //   email: '',
  //   date: '',
  //   time: '',
  //   guests: '',
  //   seating: '',
  //   occasion: ''
  // });

  const [availableTimes, setAvailableTimes] = useState([]);
  const [popup, updatePopup] = useState(false);

  const fetchingDate = async (date) => {
    try {
      const dates = fetchAPI(date);
      setAvailableTimes(dates)
    } catch (error) {
      console.error(error)
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setAvailableTimes(availableTimes.filter(time => time.time !== form.time));
  //   submitAPI(form) ? updatePopup(true) : updatePopup(false);
  // };

  const showPopup = () => {
    const handleBtnClick = () => {
      updatePopup(false);
    };
    return (
      <>
        <div className="popup" role="popup">
          <div className="popup__bg"></div>
          <div className="popup__container">
            <h2>¡Reservation Confirmed!</h2>
            <p>We will send you the information about the reservation</p>
            <button onClick={handleBtnClick}>Take me home</button>
          </div>
        </div>
      </>
    )
  }

  useEffect(() => {
    fetchingDate(form.date);
  }, [form.date]);



  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      date: '',
      time: '',
      guests: '',
      seating: '',
      occasion: ''
    },
    validate,
    onSubmit: values => {
      setAvailableTimes(availableTimes.filter(time => time.time !== form.time));
      submitAPI(values) ? updatePopup(true) : updatePopup(false);
    }
  });

  return (
    <>
      {popup && showPopup()}
      <form className="reserveform" onSubmit={formik.handleSubmit}>
        <div className="item">
          <label htmlFor="name">Full name<span className="required">*</span></label>
          <input
            type="text"
            placeholder="Write your full name..."
            id="name"
            autoComplete="off"
            onChange={e => setForm({ ...form, name: e.target.value.toLocaleLowerCase() })} />
          {formik.errors.name ? <p className="error">{formik.errors.name}</p> : null}
        </div>
        <div className="item">
          <label htmlFor="email">Email<span className="required">*</span></label>
          <input
            type="text"
            placeholder="Write your e-mail..."
            id="email"
            onChange={e => setForm({ ...form, email: e.target.value.toLocaleLowerCase() })} />
          {formik.errors.email ? <p className="error">{formik.errors.email}</p> : null}
        </div>
        <div className="item">
          <label htmlFor="date">Date<span className="required">*</span></label>
          <input
            type="date"
            placeholder=""
            onChange={e => setForm({ ...form, date: e.target.value })} />
          {formik.errors.date ? <p className="error">{formik.errors.date}</p> : null}
        </div>
        <div className="item">
          <label htmlFor="time">Time<span className="required">*</span></label>
          <select
            id="time"
            onChange={e => setForm({ ...form, time: e.target.value })}>
            <option value="">Select an occasion</option>
            {availableTimes.map(time => <option value={time} key={time}>{time}</option>)}
          </select>

          {formik.errors.time ? <p className="error">{formik.errors.time}</p> : null}
        </div>
        <div className="item">
          <label htmlFor="guests">Guests<span className="required">*</span></label>
          <input
            type="number"
            placeholder="1"
            min={1}
            max={10}
            id="guests"
            onChange={e => setForm({ ...form, guests: e.target.value })} />
          {formik.errors.guests ? <p className="error">{formik.errors.guests}</p> : null}
        </div>
        <div className="item">
          <label htmlFor="seating">Seating preferences</label>
          <select
            id="seating"
            onChange={e => setForm({ ...form, seating: e.target.value })}>
            <option value="">None</option>
            <option value="indoors">Indoors</option>
            <option value="outdoors">Outdoors</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="occasion">Occasion<span className="required">*</span></label>
          <select id="occasion" onChange={e => setForm({ ...form, occasion: e.target.value })}>
            <option value="">Select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="engagement">Engagement</option>
            <option value="other">Other</option>
          </select>
          {formik.errors.occasion ? <p className="error">{formik.errors.occasion}</p> : null}
        </div>
        <input type="submit" value="Make a reservation" />
      </form>
    </>
  )
}

export default BookingForm;