import {useState, useEffect,} from "react";
import axios from "axios"; 




const AccountDetails = () => {
    
    const [postRnumber, setPostRnumber] = useState("")
    const [postIban, setPostIban] = useState("")
    const [postBic, setPostBic] = useState("")
    const [edit, setEdit] = useState(false)

    const callingCredentials = () => {
        
        axios.get("http://localhost:3333/company/profile")
            .then((result)=> {
                console.log(result)
                setPostBic(result.data.BIC)
                setPostIban(result.data.IBAN)
                setPostRnumber(result.data.reg_number)
            })
            .catch((err) => {console.log(err.message)})
    }
    useEffect(callingCredentials,[])

    function submitHandler(e) {
        e.preventDefault()
        axios.post("http://localhost:3333/company/profile/payments",{postRnumber,postIban,postBic})
            .then(() => {
                setEdit(false)
                callingCredentials()})
            .catch((err) => console.log(err.message))

    }

    
    return (
        <div className="profile-page"> 
            <div className="account-details"></div>
                <h2>Account Details</h2>
                    <form onSubmit={submitHandler}>
                        <fieldset disabled = {!edit}>
                            <legend>Bank Credentials</legend>
                            <label for="fname">Registration number:</label><input type="text" id="fname" value={postRnumber}  onChange={(e) => {setPostRnumber(e.target.value)}}></input><br/><br/>
                            <label for="iban">IBAN:</label><input type="text" id="iban" value={postIban}  onChange={(e) => setPostIban(e.target.value)}></input><br/><br/>
                            <label for="bic">BIC:</label><input type="text" id="bic" value={postBic} onChange={(e) => setPostBic(e.target.value)}></input><br/><br/>
                            <input type="submit" value="save"/>
                        </fieldset>
                        <button onClick={(e) => {e.preventDefault() ; setEdit(true)}}>Edit</button>
                </form>
        </div>
          
    )
}



export default AccountDetails
