import React, { Component } from "react"

import { StyledSection } from "./Section.styled"
import { Card } from "./Card"

const Section = () => {
  return (
    <div>
      <h1>my work:</h1>
      <StyledSection>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </StyledSection>
    </div>
  )
}

export default Section
