import { useState,useEffect } from "react";
import axios from "axios";
import defineURL from "./defineURL";
import FormatFetchedData from "./FormatFetchedData";

/* 
Custom hook used to fetch data from an API or mocked data with Axios library.
It use a string (queryType) to determine which data is needed and will automatically define the right URL (depending on .env variables).
It also handle an error state and a loading state.
*/
export function useFetchData(queryType: string) {
    //to store API or mocked requested data
    const [requestedData,setRequestedData] = useState<any>({});

    //to store API or mocked error state
    const [error,setError] = useState<boolean>(false);

    //to store if the loading spinner needs to appear or not
    const [isDataLoading,setDataLoading] = useState<boolean>(false)

    //construct URL according to the query type and data source(API or mocked data) thanks to defineURL() utility function
    const url: string = defineURL(queryType);

    useEffect(() => {
        setError(false);

        if (url === "") {
            setError(true);
            console.log("Invalid URL: unable to fetch data");
            return;
        }

        setDataLoading(true);

        async function fetchData(): Promise<void> {
            try {
                const response = await axios.get(url);
                const formatResponse: any = new FormatFetchedData(response.data,queryType);
                setRequestedData(formatResponse.getData());
            }

            catch (error: unknown) {
                setError(true);
                console.log(error);
            }

            finally {
                setDataLoading(false);
            }
        }

        //Check if mocked data are used and, if needed, simulate network latency to show loading spinner
        if (url.startsWith("http://localhost:3001")) {
            setTimeout(fetchData,400);
        } else {
            fetchData();
        }

    },[queryType,url])

    return { requestedData,error,isDataLoading };
}