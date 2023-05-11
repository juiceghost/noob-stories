import React, { useState, useEffect } from 'react';

// Denna custom hook ska hämta info om repos från Github
// 

export const useGithubApi = () => {
    const [githubData, setGithubData] = useState([]);
    const [url, setUrl] = useState(
        'https://api.github.com/users/juiceghost/repos',
    );
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        console.log("Hej från useGithubApi")
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            console.log("Hej innifrån custom hook 1")
            try {
                const result = await axios(url);
                console.log("Hej innifrån custom hook 2")
                console.log(result)
                setGithubData(result.data);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, []);

    return [{ githubData, isLoading, isError }, setUrl];
}