// @flow

import * as React from 'react';
import styled from 'styled-components';
import {
    Image
} from 'react-native';


import RoundButton from '../RoundButton';


type PropsT = {
    onNumberPress: (num: number) => void,
    onDeletePress: () => void
};

class NumKeyboard extends React.Component<PropsT> {
    createNumButtonPressHandler = (num: number) => () => this.props.onNumberPress(num);
    
    render() {
        const {
            onDeletePress
        } = this.props;
        
        return (
            <Body>
                <Row>
                    <RoundButton
                        onPress={this.createNumButtonPressHandler(1)}
                    >
                        1
                    </RoundButton>
                    <RoundButton
                        onPress={this.createNumButtonPressHandler(2)}
                    >
                        2
                    </RoundButton>
                    <RoundButton
                        onPress={this.createNumButtonPressHandler(3)}
                    >
                        3
                    </RoundButton>
                </Row>
                <Row>
                    <RoundButton
                        onPress={this.createNumButtonPressHandler(4)}
                    >
                        4
                    </RoundButton>
                    <RoundButton
                        onPress={this.createNumButtonPressHandler(5)}
                    >
                        5
                    </RoundButton>
                    <RoundButton
                        onPress={this.createNumButtonPressHandler(6)}
                    >
                        6
                    </RoundButton>
                </Row>
                <Row>
                    <RoundButton
                        onPress={this.createNumButtonPressHandler(7)}
                    >
                        7
                    </RoundButton>
                    <RoundButton
                        onPress={this.createNumButtonPressHandler(8)}
                    >
                        8
                    </RoundButton>
                    <RoundButton
                        onPress={this.createNumButtonPressHandler(9)}
                    >
                        9
                    </RoundButton>
                </Row>
                <Row>
                    <TransparentButton>
                    </TransparentButton>
                    <RoundButton
                        onPress={this.createNumButtonPressHandler(0)}
                    >
                        0
                    </RoundButton>
                    <DeleteButton
                        onPress={onDeletePress}
                    >
                        {deleteIcon}
                    </DeleteButton>
                </Row>
            </Body>
        );
    }
}

const Body = styled.View`
    width: 100%;
`;

const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 0 0 16px 0;
`;

const TransparentButton = styled(RoundButton)`
    opacity: 0;
`;

const DeleteButton = styled(RoundButton)`
    border-color: transparent;
`;

const deleteIcon = (
    <Image
        source={require('./deleteButton.png')}
        style={{
            width: 45,
            height: 33
        }}
    />
);

export default NumKeyboard;
