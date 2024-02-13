import mainLogo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";

/* 
React component that represent the header of the page
*/
function Header() {
	return (
		<header className="header">
			<div className="header__logo">
				<img src={mainLogo} alt="SportSee logo" />
			</div>

			<nav className="header__nav">
				<ul>
					<li>
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<Link to="/profile">Profil</Link>
					</li>
					<li>
						<Link to="#">Réglages</Link>
					</li>
					<li>
						<Link to="#">Communauté</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
