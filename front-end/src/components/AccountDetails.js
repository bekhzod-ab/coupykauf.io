import {useState, useEffect,} from "react";
import axios from "axios"; 




const AccountDetails = () => {
    const [credentials, setCredentials] = useState([])
    const [postRnumber, setPostRnumber] = useState("")
    const [postIban, setPostIban] = useState("")
    const [postBic, setPostBic] = useState("")
    const [edit, setEdit] = useState(true)

    const callingCredentials = useEffect(()=>{
        axios.get("http://localhost:3333/company/profile")
            .then((result)=> {
                console.log(result)
                setCredentials(result.data)
            })
            .catch((err) => {console.log(err.message)})
    }, [])

    function submitHandler(e) {
        e.prevenDefault()
        axios.post("http://localhost:3333/company/profile/payments",{postRnumber,postIban,postBic})
            .then(() => {
                setEdit(false)
                return callingCredentials})
            .catch((err) => console.log(err.message))

    }

    const state = {
        disabled : true
    }
    
    return (
        <div className="profile-page"> 
            <div className="account-details"></div>
                <h2>Account Details</h2>
                    <form onSubmit={submitHandler}>
                        <fieldset {...(edit? `${state.disabled}` : "")}>
                            <legend>Bank Credentials</legend>
                            <label for="fname">Registration number:</label><input type="text" id="fname"  placeholder={ edit? `${credentials.reg_number}` : null} onChange={(e) => {setPostRnumber(e.target.value)}} onFocus={()=> setEdit(false)}></input><br/><br/>
                            <label for="iban">IBAN:</label><input type="text" id="iban" value={credentials.IBAN} onChange={(e) => setPostIban(e.target.value)}></input><br/><br/>
                            <label for="bic">BIC:</label><input type="text" id="bic" value={credentials.BIC} onChange={(e) => setPostBic(e.target.value)}></input><br/><br/>
                            <input type="submit" value="save"/>
                        </fieldset>
                        <button>Edit</button>
                </form>
        </div>
          
    )
}



export default AccountDetails
