import SellerContext from "./useContext.js"
import {useState, useEffect} from "react"
import axios from "axios"


function SellersProvider({children}){
    const [vouchers, setVouchers] = useState([])
    const [loggedIn, setLoggedIn] = useState(false) 
    function login(){
        setLoggedIn(true)
    }
    useEffect(()=>{
        axios.get("http://localhost:3333/vouchers")
        .then(response => setVouchers(response.data))
        .catch((err) => console.log(err.message))
    },[])

    return (
        <SellerContext.Provider value={{loggedIn,vouchers,setLoggedIn,login}}>
            {children}
        </SellerContext.Provider>
    )


}

export default SellersProvider;