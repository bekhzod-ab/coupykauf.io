import {Link} from "react-router-dom"; /* do i have to do this here? */

const Footer = () => {
    return(
        <footer className="footer-style">
            <div><Link>Contact</Link></div>
            <div><Link>FAQ</Link></div>
        </footer>
    )
}

export default Footer;