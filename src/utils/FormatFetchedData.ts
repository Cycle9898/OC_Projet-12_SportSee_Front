import type { InUserInfos,InUserActivity,InUserAverageSessions,InUserPerformance } from "./formatDataTypesDeclaration";

/* 
Factory Design Pattern (class) used to format fetched data (from an API or mocked data) according to the data source (query type)
*/
class FormatFetchedData {
    constructor(response: any,queryType: string) {
        switch (queryType) {
            case "userInfos":
                return new FormatFetchedUserInfos(response.data);

            case "userActivity":
                return new FormatFetchedUserActivity(response.data);

            case "userAverageSessions":
                return new FormatFetchedUserAverageSessions(response.data);

            case "userPerformance":
                return new FormatFetchedUserPerformance(response.data);

            default:
                throw new Error("Unknown query type");
        }
    }
}

export default FormatFetchedData;

class FormatFetchedUserInfos {
    firstName: string;
    dailyScore: number;
    keyData: { calorieCount: number,proteinCount: number,carbohydrateCount: number,lipidCount: number };

    constructor(fetchedData: InUserInfos) {
        this.firstName = fetchedData.userInfos.firstName;
        this.dailyScore = fetchedData.score ?? fetchedData.todayScore;
        this.keyData = fetchedData.keyData;
    }
}

class FormatFetchedUserActivity {
    sessions: { day: string,kilogram: number,calories: number }[];

    constructor(fetchedData: InUserActivity) {
        this.sessions = fetchedData.sessions.map((session) => {
            //replace all YYYY-MM-DD date strings to DD/MM ones
            const formattedDateArray = session.day.split("-");
            formattedDateArray.reverse().pop();
            session.day = formattedDateArray.join("/");

            return session;
        });
    }
}

class FormatFetchedUserAverageSessions {
    sessions: { day: number,sessionLength: number,weekDay?: string }[];

    constructor(fetchedData: InUserAverageSessions) {
        this.sessions = fetchedData.sessions.map((session) => {
            //add the first letter of week day, corresponding to day number, to each object and return the new array
            const weekDays: string[] = ["L","M","M","J","V","S","D"];
            session.weekDay = weekDays[session.day - 1];

            return session;
        });
    }
}

class FormatFetchedUserPerformance {
    data: { value: number,kind: number,formattedKind?: string }[];

    constructor(fetchedData: InUserPerformance) {
        this.data = fetchedData.data.map((dataObj) => {
            //add a formatted "kind" property to each object and return the new array
            const formattedKindArray: string[] = ["Cardio","Énergie","Endurance","Force","Vitesse","Intensité"];
            dataObj.formattedKind = formattedKindArray[dataObj.kind - 1];

            return dataObj;
        });
    }
}