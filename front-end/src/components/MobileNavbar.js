import {Link} from "react-router-dom";
import "./mobileNav-style.css"
import burgermenu  from "../imgs/menu.png"
import React, {useState} from "react"

const MobileNav = ({ loggedIn, setLoggedIn }) => {
    /* const burgerButton = document.getElementById("burgerButton"); */
    const hiddenMenu = document.getElementById("hiddenMenu");
    /* burgerButton.addEventListener("click", showMenu); */
    const [showMobileNav, setShowMobileNav] = useState(true)
    function showMenu(){
        if(showMobileNav) {
            hiddenMenu.style.display = "block";
            setShowMobileNav(false)
        }
        else if(!showMobileNav){
            hiddenMenu.style.display = "none";
            setShowMobileNav(true);
        }
    };

    function logOut(){
        setLoggedIn(false)
    }
    
    return (
        
        <nav className="mobileNavbar">

            <h2>CoupyKauf</h2> 
            
            <img src={burgermenu} onClick={showMenu} id="burgerButton" />
        
            <div id="hiddenMenu">
        {/* <div className="links"> */}
            <div className="navnav">
            <Link to="/" className="link"> Home </Link> <br/>
            <Link to="/about" className="link"> About us</Link> <br/>
            <Link to="/vouchers" className="link"> Find Voucher</Link>
            </div>
            <div>
            {loggedIn ?
            <><span> <Link to="/profile" className="link"> My profile </Link></span>
            <button onClick={logOut}>log out</button> </> :
            <>{/* we use the react fragment to display two elements like one (cant use a ternary on two elements)*/}
            <Link to="/signup" className="link"> Sign up </Link> <br/>
            <Link to="/login" className="link"> Log in </Link> </>}
            </div>
            </div>
        {/* </div>  */}
        </nav>
    )}

    export default MobileNav;


    /* 
    show both navbars
    mobile: display: none 
    add a mediaquery: maxwidth 
    implement burgermenu for mobile(maybe as a component?)
    */