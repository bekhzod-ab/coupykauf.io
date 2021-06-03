import {useState, useEffect} from "react";
import axios from "axios"; 
import "./profileDetails.css"
import ProfileDetailsForm from "./ProfileDetailsForm";
import { FaFacebook, FaInstagram } from "react-icons/fa"
import voucherTen from "../imgs/ten.png"
import voucherTwenty from "../imgs/twenty.png"
import voucherThirty from "../imgs/thirty.png"



const ProfileDetails = () => {
    const [showForm, setShowForm] = useState(false); 
    const [details, setDetails] = useState([])
    const [imagesArray, setImagesArray] = useState([]);
   
    useEffect(()=>{
        axios.get("http://localhost:3333/company/profile")
        .then((result)=>{
            setDetails(result.data);
            setImagesArray(result.data.images_array);
        })
        .catch((err)=>console.log(err))
    }, [showForm])

    const handleToggleShowForm = ()=>{
        if(showForm ? setShowForm(false): setShowForm(true));
    }

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
                {imagesArray.map((img,key)=>(
                    <img src={img} key={key} alt="company"></img>
                ))}
            </div>
            <p className="subheading">Vouchers:</p>
            <div className="voucher-container">
                 <figure>
                <img src={voucherTen} alt='missing' className="coin"/>
                <figcaption className="amount">Available vouchers:</figcaption> 
                <figcaption className="amount"> {details.amountof10}</figcaption>
                </figure>
                <figure>
                <img src={voucherTwenty} alt='missing' className="coin"/>
                <figcaption className="amount">Available vouchers:</figcaption> 
                <figcaption className="amount"> {details.amountof20}</figcaption>
                </figure>
                <figure>
                <img src={voucherThirty} alt='missing' className="coin"/>
                <figcaption className="amount">Available vouchers:</figcaption> 
                <figcaption className="amount"> {details.amountof30}</figcaption>
                </figure>
                </div>
            
                <div className="save-edit"> 
                    <button className="btnHP" onClick={()=>handleToggleShowForm()}> Edit </button>
                </div> 
                </div>
    )
    return (
        <>
           {!showForm? profileDetails : <ProfileDetailsForm 
           details={details} setDetails={setDetails} showForm={showForm} setShowForm={setShowForm} imagesArray={imagesArray}/>}
        </>
    )
}



export default ProfileDetails
