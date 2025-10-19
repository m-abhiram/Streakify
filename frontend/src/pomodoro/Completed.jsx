function Completed(props){
  return (
    <div className="todo-item-completed">
      <p className="item-text2">{props.item.taskName}</p>  
    </div>
  )
}

export default Completed;