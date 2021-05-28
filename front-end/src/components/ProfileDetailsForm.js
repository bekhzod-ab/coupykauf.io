import { FaFacebook, FaInstagram } from "react-icons/fa"
import {useState} from "react";
import axios from "axios"; 
axios.defaults.withCredentials = true




const ProfileDetailsForm = ({setShowForm, details, setDetails, showForm}) => {
    
    //profile info to send to backend
    const [gallery_Url1,setgallery_Url1] = useState("")
    const [gallery_Url2,setgallery_Url2] = useState("")
    const [gallery_Url3,setgallery_Url3] = useState("")
    const [category, setCategory] = useState(""); 
    const [address, setAddress] = useState(details.address);
    const [phone, setPhone] = useState(details.phone);
    const [links_1, setLinks_1] = useState(details.links_1);
    const [description, setDescription] = useState(details.description);
   
    const [isOffering10, setisOffering10] = useState(false)
    const [amountof10, setAmountof10] = useState(0)

    const submitHandler = (e) => {
        e.preventDefault();
        
        axios.post("http://localhost:3333/company/profile", {  
            category,address, phone, links_1, description, amountof10
        })

        const formData = new FormData()
        formData.append("gallery_Url1",gallery_Url1)
        formData.append("gallery_Url2", gallery_Url2)
        formData.append("gallery_Url3", gallery_Url3)            
        console.log(formData)

        axios.post("http://localhost:3333/company/image", formData)
        .then(()=> {setShowForm(false)}) 
        .catch((err)=> {console.log(err.message)})
       
    }
    
    return (
        <form className="profile-form">
                <fieldset>

                        <div className="profile-item">  
                            <label htmlFor="category">Choose a category:</label>
                            <select name="category" id="category" value={details.category} onChange={(e)=> setCategory(e.target.value)}>
                                <option value="gastronomy">Gastronomy</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="beauty">Beauty</option>
                                <option value="tourism">Tourism</option>
                                <option value="sport">Sport</option>
                                <option value="hobby">Hobby</option>
                                <option value="other">Other</option>
                            </select>
                        </div> 
                        
                        <div className="profile-item">   
                            <label htmlFor="address">Address:</label>
                            <input type="text" required value={address} onChange={(e)=> setAddress(e.target.value)}/> 
                        </div>
                        
                        <div className="profile-item">   
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="number" required value={phone} onChange={(e)=> setPhone(e.target.value)} /> 
                        </div>
                        
                        <div className="profile-item gallery">  
                            <label htmlFor="gallery">Add photos:</label> <br/>
                            <input type="file" id="img1" onChange={(e)=>setgallery_Url1(e.target.files[0])} name="img1" accept="image/png, image/jpeg"/>
                            <input type="file" id="img2" onChange={(e)=>setgallery_Url2(e.target.files[0])} name="img2" accept="image/png, image/jpeg"  />
                            <input type="file" id="img3" onChange={(e)=>setgallery_Url3(e.target.files[0])} name="img3"accept="image/png, image/jpeg" />
                            </div> 
                        
                            <div className="profile-item"> 
                            <label htmlFor="url">Add social media links:</label> <br/>
                            <div className="social-media">
                                <FaFacebook className="icon" />
                                <input type="url" name="url" id="url1"  pattern="https://.*" value={links_1} onChange={(e)=> setLinks_1(e.target.value)}/>
                            </div> 
                            <div className="social-media">
                                <FaInstagram className="icon"/> 
                                <input type="url" name="url" id="url2"  pattern="https://.*" />
                            </div>  
                        </div>
                        <div className="profile-item"> 
                        <label htmlFor="personal-ms">Description:</label>
                        <textarea id="personal-msg" name="personal-msg" rows="4" cols="50"  value={description} onChange={(e)=> setDescription(e.target.value)}/>
                        </div>  

                        <div className="profile-item vouchers"> 
                            <input type="checkbox" id="10" name="voucher1" /* value={isOffering10} onChange={(e)=> setisOffering10(e.target.value)} *//>
                            <label htmlFor="voucher1"> 10€</label>
                            <span>Amount: </span>
                            <input type="number" value ={amountof10} onChange={(e) => setAmountof10(e.target.value)}/>
                            <input type="checkbox" id="20" name="voucher2" value="Car"/>
                            <label htmlFor="voucher2"> 20€</label>
                            <span>Amount: </span>
                            <input type="number" value ={amountof10} onChange={(e) => setAmountof10(e.target.value)}/>
                            <input type="checkbox" id="30" name="voucher3" value="Boat"/>
                            <label htmlFor="voucher3"> 30€</label>
                            <span>Amount: </span>
                            <input type="number" value ={amountof10} onChange={(e) => setAmountof10(e.target.value)}/>
                        </div>                         
                </fieldset> 
                <div className="save-edit"> 
                    <button className="btnHP" onClick={(e)=>submitHandler(e)}>Save</button>
                    <button className="btnHP" onClick={()=>setShowForm(false)}>Cancel</button>
                </div>
            </form>
          
    )
}

export default ProfileDetailsForm