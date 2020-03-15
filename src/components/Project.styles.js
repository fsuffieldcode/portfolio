import styled from 'styled-components'

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;

  /* Project Name */
  h3 {
    font-size: 3rem;
    font-style: italic;
    margin: 1rem;
  }
`

const ProjectDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--almostblack);
`
const ProjectDetails = styled.span``
const ProjectImage = styled.img`
  width: 100%;
  max-width: 700px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.09);

  @media (min-width: 700px) {
    border-radius: 0.5rem;
  }
`

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const TechTag = styled.div`
  background-color: var(--midgrey);
  font-style: italic;
  color: white;
  padding: 0.25rem;
  margin: 0.25rem;
  border-radius: 0.25rem;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ProjectLink = styled.a`
  background-color: black;
  font-style: italic;
  color: white;
  padding: 0.25rem;
  margin: 0.5rem;
  border-radius: 0.25rem;
  &:hover,
  &:active {
    background-color: var(--wine);
    color: inherit;
    text-decoration: none;
  }
`

const About = styled.p`
margin: 0.5rem;
padding: 0.5rem;
max-width: 600px;
text-align: center;
`

export {
  ProjectDetails,
  ProjectContainer,
  ProjectDetailsContainer,
  ProjectImage,
  TechContainer,
  TechTag,
  LinkContainer,
  ProjectLink,
  About
}
