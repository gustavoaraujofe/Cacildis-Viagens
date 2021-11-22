import { Clock } from 'react-feather';
import { useState, useEffect } from 'react';
import "./timer-reservation.css";

function Timer(props) {

    const [counter, setCounter] = useState(1800);
    
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);
    

      return (
        <div>
          <div className="timer"></div>
          <Clock size={24} /> <span>{counter}</span>
        </div>
      );
}

export default Timer;
