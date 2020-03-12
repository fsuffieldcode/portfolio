import React from 'react'

import { CardContainer, HeadingContainer, Heading, CardImage } from './ProjectCard.styles'

const ProjectCard = props => {

  return (
    <div>
    <CardContainer>
    <CardImage src={props.source} />
    </CardContainer>
    <HeadingContainer>
    <Heading>{props.name}</Heading>
    </HeadingContainer>
    </div>
  )
}

export { ProjectCard }
