import {useState, useEffect} from "react";
import axios from "axios"; 
import ProfileDetailsForm from "../components/ProfileDetailsForm"
import ProfileDetails from "../components/ProfileDetails"

const ProfilePage = () => {
const [showForm, setShowForm] = useState(false)

    return (
        <div className="profile-page"> 
           
            <div className="profile-nav"> 
                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                <button> Profile Settings</button>
                <button> Account Settings </button>
            </div>
            {showForm? <ProfileDetailsForm showForm={showForm} setShowForm={setShowForm}/> : <ProfileDetails showForm={showForm} setShowForm={setShowForm}/>} 
            </div> 
    )
}



export default ProfilePage
