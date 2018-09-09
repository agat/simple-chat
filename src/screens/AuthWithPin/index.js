// @flow

import * as React from 'react';
import styled from 'styled-components';

import Logo from '../../components/Logo';
import Screen from '../../components/Screen';
import PinInputProgress from '../../components/PinInputProgress';
import NumKeyboard from '../../components/NumKeyboard';


const savedPin = '1234';

type PropsT = {
    
};

type StateT = {
    pin: string
};

class Auth extends React.Component<PropsT, StateT> {
    state = {
        pin: ''
    };
    
    handleNumKeyPress = (num: number) => {
        const pin = this.state.pin;
        const newPin = pin + num.toString();
        
        if (newPin.length > savedPin.length) {
            // check pin
            
            return;
        }
        
        this.setState({
            pin: newPin
        });
    }
    
    handleDeletePress = () => {
        const pin = this.state.pin;
        
        if (pin.length <= 0) {
            return;
        }
        
        this.setState({
            pin: pin.slice(0, -1)
        });
    }
    
    render() {
        const pin = this.state.pin;
        
        return (
            <PinScreen>
                <PinLogo>
                    <Logo
                        width={235}
                        height={69} 
                    />
                </PinLogo>
                <PinInputProgress
                    length={savedPin.length}
                    value={pin.length}
                />
                <NumKeyboard
                    onNumberPress={this.handleNumKeyPress}
                    onDeletePress={this.handleDeletePress}
                />
            </PinScreen>
        );
    }
}

const PinScreen = styled(Screen)`
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`;

const PinLogo = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
`;

export default Auth;
