import {FC} from 'react';
import {SetURLSearchParams} from "react-router-dom";

import {IMovieRes} from "../../../interfaces";
import {MoviesListCard} from "../MovieListCard/MoviesListCard";
import {Pagination} from "../../Pagination";

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
            <Pagination setQuery={setQuery} totalPages={totalPage} page={page}/>
        </div>
    );
};

export {MoviesByGenres};