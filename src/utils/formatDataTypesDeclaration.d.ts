/*
Types declaration for FormatFetchedData.ts file 's classes
*/
export type InUserInfos =
    Record<string,number> & {
        id: number;
        userInfos: { firstName: string,lastName: string,age: number };
        keyData: { calorieCount: number,proteinCount: number,carbohydrateCount: number,lipidCount: number };
    }

export type InUserActivity = {
    userId: number;
    sessions: { day: string,kilogram: number,calories: number }[];
}

export type InUserAverageSessions = {
    userId: number;
    sessions: { day: number,sessionLength: number }[];
}

export type InUserPerformance = {
    userId: number;
    kind: { [key: string]: string };
    data: { value: number,kind: number }[];
}