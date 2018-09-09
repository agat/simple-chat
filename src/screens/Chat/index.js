// @flow

import * as React from 'react';
import {
    FlatList,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView
} from 'react-native';
import styled from 'styled-components';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';

import type {
    ComponentWithConnectedReduxPropsT
} from '../../types';
import type {
    MessagesStoreT
} from '../../reducers/messages';

import {
    sendMessage,
    removeMessage
} from '../../reducers/messages/actions';

import Avatar from '../../components/Avatar';
import Screen from '../../components/Screen';
import Input from '../../components/Input';
import ChatMessage from '../../components/ChatMessage';


type PropsT = ComponentWithConnectedReduxPropsT & {
    messages: MessagesStoreT
};

type StateT = {
    newMessage: string
};


class Chat extends React.Component<PropsT, StateT> {
    state = {
        newMessage: ''
    };
    
    handleNewMessageChange = (newMessage: string) => {
        this.setState({
            newMessage
        });
    }
    
    createMessageDeleteHandler = (id: string) => () => {
        const {
            dispatch
        } = this.props;
        
        dispatch(removeMessage(id));
    }
    
    handleNewMessageCreate = () => {
        const {
            dispatch
        } = this.props;
        const {
            newMessage
        } = this.state;
        
        dispatch(sendMessage({
            id: uuidv1(),
            message: newMessage
        }));
        
        this.setState({
            newMessage: ''
        });
    }
    
    render() {
        const {
            messages
        } = this.props;
        const {
            newMessage
        } = this.state;
        
        return (
            <ChatWrapper
                behavior="padding"
                enabled
            >
                <ChatScreen
                    colors={['#ebebeb', '#ebebeb']}
                >
                    <ChatBody
                        data={messages.data.reverse()}
                        keyExtractor={(item) => item.id}
                        inverted
                        renderItem={({ item }) => (
                            <ChatMessage
                                leftComponent={
                                    <Avatar />
                                }
                                message={item.message}
                                rightComponent={
                                    <TouchableOpacity
                                        onPress={this.createMessageDeleteHandler(item.id)}
                                    >
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
                                onChangeText={this.handleNewMessageChange}
                                value={newMessage}
                                rightComponent={
                                    <TouchableOpacity
                                        onPress={this.handleNewMessageCreate}
                                    >
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


export default connect (
    ({ messages }) => ({
        messages
    })
)(Chat);
