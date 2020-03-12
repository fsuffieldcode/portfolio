import styled from 'styled-components'

const CardContainer = styled.div`
width: 320px;
height: 320px;
  padding: 0.25rem;
  border-radius: 0.25rem 0.25rem 0 0;
  background-color: white;
  display: flex;
  justify-content: center;
  margin: 0 1rem 0 1rem;
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.09);
`

const HeadingContainer = styled.div`
  width: 320px;
  padding: 0.25rem;
  border-radius: 0 0 0.25rem 0.25rem;
  margin: 0 1rem 3rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.09);
`

const Heading = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 300;
`

const CardImage = styled.img`
max-height: 100%;
overflow: hidden;
filter: grayscale(100%);
opacity: 0.7;
transition: filter, opacity 1s ease;
:hover {
  filter: none;
  opacity: 0.9;
	}
`

export { CardContainer, HeadingContainer, Heading, CardImage }
