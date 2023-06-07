import React, { useState } from 'react'
import BookYourSeat, { bookedSeats } from './BookYourSeat';

const BookingForm = ({setShow}) => {
    
        const availableSeats = 80 - bookedSeats.size;
        const [name,setName] = useState('');
        const [seats,setSeats] = useState('');
        const [err,setErr] = useState('')
        const handleSubmit =()=> {
          if(!seats) return setErr('please enter number of seats'); 
          if(seats < 0) return setErr('seat number can not be negative');
          if(seats>availableSeats) return setErr('value exceeds availbale seats');
          let x = BookYourSeat(Number(seats));
          console.log(x);
          setShow(true)
          setErr('');
        }
  return (
    <div >
    <form className="form">
        <h1>Book Online Tickets</h1>
        <p>Enter You Name</p>
        <input type="text" value={name}
        onChange={(e)=>setName(e.target.value)} />
        <p>Enter Number of Seats</p>
        <input type="number" value={seats}
        onChange={(e)=>setSeats(e.target.value)}/>
        <br />
        <small>{err}</small>
        
        <p>Available Seats : {availableSeats}</p>
        
        <button onClick={handleSubmit}>Book Ticket</button>
    </form>
  </div>
  )
}

export default BookingForm
