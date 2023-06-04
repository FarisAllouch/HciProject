import "./Login.css";
import HumanIcon from "../../assets/icons/person.svg";
import Password from "../../assets/icons/password.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Google from "../../assets/icons/google.svg";
import Logo from "../../assets/icons/logo.svg";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    return (
        <div className="Login">
            <div className="logo">
                <img src={Logo} alt="" />
                <h1>PIK</h1>
            </div>
            <div className="form">
                <h2>Login</h2>
                <div className="input">
                    <img src={HumanIcon} />
                    <input type="text" name="username" placeholder="username" />
                </div>
                <div className="input">
                    <img src={Password} />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                    />
                </div>
                <div className="select-boxes">
                    <div className="remember-me">
                        <input
                            type="checkbox"
                            id="rememberme"
                            name="rememberme"
                        />
                        <p>Remember me</p>
                    </div>
                    <p className="cursor-pointer">Forgot Password?</p>
                </div>
                <div className="login-btn" onClick={() => navigate("/")}>
                    <h2>Login with your account</h2>
                </div>
                <p className="login-with">Login with</p>
                <div className="icons">
                    <div className="icon">
                        <img src={Facebook} alt="fb" />
                    </div>
                    <div className="icon">
                        <img src={Google} alt="google" />
                    </div>
                </div>
                <div className="new-user" onClick={() => navigate("/signup")}>
                    <p>New user? Create account</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
