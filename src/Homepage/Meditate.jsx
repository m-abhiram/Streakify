import React from 'react'
import Stopwatch from "../pomodoro/Stopwatch"

function Meditate() {
  return (
      <div className='Meditate-container'>
        <div className="meditateHeading">Meditate</div>
        <div className="meditateTimer">
          <Stopwatch minTime = {1} diff={5}/>
        </div>
      </div>
  )
}

export default Meditate
