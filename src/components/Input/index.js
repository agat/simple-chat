// @flow

import * as React from 'react';
import {
    TextInput,
    View
} from 'react-native';


type PropsT = {
    
};

const Input = ({
    ...props
}: PropsT) => (
    <View
        style={{
            borderRadius: 22,
            borderColor: '#d8d8d8',
            borderWidth: 1,
            backgroundColor: '#fff',
            minHeight: 44,
            paddingVertical: 5,
            paddingHorizontal: 10,
            width: '100%'
        }}
    >
        <TextInput
            style={{
                backgroundColor: '#fff',
                height: 34,
                flex: 1
            }}
            {...props}
        />
    </View>
);

export default Input;
