import {FC, useEffect, useState} from 'react';
import {movieService} from "../../../services";
import {IMovie} from "../../../interfaces";
import {MoviesListCard} from "../Movie/MoviesListCard";

interface IProps {
    id:number
}

const SavedMovies: FC<IProps> = ({id}) => {
    const [movies, setMovies] = useState<IMovie>(null)

    useEffect(() => {
        movieService.getById(id).then(({data})=>setMovies(data))
    }, [id]);

    return (
        <div >
            <div>
            {movies&&<MoviesListCard key={movies.id} movie={movies}/>}
            </div>
        </div>
    );
};

export {SavedMovies};