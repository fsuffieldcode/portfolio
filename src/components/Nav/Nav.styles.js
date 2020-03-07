import styled, { css } from 'styled-components'

const NavBar = styled.nav`
width: 100%;
display: flex;
justify-content: center;
`

const NavBarUl = styled.ul`
margin: 0;
padding: 0;
display: flex;
justify-content: space-around;
list-style: none;
font-size: 2vh;
font-weight: 400;
`

const NavItems = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding-top: 0.5rem;
padding-bottom: 0.5rem;
`

const NavLink = styled.li`
margin-left: 1rem;
`

const Logo = styled.i`
display: inline-block;
font-size: 1.2rem;
`

export { NavBar, NavBarUl, NavItems, NavLink, Logo }

