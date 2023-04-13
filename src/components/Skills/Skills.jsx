import React from 'react';
import reactPic from '../../assets/react.jpg';
import compPic from '../../assets/comp.jpg';

import goatPic from '../../assets/goat.jpg';
import girlPic from '../../assets/girl.jpg';

import Card from '../Card'
const Skills = () => {
    console.log("Hej från Skills")
    const skillsData = [
        /*         {
                    upperPic: goatPic,
                    middlePic: girlPic,
                    headline: "Good game",
                    description: "If you love goats as much as she does, go vegan today.",
                    buttonText: "View more",
                    buttonLink: "/"
                },
                {
                    upperPic: girlPic,
                    middlePic: goatPic,
                    headline: "Good game",
                    description: "If you love goats as much as she does, go vegan today.",
                    buttonText: "View more",
                    buttonLink: "/"
                }, */
        {
            upperPic: compPic,
            middlePic: reactPic,
            headline: "React Portfolio",
            description: "Please behold my amazing React portfolio, showcasing my immense skills.",
            buttonText: "View more",
            buttonLink: "/"
        },
        {
            upperPic: compPic,
            middlePic: reactPic,
            headline: "React Portfolio",
            description: "Please behold my amazing React portfolio, showcasing my immense skills.",
            buttonText: "View more",
            buttonLink: "/"
        },
        {
            upperPic: compPic,
            middlePic: reactPic,
            headline: "React Portfolio",
            description: "Please behold my amazing React portfolio, showcasing my immense skills.",
            buttonText: "View more",
            buttonLink: "/"
        },
        {
            upperPic: compPic,
            middlePic: reactPic,
            headline: "React Portfolio",
            description: "Please behold my amazing React portfolio, showcasing my immense skills.",
            buttonText: "View more",
            buttonLink: "/"
        },
        {
            upperPic: compPic,
            middlePic: reactPic,
            headline: "React Portfolio",
            description: "Please behold my amazing React portfolio, showcasing my immense skills.",
            buttonText: "View more",
            buttonLink: "/"
        },
        {
            upperPic: compPic,
            middlePic: reactPic,
            headline: "React Portfolio",
            description: "Please behold my amazing React portfolio, showcasing my immense skills.",
            buttonText: "View more",
            buttonLink: "/"
        },
        {
            upperPic: compPic,
            middlePic: reactPic,
            headline: "React Portfolio",
            description: "Please behold my amazing React portfolio, showcasing my immense skills.",
            buttonText: "View more",
            buttonLink: "/"
        },
        {
            upperPic: compPic,
            middlePic: reactPic,
            headline: "React Portfolio",
            description: "Please behold my amazing React portfolio, showcasing my immense skills.",
            buttonText: "View more",
            buttonLink: "/"
        },
        {
            upperPic: compPic,
            middlePic: reactPic,
            headline: "React Portfolio",
            description: "Please behold my amazing React portfolio, showcasing my immense skills.",
            buttonText: "View more",
            buttonLink: "/"
        },
        {
            upperPic: compPic,
            middlePic: reactPic,
            headline: "React Portfolio",
            description: "Please behold my amazing React portfolio, showcasing my immense skills.",
            buttonText: "View more",
            buttonLink: "/"
        },
        {
            upperPic: compPic,
            middlePic: reactPic,
            headline: "React Portfolio",
            description: "Please behold my amazing React portfolio, showcasing my immense skills.",
            buttonText: "View more",
            buttonLink: "/"
        },
        {
            upperPic: compPic,
            middlePic: reactPic,
            headline: "React Portfolio",
            description: "Please behold my amazing React portfolio, showcasing my immense skills.",
            buttonText: "View more",
            buttonLink: "/"
        },
        {
            upperPic: compPic,
            middlePic: reactPic,
            headline: "React Portfolio",
            description: "Please behold my amazing React portfolio, showcasing my immense skills.",
            buttonText: "View more",
            buttonLink: "/"
        },
        {
            upperPic: compPic,
            middlePic: reactPic,
            headline: "React Portfolio",
            description: "Please behold my amazing React portfolio, showcasing my immense skills.",
            buttonText: "View more",
            buttonLink: "/"
        },
    ];


    return (
        <>
            {skillsData.map(skill => <Card {...skill} />)}
        </>

    )
}

export default Skills;