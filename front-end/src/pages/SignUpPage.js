const SignUpPage = () => {

    return (
        <div className="signup-page"> 
            <h2> Welcome to the Sign Up Page </h2>
            <form action="post">
                <label htmlFor="name">Name:</label>
                <input type="text"/> 
                <br/>
                <label htmlFor="Email">email:</label>
                <input type="email"/> 
                <br/>
                <label htmlFor="password">password:</label>
                <input type="password"/> 
                <br/>
            </form>
            <div className="signup-container"> </div> 
        </div> 
    )
}

export default SignUpPage