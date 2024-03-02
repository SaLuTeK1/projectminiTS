import {FC} from 'react';

import css from './MoviesList.module.css'
import {IMovieRes} from "../../../interfaces";
import {MoviesListCard} from "../Movie/MoviesListCard";

interface IProps {
    moviesRes:IMovieRes
}

const MoviesList: FC<IProps> = ({moviesRes}) => {
    const movies = moviesRes.results
    return (
        <div className={css.wrap}>
            <div className={css.MoviesBox}>
                {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {MoviesList};
