import styled from 'styled-components'


const IntroContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 50vh;
text-align: center;
padding-top: 10vw;
font-size: 1.4vw;

@media (min-width: 1000px) {
      font-size: 1.6vw;
  }

  span {
      font-size: 2.5vw;
      margin: 2vw;
  }
`

const Heading = styled.h1`
margin: 0.75rem;
font-size: 16vw;
font-weight: 900;
line-height: 14vw;
background: -webkit-linear-gradient(#a6c0fe, #f68084);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 1200px) {
      font-size: 12vw;
      line-height: 10vw;
  }
`

export { IntroContainer, Heading }