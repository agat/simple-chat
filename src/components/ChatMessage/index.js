// @flow

import * as React from 'react';
import styled from 'styled-components';

type PropsT = {
    message: string,
    leftComponent: any,
    rightComponent: any
};

const ChatMessage = ({
    message,
    leftComponent,
    rightComponent,
    ...props
}: PropsT) => (
    <Container>
        {!!leftComponent &&
            <LeftComponent>
                {leftComponent}
            </LeftComponent>
        }
        <Body
            {...props}
        >
            <Text>
                {message}
            </Text>
            {!!rightComponent &&
                <RightComponent>
                    {rightComponent}
                </RightComponent>
            }
        </Body>
    </Container>
);


export const Container = styled.View`
    flex-direction: row;
    margin-top: 12px;
`;

export const Body = styled.View`
    flex-direction: row;
    border: 1px solid #d8d8d8;
    border-radius: 22px;
    backgroundColor: #fff;
    padding: 5px 16px;
    flex: 1;
`;

export const LeftComponent = styled.View`
    margin-right: 10px;
`;

export const RightComponent = styled.View`
    border-color: #d8d8d8;
    border-left-width: 1px;
    width: 36px;
    flex-direction: row;
    justify-content: center;
    margin: 3px -12px 0 0;
`;

const Text = styled.Text`
    color: #000;
    font-size: 15px;
    line-height: 20px;
    padding: 4px 0;
    flex: 1;
`;

export default ChatMessage;
