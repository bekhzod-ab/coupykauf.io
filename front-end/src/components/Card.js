import {Link} from "react-router-dom"

const Card = ({voucher}) => {
    return (  
        <div className="card">

        <div className="profile-sidebar">
          <img src={voucher.images_array[1]} alt=""/>
        </div>
        <div className="profile-main">
          <h2>{ voucher.company_name}</h2>
          <p className="message">{voucher.description}</p>
          <Link to={`/vouchers/${voucher.company_name}`}>More</Link><li/>
        </div>
        

      </div>
    );
}
 
export default Card;