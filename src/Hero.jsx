/* import React from 'react'; */

function Hero(props) {
    console.log(props)
    // props = {text: 'MyHero', myOtherKey: 33}
    const { name, text, myOtherKey } = props
    console.log(text)
    console.log(name)
    console.log(myOtherKey)
    return (
        <h1>{text}, {name}: {myOtherKey}</h1>
    )
}

export default Hero