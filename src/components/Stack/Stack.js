import React from 'react'

import { StackContainer, StackHeading, StackCard, StackIcon } from './Stack.styles'

import { HtmlIcon, CssIcon, JsIcon, ReactIcon, ReduxIcon, StyledComponentsIcon } from '../Icons/Icons'

const Stack = () => {
    return (
        <div>
            <StackContainer>
                <StackHeading>
                    <h2></h2>
                </StackHeading>
                <div>
                    <h3>Front End</h3>
                    <StackCard>
                        <StackIcon>
                            <ReactIcon color="white"/>
                        </StackIcon>
                        <StackIcon>
                            <JsIcon color="white"/>
                        </StackIcon>
                        <StackIcon>
                            <HtmlIcon color="white"/>
                        </StackIcon>
                        <StackIcon>
                            <CssIcon color="white"/>
                        </StackIcon>
                        <StackIcon>
                            <StyledComponentsIcon color="white"/>
                        </StackIcon>
                    </StackCard>
                </div>
                <div>
                    <div>
                        <h3>Back End</h3>
                        <StackCard>
                            <StackIcon>
                                <HtmlIcon />
                            </StackIcon>
                            <StackIcon>
                                <CssIcon />
                            </StackIcon>
                            <StackIcon>
                                <JsIcon />
                            </StackIcon>
                            <StackIcon>
                                <ReactIcon />
                            </StackIcon>
                        </StackCard>
                    </div>
                    <div>
                        <h3>Tools</h3>
                        <StackCard>
                            <StackIcon>
                                <HtmlIcon />
                            </StackIcon>
                            <StackIcon>
                                <CssIcon />
                            </StackIcon>
                            <StackIcon>
                                <JsIcon />
                            </StackIcon>
                            <StackIcon>
                                <ReactIcon />
                            </StackIcon>
                        </StackCard>
                    </div>
                </div>

            </StackContainer>
        </div>

    )
}


export default Stack
