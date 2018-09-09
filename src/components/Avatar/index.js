// @flow

import * as React from 'react';
import styled from 'styled-components';
import {
    Image
} from 'react-native';


const AvatarBody = styled.View`
    border-radius: 22px;
    overflow: hidden;
    width: 44px;
    height: 44px;
`;

const Avatar = () => (
    <AvatarBody>
        <Image
            source={require('./ava.jpg')}
            style={{
                height: 44,
                width: 44
            }}
        />
    </AvatarBody>
);



export default Avatar;
