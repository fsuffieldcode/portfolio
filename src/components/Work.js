import React, { Component } from 'react'

import Project from './Project'

import { HeaderContainer, Header, StyledWorkSection } from './Work.styles'

const Work = props => {
  return (
    <StyledWorkSection>
      <HeaderContainer>
        <Header>And here's some of my work:</Header>
      </HeaderContainer>
      <Project
        name="Tenners"
        source="https://res.cloudinary.com/fsuffieldcode/image/upload/v1584229261/tenners-responsive-mockup.jpg"
        tech={['JavaScript', 'EJS', 'Node', 'Express', 'Mongoose', 'Passport.js', 'Semantic UI']}
        repo="https://github.com/fsuffieldcode/tenners"
        demo="tenners.herokuapp.com"
        about="
        This web app allows users to create and manage lists of favourite music albums. I implemented a login system using Passport.js, providing salting and hashing for passwords. I used Spotify's web API for search and Mongoose/MongoDB for persistent data.
        "
      />
            <Project
        name="The Irish Times"
        source="https://res.cloudinary.com/fsuffieldcode/image/upload/v1584294805/theirishtimes-responsive-mockup.jpg"
        tech={['HTML', 'CSS', 'Flexbox', 'CSS Grid']}
        repo="https://github.com/fsuffieldcode/the-irish-times"
        demo="theirishtimes.netlify.com"
        about="
        A mobile-first and responsive re-design of the website for broadsheet newspaper 'The Irish Times'. I wanted to practice creating a relatively complicated responsive layout. Coded based on design file found on Behance. 
        "
      />
    </StyledWorkSection>
  )
}

export default Work
