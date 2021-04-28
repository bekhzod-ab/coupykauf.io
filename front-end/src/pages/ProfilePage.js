const ProfilePage = () => {
    return (
        <div className="profile-page"> 
            <div className="profile-nav">
            <label for="avatar">Choose a profile picture:</label>

            <input type="file"
             id="avatar" name="avatar"
             accept="image/png, image/jpeg" />
         {/*  <img className="profile-pic" src="https://www.sketchappsources.com/resources/source-image/pin.jpg" alt="profile" ></img> */}

                <button> Profile Settings</button>
                <button> Account Settings </button>

            </div>
            <form className="profile-form">
                    
                        <div className="profile-item">  
                            <label htmlFor="name">Company Name:</label>
                            <input type="text" required /> 
                        </div>

                        <div className="profile-item">  
                            <label for="category">Choose a category:</label>
                            <select name="category" id="category">
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
                            <label htmlFor="name">Address:</label>
                            <input type="text" required /> 
                        </div>
                        <div className="profile-item">   
                            <label htmlFor="name">Phone Number:</label>
                            <input type="text" required /> 
                        </div>
                        <div className="profile-item gallery">  
                        <label for="gallery">Add photos:</label>
                        <input type="file"
                        id="img1" name="img1"
                        accept="image/png, image/jpeg" />
                        <input type="file"
                        id="img2" name="img2"
                        accept="image/png, image/jpeg" />
                        <input type="file"
                        id="img3" name="img3"
                        accept="image/png, image/jpeg" />
                        </div> 
                        <div className="profile-item"> 
                        <label for="url">Add social media links:</label>

                        <input type="url" name="url" id="url"
                            placeholder="https://example.com"
                            pattern="https://.*" size="30">
                        </input>

                        <input type="url" name="url" id="url"
                            placeholder="https://example.com"
                            pattern="https://.*" size="30">
                            </input>
                        </div>  

                        <div className="profile-item"> 
                        <label for="personal-ms">Description:</label>
                        <textarea id="personal-msg" name="personal-msg" rows="4" cols="50" placeholder="Write a short introduction of your company here...">
                        </textarea>
                        </div>  

                        <div className="profile-item"> 
                        <label htmlFor="name">Product overview:</label>
                            <input type="text"/> 
                            <input type="text"/> 
                            <input type="text"/> 
                        </div>  

                        <div className="profile-item"> 
                        <input type="checkbox" id="10" name="voucher1" value="Bike"/>
                        <label for="voucher1"> 10</label>
                        <input type="checkbox" id="20" name="voucher2" value="Car"/>
                        <label for="voucher2"> 20</label>
                        <input type="checkbox" id="30" name="voucher3" value="Boat"/>
                        <label for="voucher3"> 30</label>
                        <input type="checkbox" id="40" name="voucher4" value="Boat"/>
                        <label for="voucher4"> 40</label>
                        <input type="checkbox" id="50" name="voucher5" value="Boat"/>
                        <label for="voucher5"> 50</label>
                        <input type="checkbox" id="60" name="voucher6" value="Boat"/>
                        <label for="voucher6"> 60</label>
                        </div> 
                         <div className="profile-item">  
                        <input type="submit" value="Submit"/>
                        </div> 
               
            </form>
        </div> 
    )
}



export default ProfilePage
