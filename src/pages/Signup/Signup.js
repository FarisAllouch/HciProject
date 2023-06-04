import HumanIcon from "../../assets/icons/person.svg";
import Password from "../../assets/icons/password.svg";
import Email from "../../assets/icons/email.svg";

import Logo from "../../assets/icons/logo.svg";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    return (
        <div className="Login">
            <div className="logo">
                <img src={Logo} alt="" />
                <h1>PIK</h1>
            </div>
            <div className="form">
                <h2>Create new account</h2>
                <div className="input">
                    <img src={HumanIcon} />
                    <input type="text" name="username" placeholder="username" />
                </div>
                <div className="input">
                    <img src={Email} />
                    <input type="email" name="email" placeholder="email" />
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
                        <p>I agree to the Terms</p>
                    </div>
                </div>
                <div className="login-btn" onClick={() => navigate("/")}>
                    <h2>Sign up</h2>
                </div>
                <div className="new-user" onClick={() => navigate("/login")}>
                    <p>Already a user? Login</p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
