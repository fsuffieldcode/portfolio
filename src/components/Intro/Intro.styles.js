import styled from 'styled-components'
import { StyledComponentsIcon } from '../Icons/Icons'


const IntroContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 6vw;
height: 70vw;
text-align: center;
font-size: 1.4vw;

@media (min-width: 1000px) {
      font-size: 1.5vw;
  }

@media (max-width: 500px) {
      font-size: 1.6vw;
}

span {
      font-size: 2.5vw;
      margin: 2vw;
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
background: -webkit-linear-gradient(#a6c0fe, #f68084);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 1100px) {
      font-size: 11vw;
      line-height: 10vw;
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