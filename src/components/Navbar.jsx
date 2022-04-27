import "./Navbar.css"
import { } from "@ant-design/icons"
import Logo from "../images/SridharLogo.png";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-brand">
               <Link to="/"><img src={Logo} alt="Logo" className="navbar-brand-logo" /></Link> 
            </div>
            <div className="navbar-items">
                <Link to="/portfolio" className="navbar-links"><h4> Portfolio</h4></Link>
                <Link to="/about"  className="navbar-links"><h4>About</h4></Link> 
                <h4>Contact</h4>
            </div>
        </div>
    )
}

export default Navbar
