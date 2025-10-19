import "./Card.css";
import tempImage from "./assets/image.png"
function Card(props){
  return (
    <div className="card">
      <img src={tempImage} alt="This is some alt image" className = "card-image" />
      <h1 className = "card-heading">{props.heading}</h1>
      <p className = "card-description">{props.desctiption}</p>
    </div>
  )
}

Card.defaultProps={
  src : {tempImage},
  heading : "Heading",
  desctiption :"random shit!"
}


export default Card;