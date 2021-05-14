import {useState, useEffect} from "react";
import axios from "axios"; 
import "./profileDetails.css"
// import picture from "../../../back-end/images/sandra@example.com/me.jpeg"


const ProfileDetails = ({setShowForm}) => {
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
    
    return (
        <div className="profile-page"> 
           
           <div className="profile-details">
           <h2> PROFILE DETAILS </h2>

            <p>Company Name: <span>{details.company_name}</span></p>
           <p>Category: <span>{details.category}</span></p>
           <p>Address: <span>{details.address}</span></p>
           <p>Phone Number: <span>{details.phone}</span></p>
           <p>Links: 
               <a target="_blank" href={details.links_1} rel="noreferrer">Facebook</a> 
               <a target="_blank" href={details.links_2} rel="noreferrer">Instagram</a> 
            </p>
           <p>Description:</p>
           <p>{details.description}</p>
           <p>Gallery:</p>
           <div className="gallery">
               <img src={details.gallery_Url1} alt="company"></img>
               <img src={details.gallery_Url2} alt="company"></img>
               <img src={details.gallery_Url3} alt="company"></img>
           </div>
           <p>Vouchers:</p>
           <div className="voucher-container">
                <div className="voucher"> <span>10 euro vouchers available: {details.amountof10} stk</span></div>
                <div className="voucher">20</div>
                <div className="voucher">30</div>
                <div className="voucher"></div>
                <div className="voucher"></div>
                <div className="voucher"></div>
             </div>
          
            <button onClick={()=>setShowForm(true)}> Edit </button>
            </div> 
            </div>
    )
}



export default ProfileDetails
