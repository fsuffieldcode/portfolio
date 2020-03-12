import styled from 'styled-components'

const BackgroundContainer = styled.div`
background-color: var(--wine);
margin-top: -250px;
padding-top: 250px;
`

const StyledWork = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2vw;
  padding-bottom: 2vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  background-color: var(--wine);
  `

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Header = styled.h2`
margin: 3rem 0 2rem 0;
  font-size: 6vw;
  color: white;
  font-style: italic;
`

export { BackgroundContainer, StyledWork, HeaderContainer, Header }
