import React from 'react';
import ReactDOM from 'react-dom/client';

// router
import { RouterProvider } from 'react-router-dom';
import router from './modules/routerModule';

// redux
import store from './redux/store';
import { Provider } from 'react-redux';

// css
//import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/bootstrap.custom.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <RouterProvider router={router} /> */}
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
