import "./aboutus.css"
import Sandra from "../imgs/sandra.jpg"
import Bek from "../imgs/Bek.jpg"
import Karl from "../imgs/karl.jpeg"

const AboutUsPage = () =>{
    return ( 
        <div className="aboutus-page">
            <h2>ABOUT US</h2>
          
            <div className="images"> 
             <p>MEET THE TEAM</p>
            <figure>
                <img src={Bek} alt='missing' />
                <figcaption>Bekhzod Abdulaev</figcaption>
                <figcaption>Back-end Developer</figcaption>
            </figure>
            <figure>
                <img src={Sandra} alt='missing' />
                <figcaption>Sandra Almoli</figcaption>
                <figcaption>Front-end Developer</figcaption>
            </figure>
            <figure>
                <img src={Karl} alt='missing' />
                <figcaption>Karl Langer</figcaption>
                <figcaption>Front-end Developer</figcaption>
            </figure>
            </div>
        </div>
    )
}
export default AboutUsPage;