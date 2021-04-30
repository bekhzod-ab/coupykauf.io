import { useState } from "react"
import { useHistory, Link } from "react-router-dom"
import "./vouchers-page.css"



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
            {/* <h2>Our vouchers:</h2>
            <ul className="vouchers_list">
                {vouchers.map((voucher, index) => (
                      <li key={index}> Name: {voucher.description}<br/>
                      Price: {voucher.price}<br/>
                      <Link to={`/vouchers/${voucher.articleNo}`}> More...</Link></li>
                  
                ))}
            </ul> */}
                        {/* just writing the card  */}
            <div className="card">

              <div className="profile-sidebar">
                <img src="https://i.pravatar.cc/125" alt=""/>
                
              </div>
              <div className="profile-main">

                {vouchers.map((voucher, index) => (
                  <h2 key={index}> name: {voucher.description} 
                  </h2>
                    ))}
                
                {vouchers.map((voucher, index) => (
                  <Link to={`/vouchers/${voucher.articleNo}`}> More...</Link>
                    ))}
                
              
                </div>
              

            </div>


            <div className="card">

              <div className="profile-sidebar">
                <img src="https://i.pravatar.cc/125" alt=""/>
                
              </div>
              <div className="profile-main">
                <h2>company Name</h2>
                <p className="description">Lorem, ipsum dolor.</p>
                <p className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestiae impedit nesciunt officia eius ab.</p>
                {/* <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul> */}
              </div>
              

            </div>


            <div className="card">

              <div className="profile-sidebar">
                <img src="https://i.pravatar.cc/125" alt=""/>
                
              </div>
              <div className="profile-main">
                <h2>company Name</h2>
                <p className="description">Lorem, ipsum dolor.</p>
                <p className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestiae impedit nesciunt officia eius ab.</p>
                {/* <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul> */}
              </div>
              

            </div>

        </div>

        
    )
}



export default VouchersPage;
