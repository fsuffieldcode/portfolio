import React, { Component } from 'react'

import { StyledWork } from './WorkSection.styles'
import { ProjectCard } from './ProjectCard'

const Work = props => {
  return (
    <div>
      <h1>my work:</h1>
      <StyledWork>
        <ProjectCard source="https://res.cloudinary.com/fsuffieldcode/image/upload/c_scale,q_100,r_0,w_1772/v1583965701/theirishtimes.png" />
        <ProjectCard source="https://res.cloudinary.com/fsuffieldcode/image/upload/v1583967102/tenners.png" />
        <ProjectCard source="https://res.cloudinary.com/fsuffieldcode/image/upload/v1583967102/tenners.png" />
        <ProjectCard source="https://res.cloudinary.com/fsuffieldcode/image/upload/c_scale,q_100,r_0,w_1772/v1583965701/theirishtimes.png" />
      </StyledWork>
    </div>
  )
}

export default Work
