import {useParams} from "react-router-dom"
import {useContext} from "react"
import SellerContext from "../sellerContext/useContext.js"
import { FaRegCreditCard, FaCcPaypal, FaBitcoin} from "react-icons/fa"
import "./PurchaseVoucher.css"

export default function Purchase() {
    const {company_name} = useParams()
    const {vouchers} = useContext(SellerContext)

    const details = vouchers.find(el => el.company_name === company_name)
    console.log(details)
    return (
        <div className="voucher_details">
            <div className="voucher">
                <ul>
                    <li>voucher: {details.company_name} </li>
                    <li>description: {details.description} </li>
                    <li>available 10 € Vouchers: {details.amountof10}</li>
                    <li>available 20 € Vouchers: {details.amountof20}</li>
                    <li>available 30 € Vouchers: {details.amountof30}</li>
                </ul>
            </div>
            <div className="checkboxes">
                <input type="checkbox"/>
                <label>10 €</label>
                <input type="checkbox"/>
                <label>20 €</label>
                <input type="checkbox"/>
                <label>30 €</label>
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
                            <input type="email" placeholder="name@example.com" required></input><br/>

                            <label>card number:</label>
                            <input type="number" required ></input><br/>

                            <label>exp date:</label>
                            <input type="number" required></input>
                            <label>CVV:</label>
                            <input type="number" required></input> 
                    </fieldset>
                </form>
            </div>
            <button className="buyBtn">BUY</button>
        </div>
    )
}