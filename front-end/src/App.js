import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import VouchersPage from "./pages/VouchersPage";
import  Cookies  from "universal-cookie"
import ProfilePage from "./pages/ProfilePage"
import FaqPage from "./pages/FaqPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import './index.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { useState, useContext } from "react"
import PurchaseVoucher from "./pages/PurchaseVoucher.js"
import SellerContext from "./sellerContext/useContext.js"
import Confirmation from "./pages/PurchaseConfirm.js"

function App() {
  const cookies = new Cookies();
  const {loggedIn} = useContext(SellerContext)
  const [Stoken, setStoken] = useState("")


const ProtectedRoute = (props) => {
  if (!loggedIn) return <Redirect to="/login" />
  return <Route {...props} />
};

  return (
    
    

      <Router>
          <Navbar/> {/* exporting the variables to the navbarcomponent */}
        <div className="app">
          <div className="wrapper"> {/* this is for fixing the footer to the bottom */}
            <Switch> 
                <Route exact path="/"> <HomePage/> </Route>
                <Route exact path="/about"> <AboutUsPage/> </Route>
                <Route exact path="/vouchers"> <VouchersPage/> </Route>
                <Route exact path="/vouchers/:company_name/:email"><Confirmation/></Route>
                <Route exact path="/vouchers/:company_name"><PurchaseVoucher/></Route>
                <Route exact path="/faq"> <FaqPage/> </Route>
                <Route exact path="/contact"> <ContactPage/> </Route>
                <Route exact path="/signup"> <SignUpPage/> </Route>
                <Route exact path="/login"> <LoginPage Stoken={Stoken} setStoken={setStoken}/> </Route>
                <Route exact path="/login/:username"></Route> {/* create dynamic profile route using params which will contain username */} 
                {/* this route is just for development purposes: */}
                
                <ProtectedRoute exact path="/profile"> <ProfilePage Stoken={Stoken}/> </ProtectedRoute>
                
            </Switch>
          </div>
        <Footer className="footer"/>
        </div>
      </Router> 

   
      
  );
}

export default App;
