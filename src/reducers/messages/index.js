// @flow

import * as types from './types';


export type MessageT = {
    id: string,
    message: string
};

export type MessagesStoreT = {
    data: Array<MessageT>
};

const initialState: MessagesStoreT = {
    data: []
};

export default (state: MessagesStoreT = initialState, action: Object) => {
    switch (action.type) {
        case types.SEND_MESSAGE:
            state = {
                ...state,
                data: [...state.data, action.message]
            };
            break;
            
        case types.REMOVE_MESSAGE:
            state = {
                ...state,
                data: state.data.filter(({ id }) => id !== action.id)
            };
            break;
            
        default:
            
    }
    
    return state;
};
