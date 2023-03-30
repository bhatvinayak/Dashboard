import "../App.css";
import Dashboard from "./views/Dashboard";
import DashboardIcon from "../assets/icons/DashboardIcon.svg";
import CustomersIcon from "../assets/icons/CustomersIcon.svg";
import SolutionIcon from "../assets/icons/SolutionIcon.svg";
import SettingsIcon from "../assets/icons/SettingsIcon.svg";
import ProfilePic from "../assets/images/profile.jpeg";
import ExitIcon from "../assets/icons/ExitIcon.svg"

const Home = () => {
    return (
        <div className="container">
            <div className="sideNav">
                <div className="logo-container">
                    <div className="logo-top">boosto</div>
                </div>
                <div className="profile">
                    <div><img className="profile-pic" src={ProfilePic} alt="profile"  /></div>
                    <div className="profile-name">Doge Barko</div>
                    <div className="profile-post">CBO</div>
                </div>
                <div className="tabs">
                    <ul className="navOptions">
                        <li className="active"><img className="tabs-logo" src={DashboardIcon} /><span>Dashboard</span></li>
                        <li><img className="tabs-logo" src={CustomersIcon} />Customers</li>
                        <li><img className="tabs-logo" src={SolutionIcon} />Solutions</li>
                        <li><img className="tabs-logo" src={SettingsIcon} />Settings</li>
                    </ul>
                </div>
                <div className="exit">
                    <span><img className="exit-logo" src={ExitIcon} />Exit</span>
                </div>
            </div>
            <div className="activeTab">
                <div>
                    <Dashboard />
                </div>
            </div>
        </div>
    )
}
export default Home