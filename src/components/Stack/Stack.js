import React from 'react'

import { StackContainer, StackCard, StackIcon } from './Stack.styles'

import { HtmlIcon, CssIcon, JsIcon, ReactIcon, ReduxIcon, StyledComponentsIcon, NodeIcon, ExpressIcon, MongoIcon } from '../Icons/Icons'

const Stack = () => {
    return (
        <div>
            <StackContainer>
                <div>
                    <h3>front end</h3>
                    <StackCard>
                        <StackIcon>
                            <ReactIcon color="white" />
                        </StackIcon>
                        <StackIcon>
                            <ReduxIcon color="white" />
                        </StackIcon>
                        <StackIcon>
                            <StyledComponentsIcon color="white" />
                        </StackIcon>
                        <StackIcon>
                            <JsIcon color="white" />
                        </StackIcon>
                        <StackIcon>
                            <HtmlIcon color="white" />
                        </StackIcon>
                        <StackIcon>
                            <CssIcon color="white" />
                        </StackIcon>
                    </StackCard>
                </div>
                <div>
                    <div>
                        <h3>back end</h3>
                        <StackCard>
                            <StackIcon>
                                <NodeIcon color="white" />
                            </StackIcon>
                            <StackIcon>
                                <ExpressIcon color="white" />
                            </StackIcon>
                            <StackIcon>
                                <MongoIcon color="white" />
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
