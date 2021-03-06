import { FaFacebook, FaInstagram } from "react-icons/fa"
import {useState, useRef} from "react";
import axios from "axios"; 
import placeholder from "../imgs/placeholder-store.png"

axios.defaults.withCredentials = true




const ProfileDetailsForm = ({setShowForm, details, setDetails, showForm, imagesArray}) => {
    const imgRef1 = useRef();
    const imgRef2 = useRef();
    const imgRef3 = useRef();
    //profile info to send to backend
    const [gallery_Url1,setgallery_Url1] = useState("")
    const [gallery_Url2,setgallery_Url2] = useState("")
    const [gallery_Url3,setgallery_Url3] = useState("")
    const [category, setCategory] = useState(details.category); 
    const [address, setAddress] = useState(details.address);
    const [phone, setPhone] = useState(details.phone);
    const [links_1, setLinks_1] = useState(details.links_1);
    const [description, setDescription] = useState(details.description);
    



    const [isOffering10, setisOffering10] = useState(false)
    const [amountof10, setAmountof10] = useState(details.amountof10)
    const [amountof20, setAmountof20] = useState(details.amountof20)
    const [amountof30, setAmountof30] = useState(details.amountof30)
    const submitHandler = (e) => {
        e.preventDefault();
        if(category === ""){
            alert("Please specify your category")
            return 
        }
        axios.post("http://localhost:3333/company/profile", {  
            category,address, phone, links_1, description, amountof10, amountof20, amountof30
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
        <form onSubmit={submitHandler} className="profile-form">
                <fieldset>

                        <div className="profile-item">  
                            <label htmlFor="category" className="subheading">Choose a category:</label>
                            <select name="category" id="category" value={category} onChange={(e)=> setCategory(e.target.value)}>
                                <option disabled selected value="">Categories</option>
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
                            <label htmlFor="address"className="subheading">Address:</label>
                            <input type="text" required value={address} onChange={(e)=> setAddress(e.target.value)}/> 
                        </div>
                        

                        <div className="profile-item">   
                            <label htmlFor="phone" className="subheading">Phone Number:</label>
                            <input type="number" required value={phone} onChange={(e)=> setPhone(e.target.value)} /> 
                        </div>
                         <label htmlFor="gallery" className="profile-item subheading">Add photos:</label>
                        <div className="profile-item gallery-form">  
                                <figure>
                                    {!imagesArray[0]?  <img ref={imgRef1} src={placeholder} alt="photo1"/> :  <img ref={imgRef1} src={imagesArray[0]} alt="photo1"/>}
                                     {/* <img ref={imgRef1} src={placeholder || imagesArray[0]} alt="photo1"/>  */}
                                    <figcaption><input type="file" id="img1" onChange={(e)=>{ imgRef1.current.src =URL.createObjectURL(e.target.files[0]); setgallery_Url1(e.target.files[0]);}} name="img1" accept="image/png, image/jpeg"/></figcaption> 
                                </figure>
                                <figure>
                                {!imagesArray[1]?  <img ref={imgRef2} src={placeholder} alt="photo1"/> :  <img ref={imgRef2} src={imagesArray[1]} alt="photo1"/>}
                                    <figcaption><input type="file" id="img2" onChange={(e)=>{ imgRef2.current.src =URL.createObjectURL(e.target.files[0]); setgallery_Url2(e.target.files[0]);}} name="img2" accept="image/png, image/jpeg"  /></figcaption> 
                                </figure>
                                <figure>
                                {!imagesArray[2]?  <img ref={imgRef3} src={placeholder} alt="photo1"/> :  <img ref={imgRef3} src={imagesArray[2]} alt="photo1"/>}
                                    <figcaption><input type="file" id="img3" onChange={(e)=>{ imgRef3.current.src =URL.createObjectURL(e.target.files[0]); setgallery_Url3(e.target.files[0]);}} name="img3"accept="image/png, image/jpeg" /></figcaption> 
                                </figure>
                        </div> 
                        

                        <div className="profile-item"> 

                            <label htmlFor="url" className="subheading">Add social media links:</label> <br/>

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

                        <label htmlFor="personal-ms"className="subheading">Description:</label>
                        <textarea maxLength="300" id="personal-msg" name="personal-msg" rows="4" cols="50"  value={description} onChange={(e)=> setDescription(e.target.value)}/>

                    </div>  

                    <label htmlFor="vouchers" className= "profile-item subheading">Vouchers:</label>
                        <div className="profile-item vouchers">  
                            <label htmlFor="voucher1"> 10???</label>
                            <span>Amount: </span>
                            <input type="number" value ={amountof10} onChange={(e) => setAmountof10(e.target.value)}/>
                            <label htmlFor="voucher2"> 20???</label>
                            <span>Amount: </span>
                            <input type="number" value ={amountof20} onChange={(e) => setAmountof20(e.target.value)}/>
                            <label htmlFor="voucher3"> 30???</label>
                            <span>Amount: </span>
                            <input type="number" value ={amountof30} onChange={(e) => setAmountof30(e.target.value)}/>
                        </div>


                </fieldset>


                <div className="save-edit"> 
                    <input value="Save" type="submit" className="btnHP"/>
                    <button className="btnHP" onClick={()=>setShowForm(false)}>Cancel</button>
                </div>
            </form>
          
    )
}

export default ProfileDetailsForm