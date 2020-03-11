import styled from "styled-components"

const IntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6vw;
  height: 60vw;
  text-align: center;

  /* Small Text */
  span {
    margin: 4vw;
    font-size: 2.5vw;
  }

  /* Social Icons */
  div > svg {
    width: 6vw;
    margin: 0.5vw;
  }

  @media (min-width: 900px) {
    height: 40vw;
    margin-top: 5vw;
    margin-bottom: 4vw;

    /* Small Text */
    span {
      font-size: 1.6vw;
      margin: 2vw;
    }

    /* Social Icons */
    div > svg {
      width: 5vw;
    }
  }

  @media (min-width: 1200px) {
    height: 25vw;
    margin-bottom: 1vw;
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
    font-size: 12vw;
    line-height: 10vw;
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
