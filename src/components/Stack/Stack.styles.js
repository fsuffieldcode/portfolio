import styled from 'styled-components'

const StackContainer = styled.section`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const StackHeading = styled.h2`
text-align: center;
font-size: 1.5rem
`

const StackCardHeading = styled.h3`
color: black;
`

const StackCardBody = styled.div`
width: 300px;
height: 30vh;
border: 1px solid black;
border-radius: 5px;
`



export { StackContainer, StackHeading, StackCardHeading, StackCardBody }