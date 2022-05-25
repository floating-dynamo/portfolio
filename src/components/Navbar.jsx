import "./Navbar.css";
import {} from "@ant-design/icons";
import Logo from "../images/SridharLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar-brand">
				<Link to="/portfolio">
					<img src={Logo} alt="Logo" className="navbar-brand-logo" />
				</Link>
			</div>
			<div className="navbar-items">
				<Link to="/portfolio/portfolio-page" className="navbar-links">
					<h4> Portfolio</h4>
				</Link>
				<Link to="/portfolio/about" className="navbar-links">
					<h4>About</h4>
				</Link>
				<Link to="/portfolio/contact" className="navbar-links">
					<h4>Contact</h4>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
