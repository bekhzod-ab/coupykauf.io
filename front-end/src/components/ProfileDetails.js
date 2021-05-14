import {useState, useEffect} from "react";
import axios from "axios"; 
import "./profileDetails.css"

const ProfileDetails = ({showForm, setShowForm, Stoken}) => {
    const [details, setDetails] = useState([])
    // console.log(Stoken)
    useEffect(()=>{
        axios.get("http://localhost:3333/company/profile", {Stoken})
        .then((result)=> {
            console.log(result)
            setDetails(result.data)
        })
        .catch((err) => {console.log(err.message)})
    }, [Stoken])

    console.log(details)
    
    return (
        <div className="profile-page"> 
           
           <div className="profile-details">
           <h2> PROFILE DETAILS </h2>

            <p>Company Name: <span>{details.company_name}</span></p>
           <p>Category: <span>{details.category}</span></p>
           <p>Address: <span>{details.address}</span></p>
           <p>Phone Number: <span>{details.phone}</span></p>
           <p>Links: 
               <a target="_blank" href={details.links_1} >Facebook</a> 
               <a target="_blank" href={details.links_2}>Instagram</a> 
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
                <div className="voucher"> <span>10</span></div>
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
