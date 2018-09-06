// @flow

import * as React from 'react';
import styled from 'styled-components';


const Body = styled.View`
    width: 100%;
`;

const Row = styled.View`
    flex-direction: column;
    margin: 0 0 16px 0;
    background: #ccc;
`;

const Button = styled.View`
    width: 72px;
    height: 72px;
    border: 2px solid #fff;
    border-radius: 36px;
    justify-content: center;
    align-items: center;
`;

const ButtonText = styled.Text`
    color: #fefefe;
    font-size: 36px;
`;

type PropsT = {};

class NumKeyboard extends React.Component<PropsT> {
    render() {
        return (
            <Body>
                <Row>
                    <Button>
                        <ButtonText>1</ButtonText>
                    </Button>
                    <Button>
                        <ButtonText>2</ButtonText>
                    </Button>
                    <Button>
                        <ButtonText>3</ButtonText>
                    </Button>
                </Row>
            </Body>
        );
    }
}

export default NumKeyboard;
