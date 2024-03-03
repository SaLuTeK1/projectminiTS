import {FC} from 'react';
import {SetURLSearchParams} from "react-router-dom";

import {next, prev} from "../../utils";
import {useAppContext} from "../../hooks";

interface IProps {
    setQuery:SetURLSearchParams
    totalPages:number
    page:string
}

const Pagination: FC<IProps> = ({setQuery, totalPages, page}) => {
    const {theme} = useAppContext();
    return (
        <div>
            <div className={'button-box'}>
                <button className={`button-${theme} my-button`} disabled={page==='1'} onClick={()=>prev(setQuery)}>Back</button>
                <button className={`button-${theme} my-button`} >{page}</button>
                <button className={`button-${theme} my-button`} disabled={page==='500'||page===`${totalPages}`} onClick={()=>next(setQuery)} >Forward</button>
            </div>
        </div>
    );
};

export {Pagination};