import React from 'react'

import { StackContainer, StackCard, StackIcon } from './Stack.styles'

import { Html5, Css3, Js } from '../Icons/Icons'

const Stack = () => {
    return (
        <div>
            <h1>
                My Stack:
            </h1>
            <StackContainer>
                <div>
                    <StackCard>
                        <StackIcon>
                            <Html5 />
                        </StackIcon>
                        <StackIcon>
                            <Css3 />
                        </StackIcon>
                        <StackIcon>
                            <Js />
                        </StackIcon>
                    </StackCard>
                </div>
                <StackCard category="Back End">
                    <StackIcon>
                        <Html5 />
                    </StackIcon>
                    <StackIcon>
                        <Css3 />
                    </StackIcon>
                    <StackIcon>
                        <Js />
                    </StackIcon>
                </StackCard>
                <StackCard category="Other">
                    <StackIcon>
                        <Html5 />
                    </StackIcon>
                    <StackIcon>
                        <Css3 />
                    </StackIcon>
                    <StackIcon>
                        <Js />
                    </StackIcon>
                </StackCard>
            </StackContainer>
        </div>
    )
}


export default Stack
