import caloriesIcon from "../assets/icon/calories-icon.png";
import proteinIcon from "../assets/icon/protein-icon.png";
import carbsIcon from "../assets/icon/carbs-icon.png";
import fatIcon from "../assets/icon/fat-icon.png";
import KeyInfosCard from "./KeyInfosCard";

type Props = {
	keyInfosData: {
		calorieCount: number;
		proteinCount: number;
		carbohydrateCount: number;
		lipidCount: number;
	};
};

export type KeyInfosDataObj = {
	id?: string;
	title: string;
	iconURL: string;
	value: string;
};

/* 
React component that represent the container for the key infos cards
*/
function KeyInfosCardsContainer({ keyInfosData }: Props) {
	//Store all needed data in an array to map on it later
	const keyInfosDataArray: KeyInfosDataObj[] = [
		{
			id: "Cal01",
			title: "Calories",
			iconURL: caloriesIcon,
			value: `${(keyInfosData.calorieCount / 1000).toLocaleString(
				"fr-FR",
				{ minimumFractionDigits: 3 }
			)} kCal`
		},
		{
			id: "Prot02",
			title: "Protéines",
			iconURL: proteinIcon,
			value: `${keyInfosData.proteinCount} g`
		},
		{
			id: "Glu03",
			title: "Glucides",
			iconURL: carbsIcon,
			value: `${keyInfosData.carbohydrateCount} g`
		},
		{
			id: "Lip04",
			title: "Lipides",
			iconURL: fatIcon,
			value: `${keyInfosData.lipidCount} g`
		}
	];

	return (
		<div className="key-info-container">
			{keyInfosDataArray.map(keyInfosData => (
				<KeyInfosCard
					key={keyInfosData.id}
					title={keyInfosData.title}
					iconURL={keyInfosData.iconURL}
					value={keyInfosData.value}
				/>
			))}
		</div>
	);
}

export default KeyInfosCardsContainer;
