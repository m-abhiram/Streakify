import "./Footer.css"
import FooterImage from "./assets/Footer.jpg"
function Footer(){
  return (
    <>
      <div className="footer">
        <h1 className="whyChooseUs">Why Choose Streakify?</h1>
        <div className="textContainer">
          <div className="text">
            <p className = "text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius omnis velit blanditiis quasi quidem inventore magnam a quam provident explicabo molestiae vero at ipsum autem, quibusdam excepturi perspiciatis laboriosam deserunt illum alias aut magni. Odit dolores, voluptas vitae beatae illum facilis. Earum magnam adipisci ad et laborum iure libero ea perspiciatis in ab quas at temporibus, similique soluta amet unde ipsum quibusdam, tenetur sequi officia? Laborum nobis obcaecati blanditiis officiis rem sunt magni quisquam et mollitia accusamus ad hic animi, deserunt laudantium nulla fuga ipsum repellat qui ipsam recusandae iste. Assumenda autem libero dolores ducimus fuga. Consectetur veniam omnis quis.
              <br />
              <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, omnis ipsa libero quasi unde dolorem eum excepturi ipsum ab adipisci molestiae sapiente veritatis repudiandae soluta. Labore modi minus explicabo culpa doloribus aperiam id et, magni tenetur nihil totam ipsam dolore odit atque! Numquam, ipsa officia iste, iusto quam quidem veniam ab modi deserunt ducimus expedita aperiam libero, voluptatum culpa id illum minus illo blanditiis porro architecto quod! Quo aliquam ipsam quasi, cupiditate expedita distinctio totam odit praesentium eaque quos dignissimos voluptate tenetur libero exercitationem explicabo consequuntur id incidunt fugit, molestiae, aspernatur dolores aliquid nostrum vitae. Ipsum, neque facere. Unde, laudantium?
            </p>
          </div>
          <img src={FooterImage} className="footerImage" alt="an-attractivee-image" />
          
        </div>
      </div>
    </>
  )
}

export default Footer;