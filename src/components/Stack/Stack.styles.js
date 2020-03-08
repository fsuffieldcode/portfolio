import styled from 'styled-components'


const StackContainer = styled.section`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
text-align: center;

h3 {
    text-align: left;
    font-size: 4vw;
    margin-bottom: 0;
    margin-left: 1vw;
    font-weight: 200;
    color: #a6c0fe;
}
`

const StackCard = styled.div`
border: 1px solid white;
max-width: 70vw;
border-radius: 1vw;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
@media (max-width: 575px) {
    justify-content: space-around;
  }
`

const StackIcon = styled.div`
display: flex;

div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.6rem;
    width: 20vw;
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
    margin: 0.5vw;
}

`


export { StackContainer, StackCard, StackIcon }
