import {FC, PropsWithChildren} from 'react';
import {Navigate} from "react-router-dom";

interface IProps extends PropsWithChildren{

}

const AuthChecker: FC<IProps> = ({children}) => {
    const username = localStorage.getItem('username');
    if (!username) {
        return <Navigate to="/login" replace />;
    }
    return <>{children}</>

};

export {AuthChecker};