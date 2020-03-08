import styled from 'styled-components'

const StyledNav = styled.nav`
width: 100%;
display: flex;
justify-content: center;
padding-top: 0.5rem;
padding-bottom: 0.5rem;

ul {
margin: 0;
padding: 0;
display: flex;
justify-content: space-around;
list-style: none;
font-size: 2vh;
font-weight: 400;
}

li {
    margin-left: 1rem;
}

i {
    display: inline-block;
    font-size: 1.6rem;
}
`

const NavItems = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding-top: 0.5rem;
padding-bottom: 0.5rem;
`

export { StyledNav, NavItems }

