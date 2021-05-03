import {useState, useEffect} from "react";
import axios from "axios"; 


const ProfileDetailsForm = ({showForm, setShowForm, Stoken}) => {
    
    
   
   /*  const [isDisabled, setIsDisabled] = useState(true); */
    //profile info to send to backend
    const [category, setCategory] = useState(""); 
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [links_1, setLinks_1] = useState("");
    const [description, setDescription] = useState("");
    const [vouchers,setVouchers] = useState("");
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3333/company/profile", {  
            category, address, phone, links_1, description, vouchers, Stoken
        })
        .then(()=> {setShowForm(false)}) 
        .catch((err)=> {console.log(err.message)})
        
    }
    return (
        <form /* onSubmit={submitHandler} */ className="profile-form">
                {/* initially the form is disabled */}
                <fieldset /* disabled={isDisabled} */>
                        <div className="profile-item">  
                            <label htmlFor="name">Company Name:</label>
                             <input type="text" /* required */ /* value={companyName} onChange={(e)=> setCompanyName(e.target.value)} *//> 
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
                        
                        {/* we will add the images later */}
                        <div className="profile-item gallery">  
                        <label htmlFor="gallery">Add photos:</label>
                        <input type="file" id="img1" name="img1" accept="image/png, image/jpeg" />
                        <input type="file" id="img2" name="img2" accept="image/png, image/jpeg" />
                        <input type="file" id="img3" name="img3"accept="image/png, image/jpeg" />
                        </div> 
                       
                       {/* send only 1 link to backend for now */}
                        <div className="profile-item"> 
                        <label htmlFor="url">Add social media links:</label>
                        <input type="url" name="url" id="url1" placeholder="https://example.com" pattern="https://.*" value={links_1} onChange={(e)=> setLinks_1(e.target.value)}/>
                        <input type="url" name="url" id="url2" placeholder="https://example.com" pattern="https://.*" />
                        </div>  

                        <div className="profile-item"> 
                        <label htmlFor="personal-ms">Description:</label>
                        <textarea id="personal-msg" name="personal-msg" rows="4" cols="50" placeholder="Write a short introduction of your company here..." value={description} onChange={(e)=> setDescription(e.target.value)}/>
                        </div>  

                        {/* don't send this to backend now */}
                        <div className="profile-item"> 
                        <label htmlFor="products">Product overview:</label>
                            <input name="products" type="text"/> 
                            <input name="products" type="text"/> 
                            <input name="products" type="text"/> 
                        </div>  

                        {/* try to send just one to backend*/}
                        <div className="profile-item"> 
                            <input type="checkbox" id="10" name="voucher1" value={vouchers} onChange={(e)=> setVouchers(e.target.value)}/>
                            <label htmlFor="voucher1"> 10</label>
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
               {/*  here we enable/disable the form */}
            {/*     <input onClick={(e)=>setIsDisabled(true)} type="submit" value="Save"/> */}
                <button onClick={(e)=>submitHandler(e)}>Save</button>
                </div>
            </form>
    )
}

export default ProfileDetailsForm