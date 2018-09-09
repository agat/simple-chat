// @flow

import {
    SEND_MESSAGE,
    REMOVE_MESSAGE
} from './types';

import type {
    MessageT
} from '.';


export const sendMessage = (message: MessageT) => ({
    type: SEND_MESSAGE,
    message
});

export const removeMessage = (id: string) => ({
    type: REMOVE_MESSAGE,
    id
});
