import { useState } from "react"
import { useHistory, Link } from "react-router-dom"
import "./vouchers-page.css"
import Card from "./Card";



const VouchersPage = () => {

  
  //fr zukünftigen Filter als form eingabe z.B. checkboxen
    const handleFilter = () =>{
      if(document.getElementById("length-filter").checked){
        vouchers.filter(voucher => voucher.name.length > 15)
        setVouchers(vouchers)
      }
    }

    const filterVouchers = (event) =>{
      console.log(event.target.value.length)
      if(event.target.value.length === 0){
        setVouchers(vouchers);
      } else {
        let filteredVouchers = vouchers.filter(voucher=>{
          return voucher.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setVouchers(filteredVouchers);
      }
    }

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
         
            <input Change={(event)=>filterVouchers(event)} placeholder="Search..."/>
             
            {vouchers.map((voucher, index) => (
              <Card voucher={voucher} key={index}/>
            ))}
           
            </div>
    )
}



export default VouchersPage;
