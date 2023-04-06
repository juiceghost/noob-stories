import React from 'react';
import reactPic from '../../assets/react.jpg';
import compPic from '../../assets/comp.jpg';

const Skills = () => {
    const skillsData = [
        {
            upperPic: compPic,
            middlePic: reactPic,
            headline: "React Portfolio",
            description: "Please behold my amazing React portfolio, showcasing my immense skills.",
            buttonText: "View more",
            buttonLink: "/"
        }
    ];


    return (
        <>
            {skillsData.map(skill => <Card {...skill} />)}
        </>

    )
}