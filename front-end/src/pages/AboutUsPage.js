import "./aboutus.css"
import Sandra from "../imgs/sandra.jpg"
import Bek from "../imgs/BEK.jpg"
import Karl from "../imgs/KARL.jpg"
import {FaGithub} from 'react-icons/fa'

const AboutUsPage = () =>{
    return ( 
        <div className="aboutus-page">
            <h2>ABOUT US</h2>
          
            <div className="images"> 
             <h3>MEET THE TEAM</h3>
            <figure>
                <img src={Bek} alt='missing' />
                <figcaption>Bekhzod Abdulaev</figcaption>
                <figcaption>Back-end Developer</figcaption>
                <figcaption><a href="https://github.com/bekhzod-ab"><FaGithub className="icon" /></a></figcaption>
            </figure>
            <figure>
                <img src={Sandra} alt='missing' />
                <figcaption>Sandra Almoli</figcaption>
                <figcaption>Front-end Developer</figcaption>
                <figcaption><a href="https://github.com/Almolis"><FaGithub className="icon" /></a></figcaption>
            </figure>
            <figure>
                <img src={Karl} alt='missing' />
                <figcaption>Karl Langer</figcaption>
                <figcaption>Front-end Developer</figcaption>
                <figcaption><a href="https://github.com/karllanger"><FaGithub className="icon" /></a></figcaption>
            </figure>
            </div>

            <div> 
                <h3>BACKGROUND</h3>
                <p>We are three graduates from the DCI .... </p>
                <h3>PROJECT IDEA</h3>
                <p>The COVID crisis inspired us to build a tool for local businesses that would help them survive in times like these</p>
                <h3>THE PROCESS</h3>
                <p>The tools that we used. The technologies.... </p>
            </div>
        </div>
    )
}
export default AboutUsPage;