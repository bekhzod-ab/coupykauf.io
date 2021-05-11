import {useState, useEffect} from "react";
import axios from "axios"; 
import "./profileDetails.css"

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

    //  MOCK DATA 

    const [mockDetails, setMockDetails] = useState({
        "name": "Petite Cafe",
        "category": "gastronomy",
        "address": "Karl Langer Str. 10, Leipzig",
        "phone": "555 555 555",
        "links": {
            "link1": "https://facebook.com",
            "link2": "https://instagram.com"
        }, 
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam lorem, euismod ac efficitur id, ultrices in neque. Praesent urna felis, interdum ac ex a, porttitor fermentum arcu. Mauris lectus nisi, elementum ut dolor et, tincidunt molestie orci. Cras justo augue, dapibus semper erat in, tincidunt congue eros.",
        "gallery": {
            "img1": "https://frenchtogether.com/wp-content/uploads/2019/01/croissant-and-coffee.jpg",
            "img2": "https://www.thespruceeats.com/thmb/nkcJ0tWnZbZHZLfIOvY_vfhD86E=/984x655/filters:fill(auto,1)/FrenchCafeauLait-TheSpruce-NitaWest-d6ac65988cf9450488904a96cfc7448f.jpg",
            "img3": "https://www.kids-world-travel-guide.com/images/xfrench_food_macarons_shutterstock_62967172-2.jpg.pagespeed.ic.exomk2uTXs.jpg",
        },
        "vouchers": {
            "voucher1": 10,
            "voucher2": 20,
            "voucher3": 30,
            "voucher4": "", 
            "voucher5": "",
            "voucher6": "",
        }

    })
    return (
        <div className="profile-page"> 
           
           <div className="profile-details">
           <h2> PROFILE DETAILS </h2>

            <p>Company Name: <span>{mockDetails.name}</span></p>
           <p>Category: <span>{mockDetails.category}</span></p>
           <p>Address: <span>{mockDetails.address}</span></p>
           <p>Phone Number: <span>{mockDetails.phone}</span></p>
           <p>Links: 
               <a target="_blank" href={mockDetails.links.link1} >Facebook</a> 
               <a target="_blank" href={mockDetails.links.link2}>Instagram</a> 
            </p>
           <p>Description:</p>
           <p>{mockDetails.description}</p>
           <p>Gallery:</p>
           <div className="gallery">
               <img src={mockDetails.gallery.img1} alt="company"></img>
               <img src={mockDetails.gallery.img2} alt="company"></img>
               <img src={mockDetails.gallery.img3} alt="company"></img>
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
