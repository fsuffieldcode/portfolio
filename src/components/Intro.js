import React from 'react'

import { IntroContainer, Heading, StyledSocialContainer, StyledBio} from './Intro.styles'

import { GitHubIconNoText, LinkedInIcon, EmailIcon } from './Icons'

const Intro = () => {
  return (
    <IntroContainer>
      <span>Hi, I'm</span>
      <Heading>
        Fabian
        <br />
        Suffield
      </Heading>
      <StyledSocialContainer>
      <EmailIcon color="#f68084" />
        <GitHubIconNoText color="#f68084" />
        <LinkedInIcon color="#f68084" />
      </StyledSocialContainer>
      <StyledBio>
        I create <b>fast</b>, <b>responsive</b> experiences for the web. <br /><br />
        My experience leans heavily towards the front-end, but I enjoy full stack development.
        <br /><br />
        Here's some of the stuff I use to get that done:
      </StyledBio>
    </IntroContainer>
  )
}

export default Intro
