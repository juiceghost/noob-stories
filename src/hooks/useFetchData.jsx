import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Denna custom hook ska hämta info om repos från Github
// 

export const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axios(url);
                setData(result.data);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, []);

    return [{ data, isLoading, isError }];
}