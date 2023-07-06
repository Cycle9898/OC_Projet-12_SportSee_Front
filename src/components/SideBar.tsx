import yogaIcon from '../assets/icon/yoga-icon.svg';
import swimmingIcon from '../assets/icon/swimming-icon.svg';
import cyclingIcon from '../assets/icon/cycling-icon.svg';
import bodybuildingIcon from '../assets/icon/bodybuilding-icon.svg';

/* 
React component that represent the left Side Bar
*/
function SideBar() {
    //Store all icon URLs in an array to map on it later
    const iconArray = [yogaIcon,swimmingIcon,cyclingIcon,bodybuildingIcon];

    return (<div className="sidebar">
        <nav className="sidebar__nav">
            {iconArray.map((icon,index) => {
                return (<a key={index} href="/">
                    <img src={icon} alt="" />
                </a>)
            })}
        </nav>

        <p>Copyright, SportSee 2023</p>
    </div>);
}

export default SideBar;