import React from 'react'
import Task from './Task'

function RenderTemplate(props) {
  // console.log(props.item)
  return (
    <div className="Todolist" style={{borderRadius : "20px"}}>
      <div className="todoTop">
        {props.item.templateName}
      </div>
      <div className="todobody">
        <div className="pending">
          {/* <h1 style={{textAlign : "center",fontFamily:"Arial",marginTop : "10px",color : "rgb(247, 95, 72)"}}>Pending Tasks</h1> */}
          <div className="todo-items">
            {props.item.tasks.map((item) => <li key={item.id} style={{listStyle : "none"}}>{<Task item = {item}/>}</li>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RenderTemplate