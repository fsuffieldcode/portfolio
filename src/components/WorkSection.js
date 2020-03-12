import React, { Component } from 'react'

import {
  BackgroundContainer,
  StyledWork,
  HeaderContainer,
  Header
} from './WorkSection.styles'

import { ProjectCard } from './ProjectCard'

const Work = props => {
  return (
    <BackgroundContainer>
      <HeaderContainer>
        <Header>Here's some of my work:</Header>
      </HeaderContainer>
      <section>
        <StyledWork>
          <ProjectCard
            name="Tenners"
            source="https://res.cloudinary.com/fsuffieldcode/image/upload/v1584051889/tenners.jpg"
          />
          <ProjectCard
            name="The Irish Times"
            source="https://res.cloudinary.com/fsuffieldcode/image/upload/v1584051395/theirishtimes.jpg"
          />
          <ProjectCard
            name="Tenners"
            source="https://res.cloudinary.com/fsuffieldcode/image/upload/v1584051889/tenners.jpg"
          />
        </StyledWork>
      </section>
    </BackgroundContainer>
  )
}

export default Work
