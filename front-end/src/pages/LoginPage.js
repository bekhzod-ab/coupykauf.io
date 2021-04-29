import {useState} from "react";
import axios from "axios"; 
import {useHistory} from "react-router-dom"

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()

    // this handler will send the submitted values from the form to the backend: 
    const submitHandler = (e) => {
        e.preventDefault();
        // For now, we are using localhost, I will need to change the route later
        axios.post("http://localhost:3333/company/login", {  
        // inside the axios post req, we are passing the values defined in the useState hooks, as a second argument: 
            email, password
        })
        // we use history method here, and push the route where we want to redirect after login: 
        //when we have the profile page, we will redirect there:
        .then(()=> {history.push("/")}) 
    }
    return (
        <div className="login-page"> 
            <h2> Welcome to the Login Page </h2>
            {/* we are calling the handler here in the whole form upon submitting it*/}
            <form onSubmit={submitHandler}>   
                <label>Email : </label>   
                                                                                {/* we are giving the input field value "email" because we want to use it later using useState*/}
                                                                                {/* we then create an event to set the new value to the input field */}
                <input type="email" placeholder="Enter Username" name="username" required value={email} onChange={(e)=> {setEmail(e.target.value)}}/> 
                
                <label>Password : </label>   
                <input type="password" placeholder="Enter Password" name="password" required value={password} onChange={(e)=> {setPassword(e.target.value)}}/>  

                <button type="submit">Login</button>   
            </form>     
        </div> 
        
    )
}

export default LoginPage