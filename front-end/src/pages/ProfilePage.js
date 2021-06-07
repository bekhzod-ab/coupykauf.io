import {useState} from "react";
import {Link, useHistory} from "react-router-dom"
 
import ProfileDetailsForm from "../components/ProfileDetailsForm"
import ProfileDetails from "../components/ProfileDetails"
import AccountDetails from "../components/AccountDetails"

const ProfilePage = () => {
const [showAccountSettings, setShowAccountSettings] = useState(true)

    return (
        <div className="profile-page"> 
           
            <div className="profile-nav"> 
                <button className="btnHP" onClick={() => setShowAccountSettings(false)}> Profile Details</button>
                <button className="btnHP" onClick={() => setShowAccountSettings(true)}> Account Settings </button>
            </div> 
            {showAccountSettings? <AccountDetails/> : <ProfileDetails/>}
         
            </div> 
    )
}



export default ProfilePage
