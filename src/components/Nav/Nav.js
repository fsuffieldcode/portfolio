import React, { Component } from 'react'

import { StyledNav, NavItems } from './Nav.styles'

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