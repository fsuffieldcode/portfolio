import styled from 'styled-components'

const StackContainer = styled.section`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
text-align: center;

h2 {
    font-size: 1.5rem;
}
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
    margin: 0.6rem;
}
`


export { StackContainer, StackCard, StackIcon }
