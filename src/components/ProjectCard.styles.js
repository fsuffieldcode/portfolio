import styled from 'styled-components'

const CardContainer = styled.div`
  width: 300px;
  margin: 1rem;
  border: 1px solid var(--lightgrey);
  border-radius: 1vw;
  background-color: white;
  max-height: 300px;
`

const CardHeading = styled.h3`

`

const CardImage = styled.img`
border-radius: 1vw;
height: 100%;
max-width: 100%;
`

export { CardContainer, CardHeading, CardImage }