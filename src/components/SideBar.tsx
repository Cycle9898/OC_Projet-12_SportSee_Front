import yogaIcon from "../assets/icon/yoga-icon.svg";
import swimmingIcon from "../assets/icon/swimming-icon.svg";
import cyclingIcon from "../assets/icon/cycling-icon.svg";
import bodybuildingIcon from "../assets/icon/bodybuilding-icon.svg";
import { Link } from "react-router-dom";

/* 
React component that represent the left Side Bar
*/
function SideBar() {
	//Store all icon URLs in an array to map on it later
	const iconArray = [yogaIcon, swimmingIcon, cyclingIcon, bodybuildingIcon];

	return (
		<div className="sidebar">
			<nav className="sidebar__nav">
				{iconArray.map((icon, index) => {
					return (
						<Link key={index} to="#">
							<img src={icon} alt="" />
						</Link>
					);
				})}
			</nav>

			<p>Copyright, SportSee 2023</p>
		</div>
	);
}

export default SideBar;
