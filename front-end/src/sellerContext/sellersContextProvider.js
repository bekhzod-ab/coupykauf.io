import SellerContext from "./useContext.js"
import {useState, useEffect} from "react"
import axios from "axios"
import  Cookies  from "universal-cookie"
const cookies = new Cookies();


function SellersProvider({children}){
    const [vouchers, setVouchers] = useState([])
    const [loggedIn, setLoggedIn] = useState()
    
    const checkCookie = () => {
        if(cookies.get("Stoken")) {
            setLoggedIn(true)

            }else setLoggedIn(false)}

    useEffect(() => {
        checkCookie()
    }, [])
    
    useEffect(()=>{
        axios.get("http://localhost:3333/vouchers")
        .then(response => {
            console.log(response.data)
            setVouchers(response.data)
        })
        .catch((err) => console.log(err.message))
    },[])

    return (
        <SellerContext.Provider value={{loggedIn,vouchers,setLoggedIn,checkCookie}}>
            {children}
        </SellerContext.Provider>
    )


}

export default SellersProvider;