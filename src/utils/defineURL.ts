/*
Function that construct and return URL to fetch data, according to the query type (query user's performances, activity or...)
and data source (API or mocked data)
*/
function defineURL(queryType: string): string {
	let url: string = "";

	switch (queryType) {
		case "userInfos":
			process.env.REACT_APP_MOCK_API === "MOCK"
				? (url = `${process.env.REACT_APP_MOCK_URL}/data/mockedUserInfos.json`)
				: (url = `${process.env.REACT_APP_API_URL}/user/${process.env.REACT_APP_API_USER_ID}`);
			break;

		case "userActivity":
			process.env.REACT_APP_MOCK_API === "MOCK"
				? (url = `${process.env.REACT_APP_MOCK_URL}/data/mockedUserActivity.json`)
				: (url = `${process.env.REACT_APP_API_URL}/user/${process.env.REACT_APP_API_USER_ID}/activity`);
			break;

		case "userAverageSessions":
			process.env.REACT_APP_MOCK_API === "MOCK"
				? (url = `${process.env.REACT_APP_MOCK_URL}/data/mockedUserAverageSessions.json`)
				: (url = `${process.env.REACT_APP_API_URL}/user/${process.env.REACT_APP_API_USER_ID}/average-sessions`);
			break;

		case "userPerformance":
			process.env.REACT_APP_MOCK_API === "MOCK"
				? (url = `${process.env.REACT_APP_MOCK_URL}/data/mockedUserPerformance.json`)
				: (url = `${process.env.REACT_APP_API_URL}/user/${process.env.REACT_APP_API_USER_ID}/performance`);
			break;

		default:
			url = "";
	}

	return url;
}

export default defineURL;
