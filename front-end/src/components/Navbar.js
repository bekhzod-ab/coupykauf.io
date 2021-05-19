import {Link} from "react-router-dom"


import {useContext as fromFlashcard} from "react"
import SellerContext from "../sellerContext/useContext.js"
import logo from "../imgs/coupyKauf-logo.png"
import burgermenu  from "../imgs/menu.png"
import React, {useState} from "react";
import "./Navbar.css";



const Navbar = () => {


    const {loggedIn,setLoggedIn} = fromFlashcard(SellerContext);
    function logOut(){
        setLoggedIn(false)
    };
    const [showMobileNav, setShowMobileNav] = useState(false)
    function toggleMenu(){
        setShowMobileNav(!showMobileNav);
    };


    return (
        <header>
                <Link to="/" className="link logo-container"> 
                <img src={logo} className="logo" alt="logo"/> 
                <h2>CoupyKauf</h2>
                </Link>
                <img  src={burgermenu} onClick={toggleMenu} id="burgerButton" />
            {/* because of eventbubbling (When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.)
                we just need to set this onClick event once.
                with setShowMenu(false) we make the Navbar close, when we click on a Link*/}
            
            <nav onClick={() => setShowMobileNav(false)} className={`navbar ${showMobileNav ? "open" : ""}`} >
                
                    {/* s */}
                
                    

                {/* <div className="links"> */}
                    <div className="navnav">
                    <Link to="/" className="link"> Home </Link>
                    <Link to="/about" className="link"> About us</Link>
                    <Link to="/vouchers" className="link"> Find Voucher</Link>
                    </div>
                    <div className="nav-end">
                    {loggedIn ?
                    <><span> <Link to="/profile" className="link"> My profile </Link></span>
                    <button onClick={logOut}>log out</button> </> :
                    <>{/* we use the react fragment to display two elements like one (cant use a ternary on two elements)*/}
                    <Link to="/signup" className="link"> Sign up </Link> 
                    <Link to="/login" className="link"> Log in </Link> </>}
                    </div>
                    {/* </div> */}
                {/* </div>  */}
                
            </nav>
        </header>
    )
}


export default Navbar