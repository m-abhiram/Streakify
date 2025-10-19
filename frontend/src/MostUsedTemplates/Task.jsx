import React from 'react'
import bin from "../assets/bin.png"


function Task(props) {
  return (
    <div className="todo-item">
      <p className="item-text1">{props.item}</p>  
      <img className = "item-bin-img" src = {bin}/>
    </div>
  )

}

export default Task;