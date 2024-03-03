import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import {LoginForm} from "../components";

const LoginPage = () => {

    const username = localStorage.getItem('username');

    const navigate = useNavigate();

    useEffect(() => {
        if (username) {
            navigate('/movies');
        }
    }, [username, navigate]);

    return (
        <div>
            <LoginForm/>
        </div>
    );
};

export {LoginPage};