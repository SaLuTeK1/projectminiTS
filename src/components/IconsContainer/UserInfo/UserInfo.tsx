import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import css from './UserInfo.module.css'
import {useAppContext} from "../../../hooks";
const UserInfo = () => {

    const {promptUserName} = useAppContext();
    return (
        <div className={css.ProfileBox}>
            <AccountBoxRoundedIcon sx={{
                width:35,
                height:35
            }}/>
            <p>{promptUserName}</p>
        </div>
    );
};

export {UserInfo};