import {useState, useEffect} from "react";
import axios from "axios"; 

const ProfileDetails = ({showForm, setShowForm, Stoken}) => {
    const [details, setDetails] = useState([])
    console.log(Stoken)
    useEffect(()=>{
        axios.get("http://localhost:3333/company/profile", {Stoken})
        .then((result)=> {
            console.log(result)
            setDetails(result.data)
        })
        .catch((err) => {console.log(err.message)})
    }, [showForm])

    return (
        <div className="profile-page"> 
           
           <h2> PROFILE DETAILS</h2>
        
            <li>Company name:</li>
            <li>Company address: </li>
            <img src={details.prifleimageUrl}></img>
            <button onClick={()=>setShowForm(true)}> Edit </button>
            </div> 
    )
}



export default ProfileDetails
