import {useEffect, useState} from "react";
import {SavedMovies} from "../components/MoviesContainer/SavedMovies/SavedMovies";
import css from './SavedMoviesPage.module.css'
const SavedMoviesPage = () => {

    const [ids, setIds] = useState<string[]>([])
    const favId = localStorage.getItem('favoriteMovies');


    useEffect(() => {
        if (favId) {
            const modifiedString = favId.slice(1, favId.length - 1);
            const stringId = modifiedString.split(',');
            setIds(stringId)
        }
    }, [favId]);

    console.log(ids)
    
    return (
        <div className={css.FavMovieBox}>
            <div className={css.MoviesBox}>
                {ids?.map(id=><SavedMovies key={id} id={+id}/>)}
            </div>
        </div>
    );
};

export {SavedMoviesPage};