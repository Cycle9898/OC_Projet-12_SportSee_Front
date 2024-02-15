import { useState, useEffect, useContext } from "react";
import axios from "axios";
import defineURL from "./defineURL";
import FormatFetchedData from "./FormatFetchedData";
import type { UserAllData, UserSoloData } from "./formatDataTypesDeclaration";
import { UserIDContext } from "./Context";
import handleMockedData from "./handleMockedData";

/* 
Custom hook used to fetch data from the API with Axios library or use mocked data.
It fetches data from all available endpoints and store fetched data in an array.
It also handle an error state and a loading state.
*/
export function useFetchData() {
	//to store data (all endpoints)
	const [fetchedData, setFetchedData] = useState<UserAllData | []>([]);

	//to store error state
	const [error, setError] = useState<boolean>(false);

	//to store if the loading spinner needs to appear or not
	const [isDataLoading, setDataLoading] = useState<boolean>(false);

	// get user ID from the Context
	const userID = useContext(UserIDContext).userID;

	useEffect(() => {
		setError(false);

		setDataLoading(true);

		async function handleDataQuery(
			queryType: string
		): Promise<UserSoloData | undefined> {
			try {
				//determine if mocked data are used or not with env variable et use the right function accordingly
				const response = process.env.REACT_APP_API_URL
					? await axios.get(defineURL(queryType, userID))
					: handleMockedData(queryType);

				//Factory class to format fetched data according to query type
				return new FormatFetchedData(
					response.data,
					queryType
				) as UserSoloData;
			} catch (error: unknown) {
				setError(true);
				console.error(error);
			}
		}

		//resolve all Promises with an array of all query types (user's performances, activity or...)
		const allQueryTypes: string[] = [
			"userInfos",
			"userActivity",
			"userAverageSessions",
			"userPerformance"
		];

		Promise.all(
			allQueryTypes.map((queryType: string) =>
				handleDataQuery(queryType)
			) as unknown as UserAllData
		)
			.then((allFetchedData: UserAllData) =>
				setFetchedData(allFetchedData)
			)
			.finally(() => setDataLoading(false));
	}, [userID]);

	return { fetchedData, error, isDataLoading };
}
