import userActivityData from "../data/mockedUserActivity.json";
import userAverageSessionsData from "../data/mockedUserAverageSessions.json";
import userInfosData from "../data/mockedUserInfos.json";
import userPerformanceData from "../data/mockedUserPerformance.json";

/*
Function that return mocked data, according to the query type (query user's performances, activity or...)
*/
function handleMockedData(queryType: string) {
	switch (queryType) {
		case "userInfos":
			return { data: userInfosData };

		case "userActivity":
			return { data: userActivityData };

		case "userAverageSessions":
			return { data: userAverageSessionsData };

		case "userPerformance":
			return { data: userPerformanceData };

		default:
			throw new Error("Unknown query type");
	}
}

export default handleMockedData;
