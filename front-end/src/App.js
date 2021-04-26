import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import VouchersPage from "./pages/VouchersPage";
import Purchase from "./pages/PurchaseVoucher"
import FaqPage from "./pages/FaqPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import './index.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    
    <Router>
       <div className="app">
         <Navbar/> 
         <div className="wrapper"> {/* this is for fixing the footer to the bottom */}
          <Switch> 
              <Route exact path="/"> <HomePage/> </Route>
              <Route exact path="/about"> <AboutUsPage/> </Route>
              <Route exact path="/vouchers"> <VouchersPage/> </Route>
              <Route exact path="/vouchers/:articleNo"><Purchase/></Route>
              <Route exact path="/faq"> <FaqPage/> </Route>
              <Route exact path="/contact"> <ContactPage/> </Route>
              <Route exact path="/signup"> <SignUpPage/> </Route>
              <Route exact path="/login"> <LoginPage/> </Route>
              <Route exact path="/login/:username"></Route> {/* create dinamic profile route using params which will contain username */} 
          </Switch>
        </div>
       <Footer className="footer"/>
       </div>
    </Router> 

      
  );
}

export default App;
