import React from 'react'
import { bookedSeats,seats  } from '../components/BookYourSeat'

const Show = () => {
    return (
        <div className='show'>
        {seats.map((row,ind)=> {
          return (
            <div className='row' key={'row'+ind}>
              {row.map((num,indCol) => (
                <div>
                  <div key={'col'+indCol} className={`seat ${bookedSeats.has(num)?'booked':''}`}>{num}</div>
                </div>
                
              ))}
            </div>
          )
        })}
        
    </div>
      )
    }

export default Show
