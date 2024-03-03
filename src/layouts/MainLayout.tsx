import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {useAppContext} from "../hooks";

const MainLayout = () => {
    const { theme } = useAppContext();

    return (
        <div className={`${theme}`}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};