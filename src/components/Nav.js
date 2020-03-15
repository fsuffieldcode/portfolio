import React, { Component } from 'react'
import styled from 'styled-components'

// Styles

const StyledNav = styled.nav`
  width: 100%;
  min-height: 15vh;
  display: flex;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: var(--darkgrey);

  ul {
    margin: 0;
    margin-right: 2rem;
    display: flex;
    justify-content: space-around;
    list-style: none;
    font-size: 2vh;
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

// Code

class Nav extends Component {
  render() {
    return (
      <StyledNav>
        <NavItems>
          <i className="fas fa-code" />
          <ul>
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </NavItems>
      </StyledNav>
    )
  }
}

export default Nav
