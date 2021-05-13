import "./homepage.css" /* ? */

const HomePage = () => {
    return (
        <div className="home-page">
            
            <landing> 

            <h1>CoupyKauf</h1>
            <p> Want to support your favourte local businesses?<br/>
            Purchase vouchers to help them survive crises <br/> or <br/>
            purchase gift vouchers for your loved ones and introduce them to your favourite local business</p> 

            {/* this is a link-button */}
            <form action="/vouchers">
                <button type="submit">Find Vouchers</button>
            </form>
            </landing>
            <div>
                <p>are you a local business? <br/> </p>
                    <form action="/signup">
                    <button>register your company</button>
                  </form>
            </div>

        </div>
    )
}

export default HomePage;
