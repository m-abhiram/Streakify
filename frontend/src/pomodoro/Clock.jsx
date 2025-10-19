import { useEffect,useState } from 'react';

function Clock() {
  const [time,setTime] = useState(new Date())
  useEffect(() => {
    const interval = setInterval(()=>{
      setTime(new Date());
    },1000);
    return () => clearInterval(interval);
  },[])

  function getTime(){
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meredium = hours >= 12  ? "PM" : "AM";
    hours = hours % 12 || 12
    hours = hours < 10 ? "0"+hours : hours
    minutes = minutes < 10 ? "0"+minutes : minutes
    seconds = seconds < 10 ? "0"+seconds : seconds
    return `${hours}:${minutes}:${seconds} ${meredium}`
  }

  return (
    <>
      <div className="clock">
        <div className="clock-container">
          <span className = "clock-timer">{getTime()}</span>
        </div>
      </div>
    </>
  )
}

export default Clock