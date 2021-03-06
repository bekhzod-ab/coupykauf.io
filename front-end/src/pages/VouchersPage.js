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
    const filtered = vouchers.filter((el) => el.category === pointer || pointer === "")
    
    return (
        <div className="vouchers-page">

          <div className={pointer} id="myBtnContainer">
                <button class="btn" value="" onClick={(e) => setPointer(e.target.value)}> Show all</button>
                <button class="btn" value="gastronomy" onClick={(e) => (setPointer(e.target.value))}> Gastronomy </button>
                <button class="btn" value="entertainment" onClick={(e) => (setPointer(e.target.value))}> Entertainment</button>
                <button class="btn" value="beauty" onClick={(e) => (setPointer(e.target.value))}> Beauty</button>
                <button class="btn" value="tourism" onClick={(e) => (setPointer(e.target.value))}> Tourism</button>
                <button class="btn" value="sport" onClick={(e) => (setPointer(e.target.value))}> Sport</button>
                <button class="btn" value="hobby" onClick={(e) => (setPointer(e.target.value))}> Hobby</button>
                <button class="btn" value="other" onClick={(e) => (setPointer(e.target.value))}> Other</button>

            </div>
            

            <ul >
            
            {filtered.map((voucher,index) => {
                    return <Card voucher={voucher} key={index}></Card>            
                })}
            </ul>

            
</div>
    )
}



export default VouchersPage;




/*              ahmads sulution

const VouchersPage = () => {

    
    const {vouchers} = useContext(SellerContext);
    
    const [pointer, setPointer] = useState("")                         
    const filtered = vouchers.filter((el) => el.category === pointer || pointer === "")
    const setActive = (e) => {
        const btnList = e.target.parentElement.querySelectorAll('button');

        console.log(btnList);
        btnList.forEach(element => {
            element.classList.remove('active')
        });
        e.target.classList.add('active');
       

    }
    return (
        <div className="vouchers-page">

          <div className={pointer} id="myBtnContainer">
                <button className="btn active" value="" onClick={(e ) => {
                    setActive();
                    setPointer(e.target.value)
                }
                    }  > Show all</button>
                <button className="btn" value="gastronomy" onClick={setActive}>Gastronomy</button> 
                <button className="btn" value="entertainment" onClick={setActive}> Entertainment</button>
                <button className="btn" value="beauty" onClick={setActive}> Beauty</button>
                <button className="btn" value="tourism" onClick={setActive}> Tourism</button>
                <button className="btn" value="sport" onClick={setActive}> Sport</button>
                <button className="btn" value="hobby" onClick={setActive}> Hobby</button>
                <button className="btn" value="other" onClick={setActive}> Other</button>

          </div>
          

          <ul >
           
        {filtered.map((voucher,index) => {
                return <Card voucher={voucher} key={index}></Card>            
            })}
          </ul>

           
</div>
    )
}



export default VouchersPage; */