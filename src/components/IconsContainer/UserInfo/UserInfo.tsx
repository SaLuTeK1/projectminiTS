import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";

import css from './UserInfo.module.css'

import {useEffect, useState} from "react";

const UserInfo = () => {

    const usernameStorage = localStorage.getItem('username');
    const [username, setUsername] = useState<string>(null)
    useEffect(() => {
         setUsername(usernameStorage);
    }, [usernameStorage]);


    return (
        <div className={css.ProfileBox}>
            <AccountBoxRoundedIcon sx={{
                width:35,
                height:35
            }}/>
            <p>{username}</p>
        </div>
    );
};

export {UserInfo};