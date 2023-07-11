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
    _firstName: string;
    _dailyScore: number;
    _keyData: { calorieCount: number,proteinCount: number,carbohydrateCount: number,lipidCount: number };

    constructor(data: InUserInfos) {
        this._firstName = data.userInfos.firstName;
        this._dailyScore = data.score ?? data.todayScore;
        this._keyData = data.keyData;
    }

    getData() {
        return { firstName: this._firstName,dailyScore: this._dailyScore,keyData: this._keyData };
    }
}

class FormatFetchedUserActivity {
    _sessions: { day: string,kilogram: number,calories: number }[];

    constructor(data: InUserActivity) {
        this._sessions = data.sessions;
    }

    getData() {
        return [...this._sessions];
    }
}

class FormatFetchedUserAverageSessions {
    _sessions: { day: number,sessionLength: number,weekDay?: string }[];

    constructor(data: InUserAverageSessions) {
        this._sessions = data.sessions;
    }

    getData() {
        //add the first letter of week day, corresponding to day number, to each object and return the new array
        const weekDays: string[] = ["L","M","M","J","V","S","D"]
        this._sessions.forEach((obj) => obj.weekDay = weekDays[obj.day - 1]);

        return [...this._sessions];
    }
}

class FormatFetchedUserPerformance {
    _data: { value: number,kind: number,formattedKind?: string }[];

    constructor(data: InUserPerformance) {
        this._data = data.data;
    }

    getData() {
        //add a formatted "kind" property to each object and return the new array
        const formattedKindArray: string[] = ["Cardio","Énergie","Endurance","Force","Vitesse","Intensité"];
        this._data.forEach((obj) => obj.formattedKind = formattedKindArray[obj.kind - 1]);

        return [...this._data];
    }
}