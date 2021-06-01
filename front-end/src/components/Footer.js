import {Link} from "react-router-dom"; /* do i have to do this here? */
import {FaGithub} from "react-icons/fa"

const Footer = () => {
    return(
        <footer className="footer-style">
           <div> <a href="https://github.com/bekhzod-ab/coupykauf.io">  <FaGithub className="icon-footer link" /></a>
         
           <Link to="/about" className="link"> ABOUT US</Link>
           <p>Bekhzod Abdullaev  //  Sandra Almoli  //  Karl Langer</p>
           <p>&copy; 2021</p>
           </div>
        </footer>
    )   
}

export default Footer;