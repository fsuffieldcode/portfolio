import styled from 'styled-components'

const StyledWorkSection = styled.section`

`

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Header = styled.h2`
margin: 5rem 0 3rem 0;
  font-size: 4vw;
  font-style: italic;
`

const ProjectContainer = styled.div`
display: flex;
justify-content: center;
`

const ProjectDetailsContainer = styled.div`
width: 100%;
height: 100%;
background-color: var(--almostblack);
`
const ProjectDetails = styled.span`
`
const ProjectImage = styled.img`
width: 100%;
max-width: 600px;

@media (min-width: 600px) {
  border-radius: 0.5rem;
}
`

export { HeaderContainer, Header, ProjectContainer, ProjectDetailsContainer, ProjectDetails, ProjectImage, StyledWorkSection }
