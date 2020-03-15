import React, { Component } from 'react'

import {
  HeaderContainer,
  Header,
  ProjectContainer,
  ProjectDetailsContainer,
  ProjectDetails,
  ProjectImage,
  StyledWorkSection
} from './Work.styles'

const Work = props => {
  return (
    <StyledWorkSection>
      <HeaderContainer>
        <Header>And here's some of my work:</Header>
      </HeaderContainer>
      <ProjectContainer>
        <ProjectImage src="https://res.cloudinary.com/fsuffieldcode/image/upload/v1584229261/tenners-responsive-mockup.jpg" />
      </ProjectContainer>
    </StyledWorkSection>
  )
}

export default Work
