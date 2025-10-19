import { useState } from 'react';
import TodoItem from "./TodoItem";
import Completed from './Completed';
import AddItem from './AddItem';

function Todo(){
  const [listOfUnfinishedTasks , setUnfinishedList] = useState([])
  const [listOfFinishedTasks,setFinishedList] = useState([])

  function handleChangeList(id){
    console.log("this function was called wiht the index :",id);
    for (let item of listOfUnfinishedTasks){
      if (item.id === id){
        item.completed = true
        setFinishedList([...listOfFinishedTasks,item])
        console.log(listOfFinishedTasks)
      }
    }
    setUnfinishedList (listOfUnfinishedTasks.filter((_,i) => _.id != id)) 
    // console.log("updated List :",listOfUnfinishedTasks);
  }
  
  function addItem(obj){
    if (obj.taskName !== "" && obj.estimatedTime !==""){ 
      console.log("function called for item :",obj)
      setUnfinishedList([...listOfUnfinishedTasks,obj])
      console.log("unfinishedTasks :",listOfUnfinishedTasks)
    }
  }

  return(
    <>
      <div className="Todolist">
        <div className="todoTop">
          To-Do List
        </div>
        <div className="todobody">
          <div className="pending">
            <h1 style={{textAlign : "center",fontFamily:"Arial",marginTop : "10px",color : "rgb(247, 95, 72)"}}>Pending Tasks</h1>
            <div className="todo-items">
              {listOfUnfinishedTasks.map((item) => <li key = {item.id}style={{listStyle : "none"}}><TodoItem item = {item} handleChangeList = {handleChangeList}/></li>)}
            </div>
          </div>
        </div>
        <div className="completed">
          <h1 style={{textAlign : "center",fontFamily:"Arial",marginTop : "10px",color : "rgb(45, 186, 94)"}}>Completed Tasks</h1>
            <div className="todo-items">
              {listOfFinishedTasks.map((item) => <li key = {item.id} style={{listStyle : "none"}}><Completed item = {item}/></li>)}
            </div>
        </div>
        <div className="additemContainerInTodo">
          <AddItem addItem = {addItem} classname = "addTask"/>
        </div>
      </div>
    </>
  )
}

export default Todo;