// @flow

import * as React from 'react';
import { LinearGradient } from 'expo';


type PropsT = {
    colors: Array<string>,
    style: Object
};

const Screen = ({
    colors = [
        '#32ccbc',
        '#90f7ec'
    ],
    style = {},
    ...props
}: PropsT) => (
    <LinearGradient
        colors={colors}
        style={[
            {
                flex: 1,
                flexDirection: 'column'
            },
            style
        ]}
        {...props}
    />
);

export default Screen;
