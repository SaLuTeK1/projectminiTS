import {LoginForm} from "../components";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

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