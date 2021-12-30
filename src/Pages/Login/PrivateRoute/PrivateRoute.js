import React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import SignIn from '../SignIn/SignIn';

const PrivateRoute = () => {
    const navigate = useNavigate();

    // const isLogin = JSON.parse(localStorage.getItem('isLogin'));
    const isLogin = localStorage.getItem('isLogin');

    console.log(isLogin);
    console.log(typeof (isLogin));
    console.log(typeof ("login"));

    const Login = JSON.stringify("login")

    console.log('isLogin matching', isLogin === Login);

    // isLogin === 'login' ? <Outlet /> : <SignIn></SignIn>



    if (isLogin === Login) {
        return <Outlet></Outlet>



    }
    else {

        return <SignIn></SignIn>
    }
};

export default PrivateRoute;