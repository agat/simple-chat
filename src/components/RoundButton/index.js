// @flow

import * as React from 'react';
import styled from 'styled-components';



type PropsT = {
    children: string
};

const RoundButton = ({
    children,
    ...props
}: PropsT) => (
    <Button
        {...props}
    >
        <Text>
            {children}
        </Text>
    </Button>
);


export const Button = styled.TouchableOpacity`
    width: 72px;
    height: 72px;
    border: 2px solid #fff;
    border-radius: 36px;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text`
    color: #fefefe;
    font-size: 36px;
`;

export default RoundButton;
