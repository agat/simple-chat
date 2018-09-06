// @flow

import * as React from 'react';
import Image from 'react-native-remote-svg';


type PropsT = {
    width?: number,
    height?: number
};

const Logo = ({
    width = 260,
    height = 100
}: PropsT) => (
    <Image
        source={require('./logo.svg')}
        style={{
            width,
            height
        }}
    />
);

export default Logo;
