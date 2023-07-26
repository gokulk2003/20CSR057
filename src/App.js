import React,{useState,useEffect} from 'react';
import './App.css';
import data from "./data.json"
const currDate = new Date().toLocaleTimeString();
function App() {
  return (
    <>
    <div className='main'>
         {
          data.map(record=>{
            return(
              <div className='box'>
              <h1> {record.trainName}</h1>
              <p>Train Number:{record.trainNumber}</p>
              <p>Departure Time:{record.departureTime.Hours}:{record.departureTime.Minutes}:{record.departureTime.Seconds}</p>
              <p>Sleeper: {record.seatsAvailable.sleeper} AC: {record.seatsAvailable.AC}</p>
              <p>Sleeper: Rs. {record.price.sleeper} AC: {record.price.AC}</p>
              <p>Delayed By :{record.delayedBy}</p>
              <p>Current Time :{currDate}</p>
                </div>
            )
          })
         }
      </div>
    </>
  );
}
export default App;