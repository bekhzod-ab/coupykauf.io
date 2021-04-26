import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
        <h1>CoupyKauf</h1>
        <div className="links">
            <Link to="/" className="link"> Home </Link>
            <Link to="/about" className="link"> About us</Link>
            <Link to="/vouchers" className="link"> Find Voucher</Link>
            <Link to="/signup" className="link"> Sign up </Link>
            <Link to="/login" className="link"> Log in </Link>
        </div> 
        </nav>
    )
}

export default Navbar