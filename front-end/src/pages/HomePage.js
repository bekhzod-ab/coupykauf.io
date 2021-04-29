import "./homepage.css" /* ? */

const HomePage = () => {
    return (
        <div className="home-page">
            
            <landing> 

            <h1>CoupyKauf</h1>
            <p>Lorem, ipsum dolor sit amet <br/>
            consectetur adipisicing elit. <br/>
            Labore omnis adipisci sit quisquam corporis <br/> dolores nostrum sunt debitis porro incidunt.</p> 

            {/* this is a link-button */}
            <form action="/vouchers">
                <button type="submit">Find Vouchers</button>
            </form>
            </landing>
            <div>
                <p>are you a local business? <br/>
                register your company  </p>
                    <form action="/signup">
                    <button type="submit">here</button>
                    </form>
            </div>

        </div>
    )
}

export default HomePage;
