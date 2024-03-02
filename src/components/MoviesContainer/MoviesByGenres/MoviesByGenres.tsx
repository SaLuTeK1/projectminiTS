import {FC} from 'react';

import css from './MoviesByGenres.module.css'
import {IMovieRes} from "../../../interfaces";
import {MoviesListCard} from "../Movie/MoviesListCard";

interface IProps {
    genreMovies:IMovieRes
}

const MoviesByGenres: FC<IProps> = ({genreMovies}) => {
    const movies = genreMovies.results
    return (
        <div className={css.wrap}>
            <div className={css.MoviesBox}>
                {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {MoviesByGenres};