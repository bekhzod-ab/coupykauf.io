import {useState, useEffect} from "react";
import axios from "axios"; 
import {useHistory} from "react-router-dom"
import  Cookies  from "universal-cookie"
import SellerContext from "../sellerContext/useContext.js"
import {useContext} from "react"

const LoginPage = ({Stoken, setStoken}) => {
    const { setLoggedIn } = useContext(SellerContext)
    const cookies = new Cookies();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()
    useEffect(() => {
        const Stoken = localStorage.getItem("Stoken")
        setStoken(Stoken) 
    }, [setStoken])
    

    // this handler will send the submitted values from the form to the backend: 
    const submitHandler = (e) => {
        e.preventDefault();
        // For now, we are using localhost, I will need to change the route later
        axios.post("http://localhost:3333/company/login", {  
        // inside the axios post req, we are passing the values defined in the useState hooks, as a second argument: 
            email, password, Stoken
        })
        // we use history method here, and push the route where we want to redirect after login: 
        //when we have the profile page, we will redirect there:
        .then(()=> {
            setLoggedIn(true)
            history.push("/profile")}) 
    }
    return (
        <div className="login-page"> 
            {/* we are calling the handler here in the whole form upon submitting it*/}
            <form onSubmit={submitHandler}>   
            <fieldset className="fieldset"> 
                <legend>Log in:</legend>
                <label>Email : </label>
                                                                                {/* we are giving the input field value "email" because we want to use it later using useState*/}
                                                                                {/* we then create an event to set the new value to the input field */}
                <input type="email" placeholder="Enter Username" name="username" required value={email} onChange={(e)=> {setEmail(e.target.value)}}/> 
                <br/>
                <label>Password : </label>
                <input type="password" placeholder="Enter Password" name="password" required value={password} onChange={(e)=> {setPassword(e.target.value)}}/>  
                <br/>
                <button type="submit">LOG IN</button>   
            </fieldset>
            </form>     
        </div> 
        
    )
}

export default LoginPage