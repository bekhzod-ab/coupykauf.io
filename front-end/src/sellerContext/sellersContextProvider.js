import SellerContext from "./useContext.js"
import {useState} from "react"


function SellersProvider({children}){
    const [loggedIn, setLoggedIn] = useState(false) 
    function login(){
        setLoggedIn(true)
    }

    return (
        <SellerContext.Provider value={{loggedIn,setLoggedIn,login}}>
            {children}
        </SellerContext.Provider>
    )


}

export default SellersProvider;