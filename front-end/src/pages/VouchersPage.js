import { useState } from "react"
import { useHistory, Link } from "react-router-dom"
import "./vouchers-page.css"
import Card from "../components/Card";
/* import Filter from "../components/Filter"; */
import "./filter-style.css";



const VouchersPage = () => {

  
  //fr zukünftigen Filter als form eingabe z.B. checkboxen
/*     const handleFilter = () =>{
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
 */

    /* this is for the filterbuttons */
    /* const filterVouchers = (event) =>{ */
      /* console.log(event.target.value.length) */
     /*  if(event.target.value === ){
        setVouchers(vouchers);
      } else {
        let filteredVouchers = vouchers.filter(voucher=>{
          return voucher.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setVouchers(filteredVouchers);
      }
    } */

    const [vouchers, setVouchers] = useState([
        
              {
                "articleNo": "vc-0001",
                "name": "kp50",
                "description": "restaurant by Kulwitzer See",
                "price": 49.99,
                "category": "other"
              },
              {
                "articleNo": "vc-0002",
                "name": "kp20",
                "description": "schneiderie",
                "price": 15,
                "category": "tourism"
              },
              {
                "articleNo": "vc-0003",
                "name": "kp10",
                "description": "Mohammed's Kebabi",
                "price": 10,
                "category": "sport"
              },
              {
                "articleNo": "vc-0004",
                "name": "kp5",
                "description": "Leckerei biem Bekerei",
                "price": 5,
                "category": "hobby"
              }
         
            ])
    return (
        <div className="vouchers-page">

<div id="myBtnContainer">
    <button class="btn /* active */" onclick="" > Show all</button>
    <button class="btn" value="" onClick={console.log(vouchers.map((element) =>element.category))}> Gastronomy </button>
    <button class="btn" value="entertainment" onClick={(e) => (console.log(e.target.value))}> Entertainment</button>
    <button class="btn" value="beauty" onClick=""> Beauty</button>
    <button class="btn" value="tourism" onClick=""> Tourism</button>
    <button class="btn" value="sport" onClick=""> Sport</button>
    <button class="btn" value="hobby" onClick=""> Hobby</button>
    <button class="btn" value="other" onClick=""> Other</button>

</div>
         
            {/* <input Change={(event)=>filterVouchers(event)} placeholder="Search..."/>
            <Filter/>
             
            {vouchers.map((voucher, index) => (
              <Card voucher={voucher} key={index}/>
            ))} */}
           
</div>
    )
}



export default VouchersPage;
