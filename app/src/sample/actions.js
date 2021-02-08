
// export const didMnt = (test) => {
//     return {
//         type: 'DID_MOUNT',
//         payload: { test }
//     };
// }
export const didMnt = (id,name) => {
    console.log(id,name);
    return {
        type: 'DID_MOUNT',
        payload: { id,name }
    };
}

export const updateFormId = (value) => {
    return {
        type: 'UPDATE_ID',
        payload: { value }
    };
}
export const updateFormName = (value) => {
    return {
        type: 'UPDATE_NAME',
        payload: { value }
    };
}
