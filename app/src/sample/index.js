import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import createStore from './createStore';

const store = createStore();

/*
 * HTML側のid'contents'のDOMに
 * Reactコンポーネントのレンダリング結果を出力させている。
 */
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('contents')
);
