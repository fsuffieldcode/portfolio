import React from 'react'
import StackCard from './StackCard'

import { StackContainer, StackHeading, StackCardHeading } from './Stack.styles'

const Stack = () => {
    return (
        <div>
            <StackHeading>
                my stack:
            </StackHeading>
            <StackContainer>
                <StackCard category='Front End'>
                </StackCard>
                <StackCard category="Back End">
                </StackCard>
                <StackCard category="Other">
                </StackCard>
            </StackContainer>
        </div>
    )
}

export default Stack