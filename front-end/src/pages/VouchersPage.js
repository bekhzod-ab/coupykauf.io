import { useState } from "react"
import {useContext} from "react"
import SellerContext from "../sellerContext/useContext.js"
import "../pages/vouchers-page.css"
import Card from "../components/Card";
/* import Filter from "../components/Filter"; */
import "./filter-style.css";



const VouchersPage = () => {


    const {vouchers} = useContext(SellerContext);
    
    const [pointer, setPointer] = useState("")        
    const filtered = vouchers.filter((el) => el.category === pointer)
    const [showAllClicked, setShowAllClicked] = useState(false)
   /*  console.log(filtered)
    console.log(vouchers) */
    return (
        <div className="vouchers-page">

          <div id="myBtnContainer">
                <button class="btn" onClick={setShowAllClicked(true)} > Show all</button>
                <button class="btn" value="gastronomy" onClick={(e) => (setPointer(e.target.value))}> Gastronomy </button>
                <button class="btn" value="entertainment" onClick={(e) => (setPointer(e.target.value))}> Entertainment</button>
                <button class="btn" value="beauty" onClick={(e) => (setPointer(e.target.value))}> Beauty</button>
                <button class="btn" value="tourism" onClick={(e) => (setPointer(e.target.value))}> Tourism</button>
                <button class="btn" value="sport" onClick={(e) => (setPointer(e.target.value))}> Sport</button>
                <button class="btn" value="hobby" onClick={(e) => (setPointer(e.target.value))}> Hobby</button>
                <button class="btn" value="other" onClick={(e) => (setPointer(e.target.value))}> Other</button>

          </div>
          

          <ul >
            {setShowAllClicked ? 
            <>{vouchers.map((voucher,index) => {
                        <Card voucher={voucher} key={index}></Card>            
                        })}</>
        :
        <>{filtered.map((voucher,index) => {
                <Card voucher={voucher} key={index}></Card>            
            })}
        </>}
          </ul>

           
</div>
    )
}



export default VouchersPage;
