import {Link} from "react-router-dom";
import "./mobileNav-style.css"
import burgermenu  from "../imgs/menu.png"
import React, {useState} from "react"

const MobileNav = ({ loggedIn, setLoggedIn }) => {
    /* const burgerButton = document.getElementById("burgerButton"); */
    const hiddenMenu = document.getElementById("hiddenMenu");
    /* burgerButton.addEventListener("click", showMenu); */
    const [showMobileNav, setShowMobileNav] = useState(false)
    function toggleMenu(){
        setShowMobileNav(!showMobileNav);
    };

    function logOut(){
        setLoggedIn(false)
    }
    
    return (
        <>
        <img src={burgermenu} onClick={toggleMenu} id="burgerButton" />
        {/* because of eventbubbling (When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.)
            we just need to set this onClick event once.
          with setShowMenu(false) we make the Navbar close, when we click on a Link*/}
        <nav onClick={() => setShowMobileNav(false)} className={`mobileNavbar ${showMobileNav ? "open" : ""}`}>{/* when showmobileNav State is true it will give ther class open */}

            
        
        
            
        {/* <div className="links"> */}
            <div className="navnav">
            <Link to="/" className="link" > Home </Link> <br/>
            <Link to="/about" className="link"> About us</Link> <br/>
            <Link to="/vouchers" className="link"> Find Voucher</Link>
            </div>
            <div>
            {loggedIn ?
            <><span> <Link to="/profile" className="link"> My profile </Link></span>
            <button onClick={logOut} className="logout">log out</button> </> :
            <>{/* we use the react fragment to display two elements like one (cant use a ternary on two elements)*/}
            <Link to="/signup" className="link"> Sign up </Link> <br/>
            <Link to="/login" className="link"> Log in </Link> </>}
            </div>
            
        {/* </div>  */}
        </nav>
        </>
    )}

    export default MobileNav;


    