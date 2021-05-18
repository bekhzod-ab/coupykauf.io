import { useState } from "react"
import {useContext} from "react"
import SellerContext from "../sellerContext/useContext.js"
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

    const {vouchers} = useContext(SellerContext);
    
    const [pointer, setPointer] = useState("")        
    const filtered = vouchers.filter((el) => el.category === pointer)
         
    return (
        <div className="vouchers-page">

          <div id="myBtnContainer">
              <button class="btn /* active */" onClick={console.log(vouchers.map((element) =>element.category))}> Show all</button>
              <button class="btn" value="gastronomy" onClick={(e) => (setPointer(e.target.value))}> Gastronomy </button>
              <button class="btn" value="entertainment" onClick={(e) => (setPointer(e.target.value))}> Entertainment</button>
              <button class="btn" value="beauty" onClick={(e) => (setPointer(e.target.value))}> Beauty</button>
              <button class="btn" value="tourism" onClick={(e) => (setPointer(e.target.value))}> Tourism</button>
              <button class="btn" value="sport" onClick={(e) => (setPointer(e.target.value))}> Sport</button>
              <button class="btn" value="hobby" onClick={(e) => (setPointer(e.target.value))}> Hobby</button>
              <button class="btn" value="other" onClick={(e) => (setPointer(e.target.value))}> Other</button>

          </div>
          

          <div>
          {filtered.map((voucher,index) => (
               <Card voucher={voucher} key={index}/>
  
              ))}
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
