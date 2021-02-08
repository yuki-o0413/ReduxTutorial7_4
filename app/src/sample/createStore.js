import { createStore as reduxCreateStore, combineReducers } from "redux";
// import { test } from "./reducers";
// import { id, name } from "./reducers";
import { register } from "./reducers";


// export default function createStore() {
    // const store = reduxCreateStore(
        // combineReducers({
            // test
        // })
    // );
    // return store;
// }
export default function createStore() {
    const store = reduxCreateStore(
        combineReducers({
            register
        })
    );
    return store;
}

