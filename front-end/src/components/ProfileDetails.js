import {useState, useEffect} from "react";
import axios from "axios"; 
import "./profileDetails.css"
import ProfileDetailsForm from "./ProfileDetailsForm";
import { FaFacebook, FaInstagram } from "react-icons/fa"
import voucher from "../imgs/10eur.jpg"
 // import picture from "../../../back-end/images/sandra@example.com/me.jpeg"


const ProfileDetails = () => {
    const [showForm, setShowForm] = useState(false); 
    const [details, setDetails] = useState([])
    // console.log(Stoken)
    useEffect(()=>{
        axios.get("http://localhost:3333/company/profile")
        .then((result)=> {
            console.log(result)
            setDetails(result.data)
        })
        .catch((err) => {console.log(err.message)})
    }, [])

    console.log(details.amountof10)
    
    const profileDetails = (
         
           
           <div className="profile-details">
           <h2> PROFILE DETAILS </h2>

            <p className="subheading">Company Name:<div>{details.company_name}</div></p> 
            <p className="subheading">Category:<div>{details.category}</div></p> 
            <p className="subheading">Address: <div>{details.address}</div></p>
            <p className="subheading">Phone Number: <div>{details.phone}</div></p>
            <p className="subheading">Links: 
            <div>
                <a target="_blank" href={details.links_1} rel="noreferrer"><FaFacebook className="icon" /></a> 
                <a target="_blank" href={details.links_2} rel="noreferrer"> <FaInstagram className="icon"/> </a> 
               </div> 
            </p> 
            <p className="subheading">Description:</p>
            <p>{details.description}</p>
            <p className="subheading">Gallery:</p>
            <div className="gallery">
                <img src={details.gallery_Url1} alt="company"></img>
                <img src={details.gallery_Url2} alt="company"></img>
                <img src={details.gallery_Url3} alt="company"></img>
            </div>
            <p className="subheading">Vouchers:</p>
            <div className="voucher-container">
                    <div className="voucher">
                        <img src={voucher} width="50" alt="10eur"></img>
                         <p>Available vouchers: {details.amountof10}</p>
                    </div>
                    <div className="voucher">
                        <img src={voucher} width="50" alt="10eur"></img>
                        <p>Available vouchers: {details.amountof10}</p>
                    </div>
                    <div className="voucher">
                        <img src={voucher} width="50" alt="10eur"></img>
                        <p>Available vouchers: {details.amountof10}</p>
                    </div>
                </div>
            
                <div className="save-edit"> 
                    <button className="btnHP" onClick={()=>setShowForm(true)}> Edit </button>
                </div> 
                </div>
    )
    return (
        <>
           {!showForm? profileDetails : <ProfileDetailsForm details={details}/>}
        </>
    )
}



export default ProfileDetails
