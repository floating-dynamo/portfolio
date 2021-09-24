import "./Navbar.css"
import { } from "@ant-design/icons"
import Logo from "../images/SridharLogo (3).png";


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <img src={Logo} alt="Logo" className="navbar-brand-logo" />
            </div>
            <div className="navbar-items">
                <h4> Portfolio</h4>
                <h4>About</h4>
                <h4>Contact</h4>
            </div>
        </div>
    )
}

export default Navbar
