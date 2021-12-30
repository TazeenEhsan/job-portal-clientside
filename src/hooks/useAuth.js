import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [authError, setAuthError] = useState('');
    const [token, setToken] = useState('j');

    const navigate = useNavigate();

    const registerUser = (email, password, name, phone, date, gender) => {
        setIsLoading(true);
        const user = { email, password, name, phone, date, gender };
        fetch('https://shrouded-bastion-71024.herokuapp.com/jobPortalUsers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(setIsLoading(false));

    }

    const loginUser = (email, password) => {

        const userInfo = { email, password }

        setIsLoading(true);

        fetch(`https://shrouded-bastion-71024.herokuapp.com/jobPortalUserlogin`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                setIsLogin(data.status)
                localStorage.setItem('isLogin', JSON.stringify(data.status))
                localStorage.setItem('token', JSON.stringify(data.token))
                localStorage.setItem('user', JSON.stringify(data.user))
                navigate('/dashboard')
            })
            .finally();

    }
    //
    // setToken(data)
    // console.log('islogin', isLogin);




    return {
        user,
        token,
        isLoading,
        isLogin,
        loginUser,
        registerUser
    }
}
export default useAuth;