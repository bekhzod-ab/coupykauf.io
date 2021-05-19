import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import VouchersPage from "./pages/VouchersPage";
/* import Purchase from "./pages/PurchaseVoucher" */
//import Purchase from "./pages/PurchaseVoucher"
import ProfilePage from "./pages/ProfilePage"
import FaqPage from "./pages/FaqPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import './index.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useState, useEffect } from "react"
import SellersProvider from "./sellerContext/sellersContextProvider.js"
import AccountDetails from "./components/AccountDetails";
import PurchaseVoucher from "./pages/PurchaseVoucher.js"


function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [Stoken, setStoken] = useState("")
  useEffect(() => {
    console.log("wazap")
    const Stoken = localStorage.getItem("Stoken")
    setStoken(Stoken) 
}, [])
console.log(Stoken)
  

  return (
    
    <SellersProvider>

      <Router>
        <div className="app">
          <Navbar/> {/* exporting the variables to the navbarcomponent */}
          <div className="wrapper"> {/* this is for fixing the footer to the bottom */}
            <Switch> 
                <Route exact path="/"> <HomePage/> </Route>
                <Route exact path="/about"> <AboutUsPage/> </Route>
                <Route exact path="/vouchers"> <VouchersPage/> </Route>
                <Route exact path="/vouchers/:company_name"><PurchaseVoucher/></Route>
              {/*   <Route exact path="/vouchers/:articleNo"><Purchase/></Route> */}
                <Route exact path="/faq"> <FaqPage/> </Route>
                <Route exact path="/contact"> <ContactPage/> </Route>
                <Route exact path="/signup"> <SignUpPage/> </Route>
                <Route exact path="/login"> <LoginPage Stoken={Stoken} setStoken={setStoken}/> </Route>
                <Route exact path="/login/:username"></Route> {/* create dynamic profile route using params which will contain username */} 
                {/* this route is just for development purposes: */}
                <Route exact path="/profile"> <ProfilePage Stoken={Stoken}/> </Route>
            </Switch>
          </div>
        <Footer className="footer"/>
        </div>
      </Router> 

    </SellersProvider>
      
  );
}

export default App;
