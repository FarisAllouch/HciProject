import "./Profile.css";
import HumanIcon from '../../assets/icons/human.svg';
import Arrow from '../../assets/icons/arrow.svg';
import { useNavigate } from "react-router-dom";


function Profile() {

    const navigate = useNavigate();

    return (
        <div className="Profile">
            <>
                <img className="pfp" src={HumanIcon} alt="logo" />
                <h2 className="username">Username</h2>
                <p className="info">Sarajevo, BiH</p>
            </>
            <div className="choices">
                <div className="choice">
                    <p>Edit Profile</p>
                    <img src={Arrow} alt="" />
                </div>
                <div className="choice">
                    <p>Favorites</p>
                    <img src={Arrow} alt="" />
                </div>
                <div className="choice">
                    <p>Settings</p>
                    <img src={Arrow} alt="" />
                </div>
                <div className="choice">
                    <p>Help</p>
                    <img src={Arrow} alt="" />
                </div>
                <div className="choice" onClick={() => navigate("/login")}>
                    <p>Log out</p>
                    <img src={Arrow} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Profile;
