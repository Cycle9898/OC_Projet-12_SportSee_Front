import mainLogo from "../assets/logo/logo.png";

/* 
React component that represent the Profile Page
*/
function HomePage() {
	return (
		<>
			<main className="Home-main">
				<div className="Home-main__logo">
					<img src={mainLogo} alt="SportSee logo" />
				</div>

				<h1>
					Choisissez un utilisateur pour accéder automatiquement à son
					profil
				</h1>

				<div className="Home-main__buttons">
					<button>Karl</button>
					<button>Cecilia</button>
				</div>
			</main>
		</>
	);
}

export default HomePage;
