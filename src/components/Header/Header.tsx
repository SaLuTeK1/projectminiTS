import {Link} from "react-router-dom";

import css from './Header.module.css'
import {useAppContext} from "../../hooks";
import {GenresMenu} from "../GenresContainer/Genres/GenresMenu";
import {Search} from "../SearchContainer/Search/Search";
import {MyBadge} from "../BadgeContainer/FavBadge/Badge";
import {SwitchContainer} from "../SwitchContainer/SwitchContainer";

const Header = () => {

    const { theme } = useAppContext();

    const myClass = `${css.WrapBox} ${css[theme]}`



    return (
        <div className={css.BigBox}>
            <div className={myClass}>
                <div className={css.Header}>
                    <div className={css.MiniBoxes}>
                        <h1><Link className={css[theme]} to={''}>MovieArea</Link></h1>
                        <GenresMenu/>
                        <div>
                            <Search/>
                        </div>
                    </div>
                    <div className={css.MiniBoxes}>
                        <MyBadge/>
                        <SwitchContainer/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Header};