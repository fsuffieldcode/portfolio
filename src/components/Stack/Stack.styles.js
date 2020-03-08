import styled from 'styled-components'

const StackContainer = styled.section`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
text-align: center;
`

const StackHeading = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

const StackCard = styled.div`
border: 1px solid white;
border-radius: 5px;
margin: 1rem;
display: flex;
flex-wrap: wrap;

svg {
    margin: 0.5rem;
    width: 10vw;
    max-width: 75px;
}
`

const StackIcon = styled.div`
display: flex;


div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.6rem;
}
`


export { StackContainer, StackHeading, StackCard, StackIcon }
