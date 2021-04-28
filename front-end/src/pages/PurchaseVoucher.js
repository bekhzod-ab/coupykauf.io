import {useParams} from "react-router-dom"
import {useState} from "react"


export default function Purchase() {
    const {articleNo} = useParams()
    const [vouchers, setVouchers] = useState([
        
           
              {
                "articleNo": "vc-0001",
                "name": "kp50",
                "description": "restaurant by Kulwitzer See",
                "price": 49.99
              },
              {
                "articleNo": "vc-0002",
                "name": "kp20",
                "description": "schneiderei",
                "price": 15
              },
              {
                "articleNo": "vc-0003",
                "name": "kp10",
                "description": "Mohammed's Kebabi",
                "price": 10
              },
              {
                "articleNo": "vc-0004",
                "name": "kp5",
                "description": "Leckerei beim Bekerei",
                "price": 5
              }
            ]
            
        
    )
    const details = vouchers.find(el => el.articleNo === articleNo)
    console.log(details)
    return (
        <div className="voucher_details">
            <div>
                <ul>
                    <li>vocuher: {details.name} </li>
                    <li>description: {details.description} </li>
                    <li>price: {details.price} $</li>
                </ul>
            </div>

            <div className="purchase">
                <form>
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
                    
                </form>
            </div>
        </div>
    )
}