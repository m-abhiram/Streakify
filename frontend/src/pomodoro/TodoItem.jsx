import bin from "../assets/bin.png"



function TodoItem(props){
  function handleDelete(){
    // console.log("button clicked!")
    props.handleChangeList(props.item.id) 
  }

  return (
    <div className="todo-item">
      <p className="item-text1">{props.item.taskName} <i>({props.item.estimatedTime})</i></p>  
      {props.completed ? "" : <img className = "item-bin-img" src={bin} onClick={handleDelete}/>}
    </div>
  )
}

export default TodoItem;