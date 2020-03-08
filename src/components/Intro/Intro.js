import React from 'react'

import { IntroContainer, Heading } from './Intro.styles'

const Intro = () => {
    return (
        <IntroContainer><span>Hi, I'm</span>
            <Heading>
                Fabian Suffield
        </Heading>
                <span>and I develop web apps using</span>
        </IntroContainer>
    )
}

export default Intro