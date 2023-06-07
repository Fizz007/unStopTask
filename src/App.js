
import { useState } from 'react';
import './App.css';
import BookYourSeat, { bookedSeats } from './components/BookYourSeat';
import Show from './components/Show';

function App() {
  const availableSeats = 80 - bookedSeats.size;
	// console.log(80 - bookedSeats);
	const [seats, setSeats] = useState("");
	const [err, setErr] = useState("");
	const handleSubmit = () => {
		if (!seats) return setErr("Input shouldn't be left blank");
		if (seats <= 0) return setErr("seat number should't be neagtive or zero");
		if (seats > 7) return setErr("seat number should not be greater than 7");
		
		if (seats > availableSeats)
			return setErr("value exceeds available seats");
		BookYourSeat(Number(seats));
		setErr("");
		setSeats("");
	};
	return (
    <div className="App">
		<div className="Container">
			<div className="form">
				<h1>Online Seats Booking </h1>
				<p style={{fontSize:'20px'}}>Enter Number of Seats</p>
				<input
					type="number"
					value={seats}
					onChange={(e) => setSeats(e.target.value)}
					placeholder='Enter No. of seats'
				/>
				<p className='err'>{err}</p>
        
				<p>Available Seats : {availableSeats}</p>
				<button onClick={handleSubmit}>Book Ticket</button>
				<div className="indentify">
				<div className="available"></div>
				<p>Available Seats</p>
				<div className="bookedSeat"></div>
				<p>Booked Seats</p>
				</div>
				
			</div>
			<div className="hr"></div>
			<div>
			<h1>Seats</h1>
			<Show />
			</div>
			
		</div>
    </div>
  );
}

export default App;
