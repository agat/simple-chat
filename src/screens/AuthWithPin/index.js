// @flow

import * as React from 'react';
import styled from 'styled-components';

import Logo from '../../components/Logo';
import Screen from '../../components/Screen';
import NumKeyboard from '../../components/NumKeyboard';


type PropsT = {};

const PinScreen = styled(Screen)`
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`;

const PinLogo = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 64px;
`;

class Auth extends React.Component<PropsT> {
    render() {
        return (
            <PinScreen>
                <PinLogo>
                    <Logo
                        width={235}
                        height={69} 
                    />
                </PinLogo>
                <NumKeyboard
                    
                />
            </PinScreen>
        );
    }
}

export default Auth;
