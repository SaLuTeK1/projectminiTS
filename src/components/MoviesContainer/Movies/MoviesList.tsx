import {FC} from 'react';

import css from './MoviesList.module.css'
import {IMovieRes} from "../../../interfaces";
import {MoviesListCard} from "../Movie/MoviesListCard";
import {next, prev} from "../../../utils";
import {SetURLSearchParams} from "react-router-dom";

interface IProps {
    moviesRes:IMovieRes
    setQuery:SetURLSearchParams
    query:URLSearchParams
}

const MoviesList: FC<IProps> = ({moviesRes, setQuery, query}) => {
    const movies = moviesRes.results
    const totalPages = moviesRes.total_pages;
    const page = query.get('page')
    console.log(totalPages)
    return (
        <div className={css.wrap}>
            <div className={css.MoviesBox}>
                {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            <div>
                <button disabled={page==='1'} onClick={()=>prev(setQuery)}>Back</button>
                <button>{page}</button>
                <button disabled={page==='500'||page===`${totalPages}`} onClick={()=>next(setQuery)} >Forward</button>
            </div>
        </div>
    );
};

export {MoviesList};
