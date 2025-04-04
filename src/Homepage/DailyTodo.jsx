import { useState } from 'react'
import { v4 } from 'uuid';
import TodoItem from "../pomodoro/TodoItem"
import AddItem from "../pomodoro/AddItem"
import ReactConfetti from 'react-confetti';

function DailyTodo() {
  //fetch daily tasks from database
  const [listOfDailyPendingTasks,setListOfDailyPendingTasks] = useState([{taskName : "Daily leetcode problem",id : v4(),estimatedTime:"2hrs"},{taskName : "Excercise",id : v4(),estimatedTime:"30 min"},{taskName : "Meditate",id : v4(),estimatedTime:"15 min"}]);
  const [listOfDailyCompletedTasks,setListOfDailyCompletedTasks] = useState([]);
  const [showConfetti,setConfetti] = useState(false);
  
  function handleChangeDailyList(id){
    for (let item of listOfDailyPendingTasks){
      if (item.id === id){
        item.completed = true;
        setListOfDailyCompletedTasks([...listOfDailyCompletedTasks,item])
      }
    }
    setListOfDailyPendingTasks(listOfDailyPendingTasks.filter(item => item.id !== id))


    if (listOfDailyPendingTasks.length === 1 && listOfDailyCompletedTasks.length > 0){
      //Show confetti
      handleConfetti();
      // increment streak in the database so that it can reflect in the front-end

    }
  
  }

  function addDailyItem(obj){
    if (obj.taskName !== "" && obj.estimatedTime !==""){
      setListOfDailyPendingTasks([...listOfDailyPendingTasks,obj])
    }
    // Modify the value in the database so that it is not lost when we fetch it from the database
    
  }

  function handleConfetti(){
    setConfetti(true);
    setTimeout(()=>{
      setConfetti(false);
    },5000);
  }

  return (
    <div className='daily-todo'>
      {showConfetti && <ReactConfetti/>}
      <div className="daily-todoList">
        <div className="dailytodoheader">
          <h1 className="dailytodoheaderText">Daily Todos🔥🔥</h1>
        </div>
        <div className="pendingTasks">
          <p className="dailyHeading pending">PendingTasks</p>
          {listOfDailyPendingTasks.map((item) => <li style={{listStyle:"none",margin:"0px auto",width:"fit-content"}} key={item.id}><TodoItem item = {item} handleChangeList = {handleChangeDailyList}/></li>)}
        </div>
        <div className="completedTasks">
          <p className="dailyHeading completed">Completed</p>
          {listOfDailyCompletedTasks.map((item) => <li style={{listStyle:"none",margin:"0px auto",width:"fit-content"}} key={item.id}><TodoItem item = {item} handleChangeList = {handleChangeDailyList}/></li>)}
        </div>
        <AddItem classname = "daily-addTask" addItem = {addDailyItem}/>
      </div>
    </div>
  )
}

export default DailyTodo

