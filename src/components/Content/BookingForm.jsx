import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom"

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
    } else if (!isNaN(values.name)) {
      errors.name = 'The name cannot have any numbers'
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
    } else if (values.guests > 10) {
      errors.guests = 'Must be maximum 10 guests'
    }

    return errors;
  }

  const [availableTimes, setAvailableTimes] = useState([]);
  const [popup, updatePopup] = useState(false);

  const fetchingDate = (date) => {
    try {
      const dates = fetchAPI(date);
      setAvailableTimes(dates)
    } catch (error) {
      //console.error(error)
    }
  };

  const showPopup = () => {
    return (
      <>
        <div className="popup" role="dialog">
          <div className="popup__bg"></div>
          <div className="popup__container">
            <h2>¡Reservation Confirmed!</h2>
            <p>We will send you the information about the reservation</p>
            <Link to="/">Looks great!</Link>
          </div>
        </div>
      </>
    )
  }

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
    onSubmit: (values) => {
      submitAPI(values) ? updatePopup(true) : updatePopup(false);
    }
  });
  const { values } = formik;
  useEffect(() => {
    fetchingDate(values.date);
  }, [values.date]);

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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="error">{formik.errors.name}</p>
          ) : null}
        </div>
        <div className="item">
          <label htmlFor="email">Email<span className="required">*</span></label>
          <input
            type="text"
            placeholder="Write your e-mail..."
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="error">{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="item">
          <label htmlFor="date">Date<span className="required">*</span></label>
          <input
            type="date"
            placeholder=""
            id="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.date && formik.errors.date ? (
            <p className="error">{formik.errors.date}</p>
          ) : null}
        </div>
        <div className="item">
          <label htmlFor="time">Time<span className="required">*</span></label>
          <select
            id="time"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select an occasion</option>
            {availableTimes.map(time => <option value={time} key={time}>{time}</option>)}
          </select>

          {formik.touched.time && formik.errors.time ? (
            <p className="error">{formik.errors.time}</p>
          ) : null}
        </div>
        <div className="item">
          <label htmlFor="guests">Guests<span className="required">*</span></label>
          <input
            type="number"
            placeholder="1"
            min={1}
            max={10}
            id="guests"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.guests && formik.errors.guests ? (
            <p className="error">{formik.errors.guests}</p>
          ) : null}
        </div>
        <div className="item">
          <label htmlFor="seating">Seating preferences</label>
          <select
            id="seating"
            onChange={formik.handleChange}>
            <option value="">None</option>
            <option value="indoors">Indoors</option>
            <option value="outdoors">Outdoors</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="engagement">Engagement</option>
            <option value="none">None</option>
            <option value="other">Other</option>
          </select>
        </div>
        <input type="submit" value="Make a reservation" aria-label="On Click" />
      </form>
    </>
  )
}

export default BookingForm;