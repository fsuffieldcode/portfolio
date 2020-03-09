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


@media (min-width: 900px) {
      height: 30vw;
      margin-top: 5vw;
      margin-bottom: 4vw;
}

@media (min-width: 1200px) {
      height: 24vw;
}

span {
      font-size: 2.5vw;
      margin: 3vw;
}

div > svg {
    width: 6vw;
}

@media (min-width: 900px) {
    span {
        font-size: 1.7vw;
    }

    div > svg {
    width: 5vw;
}

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

  @media (min-width: 900px) {
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
    margin: 0.5rem;
}

@media (min-width: 1200px) {

    svg {
        max-width: 3vw;
    }
  }


`


export { IntroContainer, Heading, StyledSocialContainer }