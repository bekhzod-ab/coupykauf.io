import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
        <h1>CoupyKauf</h1>
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/about"> About us</Link>
            <Link to="/vouchers"> Find Voucher</Link>
            <Link to="/faq"> FAQ </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/signup"> Sign up </Link>
            <Link to="/login"> Log in </Link>
        </div> 
        </nav>
    )
}

export default Navbar