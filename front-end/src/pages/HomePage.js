import "./homepage.css" /* ? */

const HomePage = () => {
    return (
        <div className="home-page">
            
            <landing> 

            <h1>Coupy<wbr/>Kauf</h1>
            <p> <b> WANT TO SUPPORT LOCAL BUSINESSES?</b><br/><br/>
            PURCHASE VOUCHERS FOR YOU AND YOUR LOVED ONES</p> 

            {/* this is a link-button */}
            <form action="/vouchers">
                <button type="submit" className="btnHP">FIND VOUCHERS</button>
            </form>
            </landing>
            <div>
                <p>ARE YOU A LOCAL BUSINESS? <br/> </p>
                    <form action="/signup">
                    <button className="btnHP">REGISTER YOUR COMPANY</button>
            </form>
            </div>

        </div>
    )
}

export default HomePage;
