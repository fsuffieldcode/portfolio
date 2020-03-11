import React, { Component } from 'react'

import { StyledWork } from './WorkSection.styles'
import { ProjectCard } from './ProjectCard'

const Work = props => {
  return (
    <div>
      <h1>my work:</h1>
      <StyledWork>
        <ProjectCard source="../../assets/the-irish-times.png" />
      </StyledWork>
    </div>
  )
}

export default Work
