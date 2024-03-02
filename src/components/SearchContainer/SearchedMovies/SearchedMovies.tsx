import {FC} from 'react';
import {IMovieRes} from "../../../interfaces";
import {MoviesListCard} from "../../MoviesContainer/Movie/MoviesListCard";
import css from './SearchedMovies.module.css'
interface IProps {
    searchRes:IMovieRes
}

const SearchedMovies: FC<IProps> = ({searchRes}) => {
    const movies = searchRes.results
    return (
        <div className={css.wrap}>
            <div className={css.MoviesBox}>
                {movies.map(movie=><MoviesListCard movie={movie} key={movie.id}/>)}
            </div>
        </div>
    );
};

export {SearchedMovies};