// @flow

import * as React from 'react';
import styled from 'styled-components';



type PropsT = {
    length: number,
    value: number
};

const PinInputProgress = ({
    length,
    value
}: PropsT) => (
    <Body>
        {[...Array(length).keys()].map((v, index) => (
            <Circle
                key={index}
                isEmpty={index + 1 > value}
            />
        ))}
    </Body>
);


export const Circle = styled.View`
    width: 14px;
    height: 14px;
    border: 2px solid #fff;
    border-radius: 7px;
    margin: 0 12px;
    backgroundColor: ${props => props.isEmpty ? 'transparent' : 'white'};
`;

const Body = styled.View`
    flex-direction: row;
    flex: 1;
    align-items: center;
`;

export default PinInputProgress;
