export const seats = [  [1 , 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41, 42],
  [43, 44, 45, 46, 47, 48, 49],
  [50, 51, 52, 53, 54, 55, 56],
  [57, 58, 59, 60, 61, 62, 63],
  [64, 65, 66, 67, 68, 69, 70],
  [71, 72, 73, 74, 75, 76, 77],
  [78, 79, 80]
];

export const bookedSeats = new Set();

const BookYourSeat = (numOfSeats)=> {
     //trying to book seats in a row
     for (let i = 0; i < seats.length; i++) {
        const row = seats[i];
        const availableSeats = row.filter(seat => !bookedSeats.has(seat));
      
        console.log(availableSeats);
        if (availableSeats.length >= numOfSeats) {
          for (let j = 0; j < numOfSeats; j++) {
            bookedSeats.add(availableSeats[j]);
          }
          return 
        }
      }

  
}

export default BookYourSeat;



