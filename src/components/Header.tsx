import mainLogo from '../assets/logo/logo.png';

/* 
React component that represent the header of the page
*/
function Header() {
    return (<header className='header'>
        <div className='header__logo'>
            <img src={mainLogo} alt="SportSee logo" />
        </div>

        <nav className='header__nav'>
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/">Profil</a></li>
                <li><a href="/">Réglages</a></li>
                <li><a href="/">Communauté</a></li>
            </ul>
        </nav>
    </header>);
}

export default Header;