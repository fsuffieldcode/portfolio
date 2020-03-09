import React from 'react'

import { StackContainer, StackCard, StackIcon } from './Stack.styles'

import { HtmlIcon, CssIcon, JsIcon, ReactIcon, GitIcon, GitHubIcon, NpmIcon, YarnIcon, StyledComponentsIcon, NodeIcon, ExpressIcon, MongoIcon } from '../Icons/Icons'

const Stack = () => {
    return (
        <div>
            <StackContainer>
                <div>
                    <h3>front end</h3>
                    <StackCard>
                        <StackIcon>
                            <ReactIcon color="#6e6e6e" />
                        </StackIcon>
                        <StackIcon>
                            <StyledComponentsIcon color="#6e6e6e" />
                        </StackIcon>
                        <StackIcon>
                            <JsIcon color="#6e6e6e" />
                        </StackIcon>
                        <StackIcon>
                            <HtmlIcon color="#6e6e6e" />
                        </StackIcon>
                        <StackIcon>
                            <CssIcon color="#6e6e6e" />
                        </StackIcon>
                    </StackCard>
                </div>
                <div>
                    <h3>back end</h3>
                    <StackCard>
                        <StackIcon>
                            <NodeIcon color="#6e6e6e" />
                        </StackIcon>
                        <StackIcon>
                            <ExpressIcon color="#6e6e6e" />
                        </StackIcon>
                        <StackIcon>
                            <MongoIcon color="#6e6e6e" />
                        </StackIcon>
                    </StackCard>
                </div>
                <div>
                    <h3>tools</h3>
                    <StackCard>
                        <StackIcon>
                            <GitIcon color="#6e6e6e" />
                        </StackIcon>
                        <StackIcon>
                            <GitHubIcon color="#6e6e6e" />
                        </StackIcon>
                        <StackIcon>
                            <NpmIcon color="#6e6e6e" />
                        </StackIcon>
                        <StackIcon>
                            <YarnIcon color="#6e6e6e" />
                        </StackIcon>
                    </StackCard>
                </div>
            </StackContainer>
        </div>

    )
}


export default Stack
