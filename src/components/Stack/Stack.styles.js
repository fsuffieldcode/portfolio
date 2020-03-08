import styled from 'styled-components'


const StackContainer = styled.section`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
text-align: center;

h3 {
    text-align: center;
    font-size: 6vw;
}
`

const StackHeading = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

const StackCard = styled.div`
border: 1px solid white;
border-radius: 1vw;
margin: 1rem;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
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
    font-size: 0.9rem;
    color: white;
}

/* Icons */
svg {
    width: 100%;
    max-width: 90px;
    margin: 0.5rem;
}

`


export { StackContainer, StackHeading, StackCard, StackIcon }
