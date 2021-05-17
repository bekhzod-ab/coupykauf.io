import {useState} from "react";
import axios from "axios"; 
axios.defaults.withCredentials = true



const ProfileDetailsForm = ({setShowForm}) => {
    
    //profile info to send to backend
    const [gallery_Url1,setgallery_Url1] = useState("")
    const [gallery_Url2,setgallery_Url2] = useState("")
    const [gallery_Url3,setgallery_Url3] = useState("")
    const [category, setCategory] = useState(""); 
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [links_1, setLinks_1] = useState("");
    const [description, setDescription] = useState("");
    const [vouchers,setVouchers] = useState("");
    const [isOffering10, setisOffering10] = useState(false)
    const [amountof10, setAmountof10] = useState(0)

    const submitHandler = (e) => {
        e.preventDefault();
        /////////////////////////////////////////////
        //all three images are required, the save button on the form doesn't work unless there are 3 images. 
        // ask Florian on Friday!
        if (gallery_Url1 === "" || gallery_Url2 === "" || gallery_Url3 === "") {
            alert("three pictures required")
            }   else 
                {
                    const formData = new FormData()
                    formData.append("gallery_Url1",gallery_Url1)
                    formData.append("gallery_Url2", gallery_Url2)
                    formData.append("gallery_Url3", gallery_Url3)
                    console.log(formData)
                    axios.post("http://localhost:3333/company/profile", {  
                        category, address, phone, links_1, description, amountof10
                    })
                    

                    axios.post("http://localhost:3333/company/image", formData)
                    .then(()=> {setShowForm(false)}) 
                    .catch((err)=> {console.log(err.message)})
                }
    }
    
    return (
        <form className="profile-form">
                <fieldset>
                        <div className="profile-item">  
                            <label htmlFor="name">Company Name:</label>
                             <input type="text"/> 
                        </div>

                        <div className="profile-item">  
                            <label htmlFor="category">Choose a category:</label>
                            <select name="category" id="category" value={category} onChange={(e)=> setCategory(e.target.value)}>
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
                            <input type="number" required value={phone} onChange={(e)=> setPhone(e.target.value)}/> 
                        </div>
                        
                        <div className="profile-item gallery">  
                        <label htmlFor="gallery">Add photos:</label> <br/>
                        <input type="file" id="img1" onChange={(e)=>setgallery_Url1(e.target.files[0])} name="img1" accept="image/png, image/jpeg" required/>
                        <input type="file" id="img2" onChange={(e)=>setgallery_Url2(e.target.files[0])} name="img2" accept="image/png, image/jpeg" required />
                        <input type="file" id="img3" onChange={(e)=>setgallery_Url3(e.target.files[0])} name="img3"accept="image/png, image/jpeg" required/>
                        </div> 
                       
                        <div className="profile-item"> 
                        <label htmlFor="url">Add social media links:</label> <br/>
                        <input type="url" name="url" id="url1" placeholder="https://example.com" pattern="https://.*" value={links_1} onChange={(e)=> setLinks_1(e.target.value)}/>
                        <input type="url" name="url" id="url2" placeholder="https://example.com" pattern="https://.*" />
                        </div>  

                        <div className="profile-item"> 
                        <label htmlFor="personal-ms">Description:</label>
                        <textarea id="personal-msg" name="personal-msg" rows="4" cols="50" placeholder="Write a short introduction of your company here..." value={description} onChange={(e)=> setDescription(e.target.value)}/>
                        </div>  

                        <div className="profile-item"> 
                            <input type="checkbox" id="10" name="voucher1" value={isOffering10} onChange={(e)=> setisOffering10(e.target.value)}/>
                            <label htmlFor="voucher1"> 10</label>{isOffering10? <input type="number" value ={amountof10} onChange={(e) => setAmountof10(e.target.value)}></input> : null}
                            <input type="checkbox" id="20" name="voucher2" value="Car"/>
                            <label htmlFor="voucher2"> 20</label>
                            <input type="checkbox" id="30" name="voucher3" value="Boat"/>
                            <label htmlFor="voucher3"> 30</label>
                            <input type="checkbox" id="40" name="voucher4" value="Boat"/>
                            <label htmlFor="voucher4"> 40</label>
                            <input type="checkbox" id="50" name="voucher5" value="Boat"/>
                            <label htmlFor="voucher5"> 50</label>
                            <input type="checkbox" id="60" name="voucher6" value="Boat"/>
                            <label htmlFor="voucher6"> 60</label>
                        </div>                         
                </fieldset> 
                <div className="save-edit"> 
                <button className="btnHP" onClick={(e)=>submitHandler(e)}>Save</button>
                </div>
            </form>
    )
}

export default ProfileDetailsForm