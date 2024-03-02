import {Outlet} from "react-router-dom";

import css from './MainLayout.module.css'
import {Header} from "../components";
import {useAppContext} from "../hooks";

const MainLayout = () => {
    const { theme } = useAppContext();

    return (
        <div className={css[theme]}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};