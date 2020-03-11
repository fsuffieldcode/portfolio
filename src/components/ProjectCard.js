import React from 'react'

import { CardContainer, CardHeading, CardImage } from './ProjectCard.styles'

const ProjectCard = props => {
  return (
    <CardContainer>
      <CardImage src={props.source} />
    </CardContainer>
  )
}

export { ProjectCard }
