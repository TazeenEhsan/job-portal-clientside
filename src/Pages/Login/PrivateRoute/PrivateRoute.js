import React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

import SignIn from '../SignIn/SignIn';

const PrivateRoute = () => {


    // const isLogin = JSON.parse(localStorage.getItem('isLogin'));
    const isLogin = localStorage.getItem('isLogin');

    console.log(isLogin);
    console.log(typeof (isLogin));
    console.log(typeof ("login"));

    const Login = JSON.stringify("login")

    console.log('isLogin matching', isLogin === Login);





    if (isLogin === Login) {
        return <Outlet></Outlet>



    }
    else {

        return <SignIn></SignIn>
    }
};

export default PrivateRoute;