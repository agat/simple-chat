// @flow

import * as React from 'react';
import Image from 'react-native-remote-svg';

const Logo = () => (
    <Image
        source={require('./logo.svg')}
        style={{
            width: 260,
            height: 100
        }}
    />
);

export default Logo;
