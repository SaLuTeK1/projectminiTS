import {FC} from 'react';
import {IMovieRes} from "../../../interfaces";
import {MoviesListCard} from "../../MoviesContainer/MovieListCard/MoviesListCard";
import css from './SearchedMovies.module.css'
import {next, prev} from "../../../utils";
import {SetURLSearchParams} from "react-router-dom";
interface IProps {
    searchRes:IMovieRes
    setQuery:SetURLSearchParams
    query:URLSearchParams
}

const SearchedMovies: FC<IProps> = ({searchRes, setQuery, query}) => {
    const movies = searchRes.results
    const page = query.get('page')
    const totalPages = searchRes.total_pages

    return (
        <div className={css.wrap}>
            <div className={css.MoviesBox}>
                {movies.map(movie=><MoviesListCard movie={movie} key={movie.id}/>)}
            </div>
            <div>
                <button disabled={page==='1' } onClick={()=>prev(setQuery)}>Back</button>
                <button>{page}</button>
                <button disabled={page==='500' ||page===`${totalPages}`} onClick={()=>next(setQuery)} >Forward</button>
            </div>
        </div>
    );
};

export {SearchedMovies};