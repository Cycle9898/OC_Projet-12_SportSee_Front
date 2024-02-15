/*
Function that construct and return URL to fetch data, according to the query type (query user's performances, activity or...)
*/
function defineURL(queryType: string, id: number): string {
	switch (queryType) {
		case "userInfos":
			return `${process.env.REACT_APP_API_URL}/user/${id}`;

		case "userActivity":
			return `${process.env.REACT_APP_API_URL}/user/${id}/activity`;

		case "userAverageSessions":
			return `${process.env.REACT_APP_API_URL}/user/${id}/average-sessions`;

		case "userPerformance":
			return `${process.env.REACT_APP_API_URL}/user/${id}/performance`;

		default:
			throw new Error("Unknown query type");
	}
}

export default defineURL;
