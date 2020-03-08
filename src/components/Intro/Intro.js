import React from 'react'

import { IntroContainer, Heading, StyledSocialContainer } from './Intro.styles'

import { GitHubIcon, LinkedInIcon } from '../Icons/Icons'

const Intro = () => {
    return (
        <IntroContainer><span>Hi, I'm</span>
            <Heading>
                Fabian Suffield
        </Heading>
        <StyledSocialContainer>
        <GitHubIcon color="#f68084"/>
        <LinkedInIcon color="#f68084"/>
        </StyledSocialContainer>
            <span>and I develop web apps using</span>
        </IntroContainer>
    )
}

export default Intro