import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"; /* this is for redirecting after signup  */


const SignUpPage = () => {
    
        /* creating the variables to use in the form */
        const [company, setCompanyName] = useState("");
        const [reg_number, setRegistration] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const history = useHistory(); /* this is for redirecting */
    
        const handleSubmit = (e) => {
            e.preventDefault(); /* this is to prevent the Data from "dissapearing" after the Button gets clicked */
            const companyProfile = { company, reg_number, email, password} /* destructuring all the values in one variable object */
            
            /* pushing the data stored in "companyProfile" to an endpoint, then redirecting to the loginpage */
            axios.post("http://localhost:3333/company/signup", companyProfile)
            .then( () => {
                history.push("/login")
            } )
            
        }

    return (
        
        <div className="signup-page"> 
            <h2> Welcome to the Sign Up Page </h2>
            <form onSubmit={handleSubmit}> {/* onSubmit the handleSubmit function is executed */}
                <label htmlFor="name">Company Name:</label>
                <input 
                type="text" 
                required 
                value={company} 
                onChange={(e) => setCompanyName(e.target.value)} /* execute set... on every Change in tthe input field */
                /> 
                <label htmlFor="registration">Registration Number:</label>
                <input type="number" 
                required
                value={reg_number} 
                onChange={(e) => setRegistration(e.target.value)} /* execute set... on every Change in tthe input field */
                /> 
                <br/>
                <label htmlFor="email">email:</label>
                <input type="email" 
                required
                value={email} 
                onChange={(e) => setEmail(e.target.value)} /* execute set... on every Change in tthe input field */
                /> 
                <br/>
                <label htmlFor="password">password:</label>
                <input 
                type="password" 
                required
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/>  {/* execute set... on every Change in tthe input field  */}
                <input type="submit" value="Submit"/>
                <br/>
                
            </form>
        </div> 
    )
}


export default SignUpPage