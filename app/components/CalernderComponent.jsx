import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../components/styles/calender.css";

const CalendarComponent = ({onDateSelect}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDates, setSelectedDates] = useState("");

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const selectDatesHandler = () => {
    const startDate = date[0].startDate.toLocaleDateString();
    const endDate = date[0].endDate.toLocaleDateString();

    setSelectedDates(`${startDate} - ${endDate}`);
    setShowCalendar(false);

    const bookingDates = {startDate,endDate}

    if(onDateSelect){
      onDateSelect(bookingDates);
      }

    console.log("selected dates are:", bookingDates);
  };

  const today = new Date().toDateString();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <div className="calendar-wrapper">
      <div
        className="date-display"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        {selectedDates || `${today} - ${tomorrow.toDateString()}`}
      </div>

      {showCalendar && (
        <div className="calendar-box">
          <DateRange
            editableDateInputs
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
          />

          <button className="apply-btn" onClick={selectDatesHandler}>
            Apply Dates
          </button>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;


/* import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const CalenderComponent = () => {
    const[showCalander, setShowClaender] = useState(false);
    const[selectedDates, setSelectedDates]= useState(null);

    const [date ,setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])

    const selectDatesHandler = async () => {
        const startDate = date[0].startDate.toLocaleDateString();
        const endDate = date[0].endDate.toLocaleDateString();

        setSelectedDates(`Selected Dates : ${startDate} - ${endDate}`);
        setShowClaender(false);

        const bookingDates = {startDate,endDate}
        console.log('selected dates are :',bookingDates )

    }

    const currentDate = new Date().toDateString();
    const nextDate = new Date() ;
    nextDate.setDate(nextDate.getDate()+1);
    const formatedDate = nextDate.toDateString() ;

    return(
        <div>
            <div onClick={() => setShowClaender(!showCalander)}>
                {!selectedDates && (
                    <>
                        {`${currentDate} - ${formatedDate}`}
                    </>
                )}
                {selectedDates && (
                    <div style={{color:'red'}}>
                        {selectedDates}
                    </div>
                )}
            </div>
            {showCalander && 
            <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
            />}
            <br></br>
            <button onClick={selectDatesHandler}>Selected Dates </button>
        </div>
    )

}

export default CalenderComponent;
 */