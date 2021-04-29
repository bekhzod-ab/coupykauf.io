import { useState } from "react"
import { useHistory, Link } from "react-router-dom"



const VouchersPage = () => {

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
                "description": "schneiderie",
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
                "description": "Leckerei biem Bekerei",
                "price": 5
              }
         
            ])
    return (
        <div className="vouchers-page">
            <h2>Our vouchers:</h2>
            <ul className="vouchers_list">
                {vouchers.map((voucher, index) => (
                      <li key={index}> Name: {voucher.description}<br/>
                      Price: {voucher.price}<br/>
                      <Link to={`/vouchers/${voucher.articleNo}`}> More...</Link></li>
                  
                ))}
            </ul>
        </div>
    )
}

export default VouchersPage;
