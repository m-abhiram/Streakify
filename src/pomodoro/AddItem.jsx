import {useState} from 'react';
import { v4 } from 'uuid';

function AddItem(props){
  const [task,setTask] = useState("")
  const [time,setTime] = useState("")
  function handleAddItem(){
    let item = {taskName:task, estimatedTime:time, id: v4() }
    console.log("item :",item)
    props.addItem(item)
    setTask("")
    setTime("")
  }

  function handleNameChange(event){
    setTask(t => event.target.value)
  }
  function handleTimeChange(event){
    setTime(t => event.target.value)
  }


  return(
    <div className={props.classname}>
      <input type="text" className = "takeItemInputField" placeholder="Enter task" value = {task} onChange={handleNameChange}/>
      <input type="text" className = "takeItemInputField" placeholder="Estimated time" value = {time} onChange={handleTimeChange}/>
      <button className='addTaskBtn' onClick={handleAddItem}>Add</button>
    </div>
  )
}

export default AddItem;