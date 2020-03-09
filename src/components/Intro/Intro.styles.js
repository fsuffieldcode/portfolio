import styled from 'styled-components'
import { StyledComponentsIcon } from '../Icons/Icons'


const IntroContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 6vw;
height: 60vw;
text-align: center;
font-size: 1.4vw;


@media (min-width: 1000px) {
      height: 32vw;
      margin-top: 5vw;
      margin-bottom: 4vw;
}

@media (min-width: 1200px) {
      height: 25vw;
      margin-top: 5vw;
      margin-bottom: 4vw;
}

span {
      font-size: 2.5vw;
      margin: 4vw;
}

@media (min-width: 1000px) {
    span {
        font-size: 1.7vw;
    }
}

svg {
    width: 10vw;
}
`

const Heading = styled.h1`
margin: 0.75rem;
font-size: 15vw;
font-weight: 900;
font-style: italic;
line-height: 14vw;
background: -webkit-linear-gradient(var(--coral), var(--purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 1000px) {
      font-size: 10vw;
      line-height: 9vw;
  }

  @media (min-width: 1200px) {
      font-size: 8vw;
      line-height: 7vw;
  }
`

const StyledSocialContainer = styled.div`
display: flex;

svg {
    width: 5vw;
    margin: 0.5vw;
}
`


export { IntroContainer, Heading, StyledSocialContainer }