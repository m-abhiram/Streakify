import Card from "./Card";


function Features(props){
  const list = props.listOfFeatures;
  const features = list.map(feature => <li><Card heading = {feature.heading} description = {feature.descripition}/></li>)
  return (
    <>
      <div className="features">
        <h1 className="feature-heading">Why Streakify Your Journey?</h1>
        <ul>{features}</ul>
      </div>
    </>
  )
}

export default Features;