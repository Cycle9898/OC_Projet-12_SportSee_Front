import { useContext } from "react";
import { UserIDContext } from "../utils/Context";
import mainLogo from "../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";

/* 
React component that represent the Profile Page
*/
function HomePage() {
	//Hooks related
	const setUserID = useContext(UserIDContext).setUserID;
	const navigate = useNavigate();

	const handleUserClick = (id?: number) => {
		//set id if it's provided (API data) and/or redirect to profile page
		id && setUserID(id);
		navigate("/profile");
	};

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
					{process.env.REACT_APP_API_URL ? (
						<>
							<button onClick={() => handleUserClick(12)}>
								Karl
							</button>

							<button onClick={() => handleUserClick(18)}>
								Cecilia
							</button>
						</>
					) : (
						<button onClick={() => handleUserClick()}>
							Utilisateur factice
						</button>
					)}
				</div>
			</main>
		</>
	);
}

export default HomePage;
