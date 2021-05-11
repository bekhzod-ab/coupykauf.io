import {Link} from "react-router-dom"
import {useContext as fromFlashcard} from "react"
import SellerContext from "../sellerContext/useContext.js"





const Navbar = () => {


    const {loggedIn,setLoggedIn} = fromFlashcard(SellerContext);
    function logOut(){
        setLoggedIn(false)
    }






    return (
        <nav className="navbar">
            {/*            maybe this shouldnt be h1              */}
            <h2>CoupyKauf</h2> 
        {/* <div className="links"> */}
            <div className="navnav">
            <Link to="/" className="link"> Home </Link>
            <Link to="/about" className="link"> About us</Link>
            <Link to="/vouchers" className="link"> Find Voucher</Link>
            </div>
            <div>
            {loggedIn ?
            <><span> <Link to="/profile" className="link"> My profile </Link></span>
            <button onClick={logOut}>log out</button> </> :
            <>{/* we use the react fragment to display two elements like one (cant use a ternary on two elements)*/}
            <Link to="/signup" className="link"> Sign up </Link> 
            <Link to="/login" className="link"> Log in </Link> </>}
            </div>
            
        {/* </div>  */}
        </nav>
    )
}

export default Navbar