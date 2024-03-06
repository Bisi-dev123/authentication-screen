import { Link } from "react-router-dom";
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div>
           <p>This is the landing page of my website</p>

           <Link  className="signingUp" to="signup" >SIGNUP</Link>
           <Link  className="logingIn" to="login" >LOGIN</Link>
        </div>
    );
}

export default LandingPage
