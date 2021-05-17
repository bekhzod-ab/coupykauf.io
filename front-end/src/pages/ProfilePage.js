import {useState} from "react";
import {Link, useHistory} from "react-router-dom"
 
import ProfileDetailsForm from "../components/ProfileDetailsForm"
import ProfileDetails from "../components/ProfileDetails"
import AccountDetails from "../components/AccountDetails"

const ProfilePage = ({Stoken}) => {
const [showForm, setShowForm] = useState(false)
/* let history = useHistory();
const renderAccountDetails = (e) => {
    e.preventDefault()
    history.push("/profile/account")
} */

    return (
        <div className="profile-page"> 
           
            <div className="profile-nav"> 
                <button className="btnHP"> Profile Settings</button>
                <button className="btnHP"/*  onClick={renderAccountDetails} */> Account Settings </button>
                {/* 
                FOR TUESDAY: 
                1. Give accountDetails different route? 
                2. Save it in the same page as ProfileDetails 
                3. Other idea? 
                4. just change component depending on what is clicked, without adding route
                 */}
            </div>
            {showForm? <ProfileDetailsForm showForm={showForm} setShowForm={setShowForm} Stoken={Stoken}/> : <ProfileDetails showForm={showForm} setShowForm={setShowForm} Stoken={Stoken}/>} 
            </div> 
    )
}



export default ProfilePage
