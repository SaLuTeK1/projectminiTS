import {FC} from 'react';

import {IMovieRes} from "../../../interfaces";
import {MoviesListCard} from "../MovieListCard/MoviesListCard";
import {next, prev} from "../../../utils";
import {SetURLSearchParams} from "react-router-dom";

interface IProps {
    genreMovies:IMovieRes
    query:URLSearchParams
    setQuery:SetURLSearchParams
}

const MoviesByGenres: FC<IProps> = ({genreMovies, setQuery, query}) => {
    const movies = genreMovies.results
    const page = query.get('page')
    const totalPage = genreMovies.total_pages

    return (
        <div className={'wrap'}>
            <div className={'movies-box'}>
                {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            <div>
                <button disabled={page==='1'} onClick={()=>prev(setQuery)}>Back</button>
                <button>{page}</button>
                <button disabled={page==='500'|| page ===`${totalPage}`} onClick={()=>next(setQuery)} >Forward</button>
            </div>
        </div>
    );
};

export {MoviesByGenres};