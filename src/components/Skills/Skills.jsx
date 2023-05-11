import React, { useEffect, useState } from 'react';
import axios from 'axios';
/* import reactPic from '../../assets/react.jpg';
import compPic from '../../assets/comp.jpg';
 */
import { useGithubApi } from '../../hooks/useGithubApi';
import goatPic from '../../assets/goat.jpg';
import girlPic from '../../assets/girl.jpg';

import Card from '../Card'
const Skills = () => {
    console.log("Hej från Skills")
    const [skillsData, setSkillsData] = useState([]);
    /* const [githubData, setGithubData] = useState([]); */
    const [{ githubData, isLoading, isError }] = useGithubApi();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'skills.json',
            );
            setSkillsData(result.data);
        };
        fetchData();

        /* const fetchGHData = async () => {
            const result = await axios(
                'https://api.github.com/users/juiceghost/repos',
            );
            setGithubData(result.data);
        };
        fetchGHData(); */

    }, []);

    // Vi måste hämta skillsData in i komponenten
    function getURL(repoId) {
        // givet ett repoId (ID från github api)
        // returnera html_url:en från GithubData som matchar det id:t
        let repo = githubData.find(item => item.id === repoId)
        return repo ? repo.html_url : undefined
    }

    function getDescription(repoId) {
        let repo = githubData.find(item => item.id === repoId)
        return repo ? repo.description : undefined
    }
    return (
        <>
            {skillsData.map(skill => <Card key={skill.id}  {...skill} url={getURL(skill.id)} githubDescription={getDescription(skill.id)} />)}
        </>

    )
}

export default Skills;