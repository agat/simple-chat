// @flow

import * as React from 'react';
import styled from 'styled-components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Logo from '../../components/Logo';
import Screen from '../../components/Screen';
import Input from '../../components/Input';


type PropsT = {};

const AuthScreen = styled(Screen)`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;

const keyboardAwareScrollViewStyles = {
    flex: 1,
    justifyContent: 'center'
};

const AuthLogo = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 94px;
`;

class Auth extends React.Component<PropsT> {
    render() {
        return (
            <AuthScreen>
                <KeyboardAwareScrollView
                    contentContainerStyle={keyboardAwareScrollViewStyles}
                >
                    <AuthLogo>
                        <Logo />
                    </AuthLogo>
                    <Input
                        secureTextEntry
                    />
                </KeyboardAwareScrollView>
            </AuthScreen>
        );
    }
}

export default Auth;
