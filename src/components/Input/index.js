// @flow

import * as React from 'react';
import styled from 'styled-components';
import {
    TextInput
} from 'react-native';

import {
    RightComponent
} from '../ChatMessage';


const MIN_HEIGHT = 34;

type PropsT = {
    rightComponent: any
};

type StateT = {
    height: number
};

class Input extends React.Component<PropsT, StateT> {
    state = {
        height: MIN_HEIGHT
    };
    
    handleContentSizeChange = ({ nativeEvent }: Object) => {
        const height = nativeEvent.contentSize.height;
        
        this.setState({ height });
    }
    
    render() {
        const {
            height
        } = this.state;
        const {
            rightComponent
        } = this.props;
        
        return (
            <InputBody
                style={{
                    height: height + 24
                }}
            >
                <TextInput
                    style={{
                        backgroundColor: '#fff',
                        minHeight: MIN_HEIGHT,
                        flex: 1,
                        fontSize: 15,
                        height
                    }}
                    onContentSizeChange={this.handleContentSizeChange}
                    {...this.props}
                />
                {!!rightComponent &&
                    <RightComponent>
                        {rightComponent}
                    </RightComponent>
                }
            </InputBody>
        );
    }
}

export const InputBody = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    border: 1px solid #d8d8d8;
    border-radius: 22px;
    backgroundColor: #fff;
    padding: 5px 16px;
    width: 100%;
`;

export default Input;
