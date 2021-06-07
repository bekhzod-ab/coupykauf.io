import {useParams, Redirect, useHistory} from "react-router-dom"
import {useContext, useState,useEffect} from "react"
import SellerContext from "../sellerContext/useContext.js"
import { FaRegCreditCard, FaCcPaypal, FaBitcoin} from "react-icons/fa"
import "./PurchaseVoucher.css"
import axios from "axios"

export default function Purchase() {
    const history = useHistory()
    const {company_name} = useParams()
    const {vouchers} = useContext(SellerContext)
    const [email,setEmail] = useState("")
    const [quantity1, setQuantity1] = useState()
    const [quantity2, setQuantity2] = useState()
    const [quantity3, setQuantity3] = useState()
    const details = vouchers.find(el => el.company_name === company_name)
    const [isOneZero, setTenIsZero] = useState(false)
    const [isTwoZero, setTwentyIsZero] = useState(false)
    const [isThreeZero, setThirtyIsZero] = useState(false)


    useEffect(()=> {

        if (details.amountof10 <= 0 || details.amountof10 ===  null) {
            setTenIsZero(true)}
        if (details.amountof20 <= 0 || details.amountof20 ===  null){
            setTwentyIsZero(true)}
        if (details.amountof30 <= 0 || details.amountof30 ===  null ) {
            setThirtyIsZero(true)
        }
        
    },[]) 
    
    const buy = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3333/voucher/invoice", {company: details.company_name, email,quantity1,quantity2,quantity3})
            .then(()=> {
                history.push(`/vouchers/${company_name}/${email}`)
                })
            
            .catch()
        }

    return (
        <div className="voucher_details">
                <div className="voucher">
                    <ul>
                        <li> <h2> voucher: </h2> <br/>
                        <span>{details.company_name}</span></li>
                        <li> <h2> description: </h2> <br/>
                        <span>{details.description}</span></li>
                        <li>available 10 € Vouchers: {details.amountof10}</li>
                        <li>available 20 € Vouchers: {details.amountof20}</li>
                        <li>available 30 € Vouchers: {details.amountof30}</li>
                    </ul>
                </div>
            <div className="checkboxes">
                <input type="checkbox" disabled={isOneZero}/>
                <label>10 €</label>
                <input type="number" disabled={isOneZero} value={quantity1} onChange={(e) => setQuantity1(e.target.value)}/>

                <input type="checkbox" disabled={isTwoZero}/>
                <label>20 €</label>
                <input type="number" disabled={isTwoZero} value={quantity2} onChange={(e)=>setQuantity2(e.target.value)}/>

                <input type="checkbox" disabled={isThreeZero}/>
                <label>30 €</label>
                <input type="number" disabled={isThreeZero} value={quantity3} onChange={(e)=>setQuantity3(e.target.value)}/>
            </div>
        
            <div className="purchase">
                <form>
                    <fieldset>
                        <legend>Payment method</legend>
                            <div className="paymentMethods"> 
                            <a href="www.visa.com" alt="visa"><FaRegCreditCard className="iconPayment"/></a>
                            <a href="www.paypal.com" alt="paypal"><FaCcPaypal className="iconPayment"/></a>
                            <a href="www.binance.com" alt="binance"><FaBitcoin className="iconPayment"/></a>
                            </div>
                            <label>Your Name:</label>
                            <input type="text" placeholder="you first and last name" required></input><br/>

                            <label>email:</label>
                            <input type="email" placeholder="name@example.com" value={email} required onChange={(e) => setEmail(e.target.value)}></input><br/>

                            <label>card number:</label>
                            <input type="number" required ></input><br/>

                            <label>exp date:</label>
                            <input type="number" required></input><br/>

                            <label>CVV:</label>
                            <input type="number" required></input> 
                    </fieldset>
                </form>
            </div>
            <button onClick={buy} className="buyBtn">BUY</button>
        </div>
    )
}