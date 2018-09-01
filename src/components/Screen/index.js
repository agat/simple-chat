// @flow

import * as React from 'react';
import { LinearGradient } from 'expo';


type PropsT = {
    colors: Array<string>,
    style: Object
};

const Screen = ({
    colors = ['#90f7ec', '#32ccbc'],
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
