import {FC} from 'react';
import {SetURLSearchParams} from "react-router-dom";

import {IMovieRes} from "../../../interfaces";
import {MoviesListCard} from "../../MoviesContainer/MovieListCard/MoviesListCard";
import css from './SearchedMovies.module.css'
import {Pagination} from "../../Pagination/Pagination";
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
            <Pagination setQuery={setQuery} totalPages={totalPages} page={page}/>
        </div>
    );
};

export {SearchedMovies};