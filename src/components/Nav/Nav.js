import React, { Component } from 'react'
import styled from 'styled-components'

import { NavBar, NavBarUl, NavItems, NavLink, Logo } from './Nav.styles'

class Nav extends Component {

    render() {
        return (
            <NavBar>
                <NavItems>
                    <Logo className="fas fa-code" />
                    <NavBarUl>
                        <NavLink>Work</NavLink>
                        <NavLink>About</NavLink>
                        <NavLink>Contact</NavLink>
                    </NavBarUl>
                </NavItems>
            </NavBar>
        )
    }
}

export default Nav