import { useState } from 'react';
import './pomodoro.css'
import Todo from './Todo';
import Clock from './Clock';
import Stopwatch from './Stopwatch';

function Pomodoro(){
  const [stopWatch,setStopwatch] = useState(true);
  function updateStopWatchState(event){
    if (event.target.innerText === "Time"){
      setStopwatch(false);
    }
    else{
      setStopwatch(true);

    }
  }
  
  return(
    <div className = "completePomodoro">
      {/* <Navbar /> */}
      <div className="choice">
        <div className="choiceBtns">
          <button className="timeOrStopwatch" onClick = {updateStopWatchState}>Time</button>  
          <button className="timeOrStopwatch" onClick = {updateStopWatchState}>Stopwatch</button>
        </div>
      </div>
      <div className="pomo">
        {stopWatch ? <Stopwatch minTime = {15} diff={15}/> : <Clock />}
        <Todo />
      </div>
    </div>
  )
}

export default Pomodoro;