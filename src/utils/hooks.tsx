import { useState,useEffect } from "react";
import axios from "axios";
import defineURL from "./defineURL";
import FormatFetchedData from "./FormatFetchedData";
import type { UserAllData,UserSoloData } from "./formatDataTypesDeclaration";

/* 
Custom hook used to fetch data from the API or mocked data with Axios library.
It fetches data from all available endpoints and store fetched data in an array.
It also handle an error state and a loading state.
*/
export function useFetchData() {
    //to store API or mocked fetched data (all endpoints)
    const [fetchedData,setFetchedData] = useState<UserAllData | []>([]);

    //to store API or mocked error state
    const [error,setError] = useState<boolean>(false);

    //to store if the loading spinner needs to appear or not
    const [isDataLoading,setDataLoading] = useState<boolean>(false);

    useEffect(() => {
        setError(false);

        setDataLoading(true);

        async function fetchData(queryType: string): Promise<UserSoloData | undefined> {
            try {
                //use defineURL, a fonction that return an URL according to to the query type and data source, to fetch data with axios
                const response = await axios.get(defineURL(queryType));

                //Factory class to format fetched data according to query type
                return new FormatFetchedData(response.data,queryType) as UserSoloData;
            }

            catch (error: unknown) {
                setError(true);
                console.log(error);
            }
        }

        //store all query type (user's performances, activity or...) in an array to map on it then handle all mapped promises and store all formatted data
        const allQueryTypes: string[] = ["userInfos","userActivity","userAverageSessions","userPerformance"];

        Promise.all(allQueryTypes.map((queryType: string) => fetchData(queryType)) as unknown as UserAllData)
            .then((allFetchedData: UserAllData) => setFetchedData(allFetchedData))
            .finally(() => setDataLoading(false));
    },[]);

    return { fetchedData,error,isDataLoading };
}