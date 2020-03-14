import React from 'react'
import {StyledProjectCard, StyledProjectImage } from './ProjectCard.styles'

const ProjectCard = (props) => {
    return (
        <StyledProjectCard>
            <StyledProjectImage src={props.image} />
        </StyledProjectCard>
    )
}

export default ProjectCard