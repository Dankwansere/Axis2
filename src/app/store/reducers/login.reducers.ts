import * as LoginActions from '../actions/login.action';
import {ILogin} from '../interface/login.interface';




const init2: ILogin = {
    id: 1,
    firstname: 'Gege',
    lastname: 'Stylay'
};

const init3: ILogin = {
    id: 1,
    firstname: 'Solid',
    lastname: 'Snake'
};

const initialState = {
    ILogin : [
        init2, init3
    ],
    name: 'Eric',
    id: 0
};


export function loginReducer(state = initialState, action: LoginActions.LoginAction) {

    switch (action.type) {
        case 'ADD': {
            return {
                ...state,
                id: state.id + 1,
                ILogin: action.payload
            };
        }

        case 'UPDATE': {
            console.log('state: ', state);
            const toUpdate = state.ILogin[action.payload.index];
            console.log('To update: ', toUpdate);
            const updateLog = {
                ...toUpdate,
                ...action.payload.data
            };

            const currentState = state.ILogin;
            currentState[action.payload.index] = updateLog;
            return {
                ...state,

            };
        }

        default:
            return state;
    }
}
