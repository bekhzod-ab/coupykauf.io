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
                <figcaption><b>Bekhzod Abdulaev</b></figcaption>
                <figcaption>Back-end Developer</figcaption>
                <figcaption>Tech Lead</figcaption>
                <figcaption>QA</figcaption>
                <figcaption><a href="https://github.com/bekhzod-ab"><FaGithub className="icon" /></a></figcaption>
            </figure>
            <figure>
                <img src={Sandra} alt='missing' />
                <figcaption> <b>Sandra Almoli</b></figcaption>
                <figcaption>Front-end Developer</figcaption>
                <figcaption>Product Owner</figcaption>
                <figcaption>UI/UX Design</figcaption>
                <figcaption><a href="https://github.com/Almolis"><FaGithub className="icon" /></a></figcaption>
            </figure>
            <figure>
                <img src={Karl} alt='missing' />
                <figcaption><b>Karl Langer</b></figcaption>
                <figcaption>Front-end Developer</figcaption>
                <figcaption>UI/UX Design</figcaption>
                <figcaption>Responsive Design</figcaption>
                <figcaption><a href="https://github.com/karllanger"><FaGithub className="icon" /></a></figcaption>
            </figure>
            </div>

            <div> 
                <h3>BACKGROUND</h3>
                <p>We are three graduates from the Digital Career Institute, where we got training in Full-Stack Web Development. All three of us started this course without any previous experience in Web Development. By the end of the course we had acquired various technical skills including HTML, CSS, JavaScript and React, as well as NodeJS and MongoDB.</p>
                <h3>PROJECT IDEA</h3>
                <p>The COVID crisis inspired us to build a tool for local businesses that would help them survive in times like these. We wanted to make an app where these small businesses can offer vouchers to customers which can be redeemed at a later date. This way, people's favorite local businesses can earn some revenue during closures and customers can help make that happen. Another use of this app would be selling gift-cards during normal times, previously only possible with tech giants such as Amazon. Regular customers can further support these businesses by buying gift-cards for their friends and family from their favorite hairdresser, cafe, independent cinema etc.</p>
                <h3>THE PROCESS</h3>
                <p>Firstly, we wanted to develop an intuitive app where customers and businesses would have to take no more than 3-4 steps to achieve their goal. For this, we first started coming up with the UX design using Figma. Then, we defined the bigger, weekly goals, according to which we defined our roles and smaller, daily tasks using Trello. We checked and coordinated our work on a daily basis, and supported each other on difficult tasks regardless of our main role.</p>
            </div>
        </div>
    )
}
export default AboutUsPage;