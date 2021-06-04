import {useState, useEffect, useContext}  from "react";
import axios from "axios"; 
import {useHistory} from "react-router-dom"; 
import SellerContext from "../sellerContext/useContext.js"




const AccountDetails = () => {
    
    const [postRnumber, setPostRnumber] = useState("")
    const [postIban, setPostIban] = useState("")
    const [postBic, setPostBic] = useState("")
    const [edit, setEdit] = useState(false)
    const history = useHistory()
    const {setLoggedIn} = useContext(SellerContext)

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

    function deleteProfile (e) {
        e.preventDefault()
        axios.delete("http://localhost:3333/company/profile/delete")
        .then(()=> {
            history.push("/")
            setLoggedIn(false)
            axios.get("http://localhost:3333/company/logout")})
        .catch((err) => console.log(err.message))
    }
    
    return (
        <div className="profile-page"> 
                <h2>ACCOUNT DETAILS</h2>
                    <form className="acc-form"onSubmit={submitHandler}>
                        <fieldset disabled = {!edit}>
                            <label className="subheading" for="fname">Registration number:</label><input type="text" id="fname" value={postRnumber}  onChange={(e) => {setPostRnumber(e.target.value)}}></input><br/><br/>
                            <label className="subheading" for="iban">IBAN:</label><input type="text" id="iban" value={postIban}  onChange={(e) => setPostIban(e.target.value)}></input><br/><br/>
                            <label className="subheading" for="bic">BIC:</label><input type="text" id="bic" value={postBic} onChange={(e) => setPostBic(e.target.value)}></input><br/><br/>
                           <input type="submit" value="SAVE" className="save"/> 
                        </fieldset> 
                        
                        <button className="btnHP" onClick={(e) => {e.preventDefault() ; setEdit(true)}}>Edit</button>
                </form>
            <div className="delete-acc"> 
                <button className="delete-btn" onClick={deleteProfile}>DELETE ACCOUNT</button>
            </div>
        </div>
          
    )
}



export default AccountDetails
