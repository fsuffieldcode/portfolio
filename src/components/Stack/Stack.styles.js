import styled from 'styled-components'


const StackContainer = styled.section`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
text-align: center;


/* Stack labels */
h3 {
    text-align: center;
    font-size: 2.5vw;
    margin-bottom: 0;
    font-weight: 200;
    color: #6e6e6e;
}
`

const StackCard = styled.div`
min-height: 10vw;
max-width: 14vw;
padding: 0.75rem;
margin: 2vw;
border-radius: 1vw;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
border: 1px solid #bfbfbf;
`

const StackIcon = styled.div`
display: flex;
margin: 0.4rem;

div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
    margin-left: 1rem;
    width: 4vw;
}

/* Icon Labels */
div > div > span {
    font-size: 0.8rem;
}

/* Icons */
svg {
    width: 5vw;
    max-width: 90px;
    margin: 0.5vw;
}

`


export { StackContainer, StackCard, StackIcon }
