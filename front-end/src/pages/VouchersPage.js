import { useState } from "react"
import {useContext} from "react"
import SellerContext from "../sellerContext/useContext.js"
import "../pages/vouchers-page.css"
import Card from "../components/Card";
/* import Filter from "../components/Filter"; */
import "./filter-style.css";



const VouchersPage = () => {

    
    const {vouchers} = useContext(SellerContext);
    
<<<<<<< HEAD
    const [pointer, setPointer] = useState("")                         
    const filtered = vouchers.filter((el) => el.category === pointer || pointer === "")
         
=======
    const [pointer, setPointer] = useState("")        
    const filtered = vouchers.filter((el) => el.category === pointer)
    const [showAllClicked, setShowAllClicked] = useState(false)
   /*  console.log(filtered)
    console.log(vouchers) */
>>>>>>> 5bdc516b5779fd0aaa654c1de6fefd3f2666cdc3
    return (
        <div className="vouchers-page">

          <div id="myBtnContainer">
<<<<<<< HEAD
              <button class="btn" value="" onClick={(e) => setPointer(e.target.value)}> Show all</button>
              <button class="btn" value="gastronomy" onClick={(e) => (setPointer(e.target.value))}> Gastronomy </button>
              <button class="btn" value="entertainment" onClick={(e) => (setPointer(e.target.value))}> Entertainment</button>
              <button class="btn" value="beauty" onClick={(e) => (setPointer(e.target.value))}> Beauty</button>
              <button class="btn" value="tourism" onClick={(e) => (setPointer(e.target.value))}> Tourism</button>
              <button class="btn" value="sport" onClick={(e) => (setPointer(e.target.value))}> Sport</button>
              <button class="btn" value="hobby" onClick={(e) => (setPointer(e.target.value))}> Hobby</button>
              <button class="btn" value="other" onClick={(e) => (setPointer(e.target.value))}> Other</button>
=======
                <button class="btn" onClick={setShowAllClicked(true)} > Show all</button>
                <button class="btn" value="gastronomy" onClick={(e) => (setPointer(e.target.value))}> Gastronomy </button>
                <button class="btn" value="entertainment" onClick={(e) => (setPointer(e.target.value))}> Entertainment</button>
                <button class="btn" value="beauty" onClick={(e) => (setPointer(e.target.value))}> Beauty</button>
                <button class="btn" value="tourism" onClick={(e) => (setPointer(e.target.value))}> Tourism</button>
                <button class="btn" value="sport" onClick={(e) => (setPointer(e.target.value))}> Sport</button>
                <button class="btn" value="hobby" onClick={(e) => (setPointer(e.target.value))}> Hobby</button>
                <button class="btn" value="other" onClick={(e) => (setPointer(e.target.value))}> Other</button>
>>>>>>> 5bdc516b5779fd0aaa654c1de6fefd3f2666cdc3

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
