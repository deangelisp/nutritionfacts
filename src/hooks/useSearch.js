import axios from "axios";
import { useQuery } from "react-query";

const getFoodDetails = async ({ queryKey }) => {
    const query = queryKey[1];

    if (!query) {
        return false;
    }

    const baseURL = "https://api.api-ninjas.com/v1/nutrition?query=" + query;

    let data = [];

    await axios
        .get(baseURL, {
            headers: { "X-Api-Key": import.meta.env.VITE_NINJAS_API_KEY },
        })
        .then((response) => {
            data = response?.data;

            if (response?.data?.length) {
                data = response.data[0];
            }
        });

    return data;
};

export const useSearch = (query) => {
    return useQuery(["foodSearchDetails", query], getFoodDetails);
};
