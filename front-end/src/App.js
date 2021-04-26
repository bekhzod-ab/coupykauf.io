import Navbar from "./Navbar";
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import VouchersPage from "./pages/VouchersPage";
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
         <div className="wrapper">
          <Switch> 
              <Route exact path="/"> <HomePage/> </Route>
              <Route exact path="/about"> <AboutUsPage/> </Route>
              <Route exact path="/vouchers"> <VouchersPage/> </Route>
              <Route exact path="/faq"> <FaqPage/> </Route>
              <Route exact path="/contact"> <ContactPage/> </Route>
              <Route exact path="/signup"> <SignUpPage/> </Route>
              <Route exact path="/login"> <LoginPage/> </Route>
          </Switch>
        </div>
       <Footer className="footer"/>
       </div>
    </Router> 

      
  );
}

export default App;
