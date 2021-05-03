const Card = ({voucher}) => {
    return (  
        <div className="card">

        <div className="profile-sidebar">
          <img src="https://i.pravatar.cc/125" alt=""/>
          
        </div>
        <div className="profile-main">
          <h2>{ voucher.description}</h2>
          <p className="description">{ voucher.name }</p>
          <p className="message">{voucher.price}</p>
          
        </div>
        

      </div>
    );
}
 
export default Card;