import { useEffect, useState } from 'react'
import { v4 } from 'uuid';
import TodoItem from "../pomodoro/TodoItem"
import AddItem from "../pomodoro/AddItem"
import ReactConfetti from 'react-confetti';

function DailyTodo() {
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
    }, [])
  
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
      //use a post request to backend saying that it was completed and add this to the completed_dates
      
    }
  
  }

  function addDailyItem(obj){
    if (obj.taskName !== "" && obj.estimatedTime !==""){
      const newDailyList = [...listOfDailyPendingTasks,obj]
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
    // Modify the value in the database so that it is not lost when we fetch it from the database
    
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
                <TodoItem key={item.id} item={item} handleChangeList={handleChangeDailyList}/>
              ))}
            </ul>
          </div>

          <div className="completedTasks">
            <p className="dailyHeading completed">Completed</p>
            <ul className="todo-items1">
              {listOfDailyCompletedTasks.map((item) => (
                <TodoItem key={item.id} item={item} handleChangeList={handleChangeDailyList}/>
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

