import {FC, useEffect, useState} from 'react';

import {movieService} from "../../../services";
import {IMovie} from "../../../interfaces";
import {MoviesListCard} from "../MovieListCard/MoviesListCard";
import css from './SavedMovies.module.css'
interface IProps {
    id:number
}

const SavedMovies: FC<IProps> = ({id}) => {
    const [movies, setMovies] = useState<IMovie>(null)

    useEffect(() => {
        movieService.getById(id).then(({data})=>setMovies(data))
    }, [id]);

    return (
        <div className={`${css.MovieBox} saved`}>
            {movies&&<MoviesListCard key={movies.id} movie={movies}/>}
        </div>
    );
};

export {SavedMovies};