import {useState, useEffect} from "react";
import axios from "axios"; 

const ProfileDetails = ({showForm, setShowForm}) => {
    const [details, setDetails] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3333/company/profile")
        .then((result)=> {
            console.log(result)
            setDetails(result.data)
        })
        .catch((err) => {console.log(err.message)})
    }, [])

    return (
        <div className="profile-page"> 
           
           <h2> PROFILE DETAILS</h2>
        
            <li>Company name: </li>
            <li>Company address: </li>
            <button onClick={(e)=>setShowForm(true)}> Edit </button>
            </div> 
    )
}



export default ProfileDetails
