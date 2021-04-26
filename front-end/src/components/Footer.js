import {Link} from "react-router-dom"; /* do i have to do this here? */

const Footer = () => {
    return(
        <footer className="footer-style">
            <div>
            <Link className="faq">FAQ</Link></div>
            <div>
                <h3>Contact</h3>
                    <form action="post">
                        <label htmlFor="name">Name:</label>
                        <br/>
                        <input type="text"/> 
                        <br/>
                        <label htmlFor="email">Email:</label>
                        <br/>
                        <input type="email"/> 
                        <br/>
                        <label htmlFor="message">Message:</label>
                        <br/>
                        <input className="test" type="text"/> 
                        <br/>
                    </form>
            </div>
        </footer>
    )   
}

export default Footer;