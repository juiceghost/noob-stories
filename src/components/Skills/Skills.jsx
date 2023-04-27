import React, { useEffect, useState } from 'react';
import axios from 'axios';
/* import reactPic from '../../assets/react.jpg';
import compPic from '../../assets/comp.jpg';
 */
import goatPic from '../../assets/goat.jpg';
import girlPic from '../../assets/girl.jpg';

import Card from '../Card'
const Skills = () => {
    console.log("Hej från Skills")
    const [skillsData, setSkillsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'skills.json',
            );
            setSkillsData(result.data);
        };
        fetchData();
    }, []);

    // Vi måste hämta skillsData in i komponenten

    return (
        <>
            {skillsData.map(skill => <Card {...skill} />)}
        </>

    )
}

export default Skills;