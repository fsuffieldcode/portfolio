import React from 'react'
import { StackCardHeading, StackCardBody } from './Stack.styles'

const StackCard = (props) => {
    return (
        <div>
            <StackCardHeading>
                {props.category}
            </StackCardHeading>
            <StackCardBody>
            </StackCardBody>
        </div>
    )
}

export default StackCard