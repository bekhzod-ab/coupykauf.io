import {Link} from "react-router-dom"
import { FaFacebook, FaInstagram } from "react-icons/fa"

const Card = ({voucher}) => {
    return (  
        <div className="card">

        <div className="profile-sidebar">
          <img src={voucher.images_array[0]} alt=""/>
          
          <p>P: {voucher.phone} </p>
          <p>A: {voucher.address} </p>
          <a href="https://www.facebook.com/"><FaFacebook className="iconOnCard" /></a> 
          <a href="https://instagram.com"> <FaInstagram className="iconOnCard"/> </a> 
        </div>
        <div className="profile-main">
          <h2>{ voucher.company_name}</h2>
          <p className="message">{voucher.description}</p>
        <Link className="btnCard" to={`/vouchers/${voucher.company_name}`}>BUY</Link><li/>
          
        </div>
        

      </div>
    );
}

export default Card;