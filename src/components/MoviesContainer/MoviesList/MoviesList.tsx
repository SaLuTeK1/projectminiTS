import {FC} from 'react';
import {SetURLSearchParams} from "react-router-dom";

import {MoviesListCard} from "../MovieListCard/MoviesListCard";
import {IMovieRes} from "../../../interfaces";
import {Pagination} from "../../Pagination/Pagination";

interface IProps {
    moviesRes:IMovieRes
    setQuery:SetURLSearchParams
    query:URLSearchParams
}

const MoviesList: FC<IProps> = ({moviesRes, setQuery, query}) => {
    const movies = moviesRes.results
    const totalPages = moviesRes.total_pages;
    const page = query.get('page')
    return (
        <div className={'wrap'}>
            <div className={'movies-box'}>
                {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            <Pagination setQuery={setQuery} totalPages={totalPages} page={page}/>
        </div>
    );
};

export {MoviesList};
