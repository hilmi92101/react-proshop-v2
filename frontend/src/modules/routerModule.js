//import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    //RouterProvider,
} from 'react-router-dom';

import App from '../App';

// screens
import PrivateRoute from '../components/PrivateRoute';

import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ShippingScreen from '../screens/ShippingScreen';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route index={true} path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart' element={<CartScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />

            {/* Registered users */}
            <Route path='' element={<PrivateRoute />}>
                <Route path='/shipping' element={<ShippingScreen />} />
            </Route>
        </Route>
    )
);

export default router;