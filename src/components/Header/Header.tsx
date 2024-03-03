import {Link} from "react-router-dom";

import css from './Header.module.css'
import {useAppContext} from "../../hooks";
import {GenresSelect} from "../GenresContainer/GenresMenu/GenresSelect";
import {Search} from "../SearchContainer/Search/Search";
import {FavBadge} from "../BadgeContainer/FavBadge/FavBadge";
import {SwitchContainer} from "../SwitchContainer/SwitchContainer";
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
const Header = () => {

    const { theme } = useAppContext();

    const myClass = `${css.WrapBox} ${css[theme]}`



    return (
        <div className={css.BigBox}>
            <div className={myClass}>
                <div className={css.Header}>
                    <div className={css.miniBoxes}>
                        <h1><Link className={css[theme]} to={''}>MovieArea</Link></h1>
                        <GenresSelect/>
                        <div>
                            <Search/>
                        </div>
                    </div>
                    <div className={`${css.miniBoxes} ${css.rightside}`}>
                        <AccountBoxRoundedIcon sx={{
                            width:35,
                            height:35
                        }}/>
                        <FavBadge/>
                        <SwitchContainer/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Header};