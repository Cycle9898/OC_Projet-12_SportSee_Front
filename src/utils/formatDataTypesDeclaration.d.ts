/*
Types declaration for FormatFetchedData.ts file 's classes and hooks.tsx file
*/
export type InUserInfos =
    Record<string,number> & {
        id: number;
        userInfos: { firstName: string,lastName: string,age: number };
        keyData: { calorieCount: number,proteinCount: number,carbohydrateCount: number,lipidCount: number };
    }

export type InUserActivity = {
    userId: number;
    sessions: { day: string,kilogram: number,calories: number,formattedDay?: string }[];
}

export type InUserAverageSessions = {
    userId: number;
    sessions: { day: number,sessionLength: number,weekDay?: string }[];
}

export type InUserPerformance = {
    userId: number;
    kind: { [key: string]: string };
    data: { value: number,kind: number,formattedKind?: string }[];
}

export type UserInfoObj = {
    firstName: string;
    dailyScore: number;
    keyData: { calorieCount: number,proteinCount: number,carbohydrateCount: number,lipidCount: number }
}

export type UserActivityObj = {
    day: string;
    kilogram: number;
    calories: number;
}

export type UserAverageSessionsObj = {
    day: number;
    sessionLength: number;
    weekDay: string;
}

export type UserPerformanceObj = {
    value: number;
    kind: number;
    formattedKind: string;
}