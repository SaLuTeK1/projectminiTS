import { Header } from "../components";
import css from "./ErrorPage.module.css";
import {useAppContext} from "../hooks";
const ErrorPage = () => {
    const {theme} = useAppContext();

    return (
        <div className={`${theme}`}>
            <Header/>
            <div className={css.content}>
                <h2>Attention, an error has been detected</h2>
                <h4>No publications were found on the site for this address, or you do not have access to view information at this address</h4>
            </div>
        </div>
    );
};

export {ErrorPage};