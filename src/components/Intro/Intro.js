import React from 'react'

import { IntroContainer, Heading, StyledSocialContainer } from './Intro.styles'

import { GitHubIconNoText, LinkedInIcon, CurvedArrow } from '../Icons/Icons'

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
            <span>I make stuff for the web using:</span>
        </IntroContainer>
    )
}

export default Intro