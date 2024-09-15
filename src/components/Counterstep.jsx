import { useEffect, useState } from 'react';
import '../App.css';

function Counterstep({
    count,
    step,
    countIncrementHandler,
    incrementHandler,
    decrementHandler,
}) {
    const [dayOffset, setDayOffset] = useState(0);

    // Arrays for month and day names
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const days = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 
        'Thursday', 'Friday', 'Saturday'
    ];

    // Function to calculate the date based on the dayOffset value
    const calculateDate = (dayOffset) => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + dayOffset);

        const dayName = days[currentDate.getDay()];
        const monthName = months[currentDate.getMonth()];
        const day = currentDate.getDate();
        const year = currentDate.getFullYear();

        return `${dayName}, ${monthName} ${day}, ${year}`;
    };

    // Function to get the dynamic text
    const getDynamicText = (dayOffset) => {
        if (dayOffset === 0) {
            return 'Today is';
        } else if (dayOffset === 1) {
            return '1 day later is';
        } else if (dayOffset === -1) {
            return '1 day ago was';
        } else if (dayOffset > 1) {
            return `${dayOffset} days later is`;
        } else {
            return `${Math.abs(dayOffset)} days ago was`;
        }
    };

    const dateString = calculateDate(dayOffset);
    const dynamicText = getDynamicText(dayOffset);

    useEffect(() => {
        setDayOffset(count);
    }, [count]);

    return (
        <div className="counterstep-container">
                <h1 className="counterstep-title">Date Counter</h1>
            <div className="counterstep-inner-container">
                <button className="counterstep-button" onClick={decrementHandler}>-</button>
                <h1 className="counterstep-heading">Steps: {step}</h1>
                <button className="counterstep-button" onClick={incrementHandler}>+</button>
            </div>
            <div className="counterstep-inner-container">
                <button className="counterstep-button" onClick={() => countIncrementHandler(-1)}>-</button>
                <h1 className="counterstep-heading">Count: {count}</h1>
                <button className="counterstep-button" onClick={() => countIncrementHandler(1)}>+</button>
            </div>
            <p className="counterstep-text">{dynamicText} {dateString}</p>
        </div>
    );
}

export default Counterstep;
