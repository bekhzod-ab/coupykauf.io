const Card = ({voucher}) => {
    return (  
        <div className="card">

        <div className="profile-sidebar">
          <img src={voucher.gallery_Url1} alt=""/>
          <div> isjfsfjslfjlsd</div>
          
        </div>
        <div className="profile-main">
          <h2>{ voucher.company_name}</h2>
          <p className="message">{voucher.description}</p>
          
        </div>
        

      </div>
    );
}
 
export default Card;