import styled from "styled-components"

const StackContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;

  /* Stack labels */
  h3 {
    text-align: center;
    margin-bottom: 0;
    font-weight: 200;
    color: var(--almostblack);
  }

  @media (min-width: 900px) {
    /* Stack labels */
    h3 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1200px) {
    /* Stack labels */
    h3 {
      font-size: 1.75rem;
    }
  }
`

const StackCard = styled.div`
  min-height: 10rem;
  max-width: 6rem;
  padding: 0.8rem;
  margin: 1rem;
  border-radius: 0.3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border: 1px solid var(--lightgrey);
  background-color: white;
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.09);

  @media (min-width: 900px) {
    max-width: 12rem;
  }
`

const StackIcon = styled.div`
  display: flex;
  margin: 0.3rem;

  /* Icon wrapper */
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
    margin-left: 1rem;
    width: 3rem;
  }

  /* Icon Labels */
  div > div > span {
    font-size: 0.6rem;
  }

  /* Icons */
  svg {
    width: 2.5rem;
    max-width: 90px;
    margin: 0.4rem;
    fill: var(--wine);
  }

  @media (min-width: 900px) {
    /*  Icons */
    svg {
      width: 3.5rem;
    }

    /* Icon Labels */
    div > div > span {
      font-size: 0.9rem;
    }
  }
`

export { StackContainer, StackCard, StackIcon }
