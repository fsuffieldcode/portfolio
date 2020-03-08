import styled from 'styled-components'


const StackContainer = styled.section`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
text-align: center;

h3 {
    text-align: left;
}
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
justify-content: space-around;
align-items: center;
`

const StackIcon = styled.div`
display: flex;
max-width: 40vw;

div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.6rem;
    width: 15vw;
}

/* Icon Labels */
div > div > span {
    font-size: 2vw;
}

/* Icon */
svg {
    width: 12vw;
    max-width: 90px;
    margin: 0.5rem;
}

`


export { StackContainer, StackHeading, StackCard, StackIcon }
