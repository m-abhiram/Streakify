import {useState,useEffect,useRef} from 'react'
import useSound from 'use-sound'
import React from 'react'
import baby from "../assets/baby.png"
import preteen from "../assets/preteen.png"
import teenager from "../assets/teenager.png"
import adult from "../assets/adult.png"
import goku from "../assets/goku.png"
import ReactConfetti from 'react-confetti'
import DigitalClock from "../assets/digital-clock.mp3"
import Placard from './Placard'

function Stopwatch(props) {
  const [elapsedTime,setElapsedTime] = useState(0);
  const intervalRef = useRef(null);
  const [isRunning,setIsRunning] = useState(false);
  const startTime = useRef(null);
  const [minutes,setMinutes] = useState(props.minTime)
  const [showConfetti,setConfetti] = useState(false);
  const [gaveUp,setGaveUp] = useState(false);
  const [play, { stop }] = useSound(DigitalClock);
  const [showPlacard,setShowPlacard] = useState(false);
  
  function handleConfetti(){
    setConfetti(true);
    play()
    setShowPlacard(true)
    setTimeout(()=>{
      setConfetti(false)
      stop()
    },5000);
  }
  
  function handleIncrease(){
    if (minutes + props.diff <= 120)
      setMinutes(m => m + props.diff)
  }
  function handleDecrease(){
    if (minutes-props.diff > 0)
      setMinutes(m => m - props.diff)
    
  }
  useEffect(() => {
    if (isRunning){
      intervalRef.current = setInterval(()=>{
        setElapsedTime(t => (Date.now() - startTime.current));
      },1000)
    }

    return () => {
      clearInterval(intervalRef.current);
    }
  },[isRunning])

  function start(){
    setIsRunning(true);
    startTime.current = Date.now() - elapsedTime
    setGaveUp(false);
  }
  
  function reset(){
    setElapsedTime(0);
    setIsRunning(false);
    setGaveUp(true);
    setShowPlacard(true);
  }

  function handlePlacardClose(){
    setShowPlacard(false);
  }

  function formatTime(){
    let elapsedMinutes = Math.floor(elapsedTime / (1000 * 60))
    let remainingMinutes = minutes - elapsedMinutes - 1
    let elapsedSeconds = Math.floor(elapsedTime / (1000))
    let remainingSeconds = 60 - (elapsedSeconds % 60) - 1
    if (remainingSeconds === 60){
      remainingSeconds = 0;
    }
    if (remainingSeconds < 10){
      remainingSeconds = "0" + remainingSeconds
    }
    // console.log(remainingMinutes)
    if ((remainingMinutes) < 0) {
      clearInterval(intervalRef.current);
      handleConfetti();
      setElapsedTime(0);
      setIsRunning(false);
    }

    if (remainingMinutes < 10){
      remainingMinutes = "0" + remainingMinutes
    }
    return `${remainingMinutes} : ${remainingSeconds}`
  }
  

  function handleTimerClick(event){
    if (event.target.innerText === "Start"){
      event.target.innerText = "Give Up"
      //start timer till minutes ===0 and seconds ===0
      //make the button as "Start" again
      start()
      //show confetti | placard of appreciation
      
      //award pomo coins!!
      // awardPomoCoins()
    }
    else{
      event.target.innerText = "Start"
      //Reset timer to 0 and show placard of encouragement (kill that interval instance)
      reset()
    }
  }
  
  return (
    <>
      <div className="stopwatch">
        {!gaveUp && showConfetti && <ReactConfetti/>}
        <Placard showPlacard = {showPlacard} gaveUp = {gaveUp} handlePlacardClose = {handlePlacardClose}/>
        <button className={isRunning ? 'hideBtns': 'timerBtns'} onClick={handleDecrease}>&lt;</button>
        <div className="timer-container">
          <div className="timer">
            <img className='timer-image' src={minutes == 120 ? goku : (minutes >= 90 ? adult : (minutes >= 60 ? teenager : (minutes >= 30 ? preteen :baby)))} alt="this is a baby image" />

            <div className="remaining">
              <p>{isRunning ? formatTime() : (minutes > 10 ? minutes : "0" + minutes) + " : 00"}</p>  
            </div>  
          </div>
        <button className='timer-button' onClick={handleTimerClick}>{isRunning ? "Give Up" : "Start"}</button>
        </div>
        <button className={isRunning ? 'hideBtns': 'timerBtns'} onClick={handleIncrease}>&gt;</button>
      </div>
    </>
  )
}

export default Stopwatch