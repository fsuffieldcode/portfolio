import styled from 'styled-components'

const IntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  text-align: center;
  color: var(--darkgrey);

  /* Social Icons */
  div > svg {
    width: 2.25rem;
    margin: 0.25rem;
  }

  @media (min-width: 900px) {


    /* Social Icons */
    div > svg {
      width: 3rem;
    }
  }
`

const Heading = styled.h1`
  margin: 0.75rem;
  font-size: 5.5rem;
  line-height: 4.5rem;
  font-weight: 900;
  font-style: italic;
  background: -webkit-linear-gradient(var(--lightblue), var(--coral));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 900px) {
    font-size: 7rem;
    line-height: 6rem;
  }

  @media (min-width: 1200px) {
    font-size: 8rem;
    line-height: 7rem;
  }
`

const StyledSocialContainer = styled.div`
  display: flex;

  svg {
    margin: 0.5rem;
  }

  @media (min-width: 1200px) {
    svg {
      max-width: 3rem;
    }
  }
`

const StyledBio = styled.span`
width: 70%;
  margin-top: 3rem;
  margin-bottom: 4rem;
  font-size: 1rem;
  color: var(--darkgrey);

  b {
    color: var(--wine);
  }

  @media (min-width: 900px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`

export { IntroContainer, Heading, StyledSocialContainer, StyledBio,  }
