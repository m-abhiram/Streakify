import { useEffect, useState } from 'react'
import { v4 } from 'uuid';
import TodoItem from "../pomodoro/TodoItem"
import AddItem from "../pomodoro/AddItem"
import ReactConfetti from 'react-confetti';
import { differenceInDays } from "date-fns";


function DailyTodo() {
  const [showConfetti,setConfetti] = useState(false);
  const [habits,setHabits] = useState([]);
  const [dates,setDates] = useState({});
  const [listOfDailyPendingTasks,setListOfDailyPendingTasks] = useState([]);
  const [listOfDailyCompletedTasks,setListOfDailyCompletedTasks] = useState([]);
  const token = localStorage.getItem("token")
  useEffect(()=>{

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/getUserByID`,{
      method : "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify({token : token})
    }).then(async(response)=>{
      response = await response.json()
      return response
    }).then((data)=>{
      setListOfDailyPendingTasks(data.dailyHabits)
    })

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/habits`,{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({token : token})
    }).then(async(data)=>{
      data = await data.json()
      return data 
    }).then((data)=>{
      setHabits(data.habits)
    })
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/getLastDates`,{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({token : token})
    }).then(async(data)=>{
      data = await data.json()
      return data 
    }).then((data)=>{
      setDates(data.previousDates)
      // console.log("previosdates :",dates)
    })
  }, [])
  
  useEffect(() => {
    if (dates) {
      renderLists();
    }
  }, [dates]); // get prev dates

  
  function parseIndianDate(dateStr) {
    const [day, month, year] = dateStr.split("/");
    // console.log(`${year}-${month}-${day}`)
    return new Date(`${year}-${month}-${day}`); 
  }
  // working
  function renderLists(){
    let tempCompleted = []
    let tempPending = []
    for (let task of habits){
      // console.log(task)
      let now = new Date().toLocaleDateString();
      const completed = new Date(dates[task.taskName]);
      const formattedCompleted = completed.toISOString().split("T")[0]
      const uiDate = parseIndianDate(now)
      const days = differenceInDays(new Date(uiDate), new Date(formattedCompleted));
      if (days  == 0){
        tempCompleted.push(task)
      }
      else{
        tempPending.push(task)
      }
    }
    // console.log("completed :",tempCompleted)
    // console.log("Pending :",tempPending)
    setListOfDailyCompletedTasks(tempCompleted)
    setListOfDailyPendingTasks(tempPending)
    
  }
  
  function handleChangeDailyList(id){
    for (let item of listOfDailyPendingTasks){
      if (item.id === id){
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/updateHabitPreviousDates`,{
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({token : token, habit : item.taskName})
        })
        setListOfDailyCompletedTasks([...listOfDailyCompletedTasks,item])
      }
    }
    setListOfDailyPendingTasks(listOfDailyPendingTasks.filter(item => item.id !== id))


    if (listOfDailyPendingTasks.length === 1 && listOfDailyCompletedTasks.length > 0){
      handleConfetti();
    }
  
  }

  function addDailyItem(obj){
    if (obj.taskName !== "" && obj.estimatedTime !==""){
      const newDailyList = [...habits,obj]
      const token = localStorage.getItem("token")
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/addDailyHabit`,{
        method : "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body : JSON.stringify({newDailyList : newDailyList,token : token})
      })
      setListOfDailyPendingTasks([...listOfDailyPendingTasks,obj])
    }
    
  }

  async function handleConfetti(){
    setConfetti(true);
    setTimeout(()=>{
      setConfetti(false);
    },5000);
    
    const token = localStorage.getItem("token");
    
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/addPomocoins`,{
      method : "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify({token : token,increment : 10})
    })
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/incrementStreak`,{
        method : "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body : JSON.stringify({token : token})
      })
  }

  return (
    <div className="daily-todo">
      {showConfetti && <ReactConfetti />}
      <div className="daily-todoList">
        <div className="dailytodoheader">
          <h1 className="dailytodoheaderText" style={{borderBottom: "none"}}>Daily Todos</h1>
        </div>

        <div className="todo-sections">
          <div className="pendingTasks">
            <p className="dailyHeading pending">Pending</p>
            <ul className="todo-items1">
              {listOfDailyPendingTasks?.map((item) => (
                <TodoItem key={item.id} item={item} completed = {false} handleChangeList={handleChangeDailyList}/>
              ))}
            </ul>
          </div>

          <div className="completedTasks">
            <p className="dailyHeading completed">Completed</p>
            <ul className="todo-items1">
              {listOfDailyCompletedTasks?.map((item) => (
                <TodoItem key={item.id} item={item} completed = {true} handleChangeList={handleChangeDailyList}/>
              ))}
            </ul>
          </div>
        </div>

        <AddItem classname="daily-addTask" addItem={addDailyItem} />
      </div>
    </div>

  )
}

export default DailyTodo

