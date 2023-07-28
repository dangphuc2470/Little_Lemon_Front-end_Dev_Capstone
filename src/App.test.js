import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Reservations from './components/Reservations';
import BookingForm from './components/Content/BookingForm';

test('should render a text called Savor your spot at Little Lemon', () => {
  render(<Reservations />);
  const text = screen.getByText('Savor your spot at Little Lemon');
  expect(text).toBeInTheDocument();
});

test('should display and select available times', async () => {
  render(<BookingForm />);

  const dateSelect = screen.getByLabelText('Date*');
  fireEvent.change(dateSelect, { target: { value: '2023-07-08' } });

  const timeSelect = screen.getByLabelText('Time*');
  fireEvent.change(timeSelect, { target: { value: '18:30' } });
  expect(screen.getByDisplayValue('18:30')).toBeInTheDocument();
});

test('should submit the form and display the popup', async () => {
  render(<BookingForm />);

  const nameField = screen.getByLabelText('Full name*');
  fireEvent.change(nameField, { target: { value: 'Miguel' } });

  const emailField = screen.getByLabelText('Email*');
  fireEvent.change(emailField, { target: { value: 'mac@mac.com' } });

  const dateField = screen.getByLabelText('Date*');
  fireEvent.change(dateField, { target: { value: '2023-07-08' } });

  const timeField = screen.getByLabelText('Time*');
  fireEvent.change(timeField, { target: { value: '18:30' } });

  const guestsField = screen.getByLabelText('Guests*');
  fireEvent.change(guestsField, { target: { value: 4 } });

  const submitButton = screen.getByText('Make a reservation');
  fireEvent.click(submitButton);

  const popupBtn = screen.findByText('Looks great!');
  expect(popupBtn).not.toBeNull();
})

test('should appear an error message when the user types an invalid email', () => {
  render(<BookingForm />);

  const emailField = screen.getByLabelText('Email*');
  fireEvent.change(emailField, { target: { value: 'mac' } });

  const errorMessage = screen.findByText('Required');
  expect(errorMessage).not.toBeNull();
})