'use strict';

// import actions from "redux-form/lib/actions";

// const initialStateId = ""
// export function id(state = initialStateId, action) {
//     console.log(action);
//     let newState = JSON.parse(JSON.stringify(state));
//     switch (action.type) {
//         case 'DID_MOUNT':
//             newState = action.payload.id;
//             break;
//         default:
//             return state;
//     }
//     console.log(newState)
//     return newState;
// };

// const initialStateName = ""
// export function name(state = initialStateName, action) {
//     console.log(action);
//     let newState = JSON.parse(JSON.stringify(state));
//     switch (action.type) {
//         case 'DID_MOUNT':
//             newState = action.payload.name;
//             break;
//         default:
//             return state;
//     }
//     return newState;
// };
const initialState = {
    id: "",
    name: "",
}
export function register(state = initialState, action) {
    console.log(action);
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'DID_MOUNT':
            newState.id = action.payload.id;
            newState.name = action.payload.name;
            break;
        case 'UPDATE_ID':
            newState.id = action.payload.value;
            break;
        case 'UPDATE_NAME':
            newState.name = action.payload.value;
            break;
        default:
            return state;
    }
    console.log(newState);
    return newState;
};
