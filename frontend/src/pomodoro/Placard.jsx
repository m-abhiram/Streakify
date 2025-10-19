import right from "../assets/right.png"
import wrong from "../assets/wrong.png"

function Placard(props){
  return (
    <div className = "placard" style = {props.showPlacard ? {display : "block"} : {display : "none"}}>
      <div className="top">
        <div className="greeting">{props.gaveUp ? <p style={{color :"red"}}>What went wrong?</p> : <p style={{color :"green"}}>Congratulations!</p>}</div>
        <button onClick={props.handlePlacardClose}>x</button>
      </div>
      <div className="placard-body">
        <div className="placard-img"><img src={props.gaveUp ? wrong : right}/></div>
        <div className="placard-text">{ props.gaveUp ? <p style={{color :"red"}}>You failed to finish your session</p> : <p style={{color :"green"}}>Congratulations on completing your session!!</p>}</div>
      </div>
    </div> 
  )
}

export default Placard