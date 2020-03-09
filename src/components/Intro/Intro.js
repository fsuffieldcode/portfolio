import React from 'react'

import { IntroContainer, Heading, StyledSocialContainer } from './Intro.styles'

import { GitHubIconNoText, LinkedInIcon, DownArrow } from '../Icons/Icons'

const Intro = () => {
    return (
        <IntroContainer><span>Hi, I'm</span>
            <Heading>
                Fabian<br />
                Suffield
        </Heading>
            <StyledSocialContainer>
                <GitHubIconNoText color="#f68084" />
                <LinkedInIcon color="#f68084" />
            </StyledSocialContainer>
            <span>I'm a web developer.</span>
            <DownArrow color="#f68084"/>
        </IntroContainer>
    )
}

export default Intro