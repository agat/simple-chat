// @flow

import * as React from 'react';
import {
    FlatList,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView
} from 'react-native';
import styled from 'styled-components';

import Avatar from '../../components/Avatar';
import Screen from '../../components/Screen';
import Input from '../../components/Input';
import ChatMessage from '../../components/ChatMessage';


type PropsT = {};

const ChatWrapper = styled(KeyboardAvoidingView)`
    flex: 1;
`;

const ChatScreen = styled(Screen)`
    flex: 1;
    padding: 24px 16px 16px 16px;
`;

const ChatBody = styled(FlatList)`
    flex: 1;
    margin: 0 0 16px 0;
`;

const ChatFooter = styled.View`
    flex-direction: row;
    align-items: flex-end;
`;

const ChatFooterAvatar = styled.View`
    margin-right: 10px;
`;

const ChatFooterBody = styled.View`
    flex: 1;
`;

const data = [
    {
        id: '0',
        message: `Песен еще ненаписанных, 
сколько?
Скажи, кукушка, пропой.
В городе мне жить или на 
выселках, 
Камнем лежать 
или гореть звездой? 
Звездой.

Солнце мое - взгляни на 
меня,`
    },
    {
        id: '1',
        message: `1 message`
    },
    {
        id: '2',
        message: `2 message`
    }
];

class Chat extends React.Component<PropsT> {
    render() {
        return (
            <ChatWrapper
                behavior="padding"
                enabled
            >
                <ChatScreen
                    colors={['#ebebeb', '#ebebeb']}
                >
                    <ChatBody
                        data={data.reverse()}
                        keyExtractor={(item) => item.id}
                        inverted={true}
                        renderItem={({ item }) => (
                            <ChatMessage
                                leftComponent={
                                    <Avatar />
                                }
                                message={item.message}
                                rightComponent={
                                    <TouchableOpacity>
                                        {deleteIcon}
                                    </TouchableOpacity>
                                }
                            />
                        )}
                    />
                    <ChatFooter>
                        <ChatFooterAvatar>
                            <Avatar />
                        </ChatFooterAvatar>
                        <ChatFooterBody>
                            <Input
                                multiline
                                rightComponent={
                                    <TouchableOpacity>
                                        {sendIcon}
                                    </TouchableOpacity>
                                }
                            />
                        </ChatFooterBody>
                    </ChatFooter>
                </ChatScreen>
            </ChatWrapper>
        );
    }
}

const deleteIcon = (
    <Image
        source={require('./deleteIcon.png')}
        style={{
            width: 16,
            height: 24
        }}
    />
);

const sendIcon = (
    <Image
        source={require('./sendIcon.png')}
        style={{
            width: 22,
            height: 21
        }}
    />
);

export default Chat;
