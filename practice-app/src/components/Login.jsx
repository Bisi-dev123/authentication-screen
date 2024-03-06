import "./Login.css";

const Login = () => {
    return (
        <div>
            <h3>Welcome back!</h3>

             {/* Email input */}
            <div>
                <label htmlFor="" >Email</label>
                <input type="text" value="" placeholder="Enter email address" />
            </div>
        </div>
    );
};


export default Login;