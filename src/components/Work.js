import React, { Component } from 'react'

import { HeaderContainer, Header, ProjectContainer, ProjectCard } from './Work.styles'

const Work = props => {
  return (
    <div>
      <HeaderContainer>
        <Header>Here's some of my work:</Header>
      </HeaderContainer>
      <ProjectContainer>
      <ProjectCard image="https://res.cloudinary.com/fsuffieldcode/image/upload/v1584051889/tenners.jpg" />
      <ProjectCard image="https://res.cloudinary.com/fsuffieldcode/image/upload/v1584051395/theirishtimes.jpg" />
      <ProjectCard image="https://res.cloudinary.com/fsuffieldcode/image/upload/v1584051889/tenners.jpg" />
      </ProjectContainer>
    </div>
  )
}

export default Work
