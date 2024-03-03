import { useEffect, useState} from "react";

import {useAppContext} from "../../../hooks";
import {genreService} from "../../../services";
import {GenreResInterface} from "../../../interfaces";
import css from './GenresSelect.module.css'

const GenresSelect = () => {
    const [genresRes, setGenresRes] = useState<GenreResInterface>({genres:[]})
    const {theme} = useAppContext();
    const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

    const genres = genresRes.genres;

    useEffect(() => {
        genreService.getAll().then(({data})=>setGenresRes(data))
    }, []);

    const toggleGenreSelection = (id: number) => {
        let elementById = document.getElementById(`g${id}`);
        elementById.classList.add(css.marked)

        setSelectedGenres(prevSelected => {
            if (prevSelected.includes(id)) {
                return prevSelected.filter(genreId => genreId !== id);
            } else {
                return [...prevSelected, id];
            }
        });
    };
    const clearGenres = () =>{
        selectedGenres.forEach(genreId => {
            const elementById = document.getElementById(`g${genreId}`);
            if (elementById) {
                elementById.classList.remove(css.marked);
            }
        });
        setSelectedGenres([]);
    }

    return (
        <div>
            <div className={css.dropdown}>
                <h1>Genres</h1>
                <div className={`${css.dropdownContent} ${css[theme]}`}>
                    {genres.map(genre=><div className={css[theme]}
                                            id={`g${genre.id}`}
                                          key={genre.id}
                                          onClick={() => toggleGenreSelection(genre.id)}>{genre.name}</div>)}

                    <div className={css[theme]} onClick={clearGenres}><b>Clear genres</b></div>
                    <a className={css[theme]} href={`/genres/${selectedGenres.toString()}`}><b>Advanced search</b></a>
                </div>
            </div>
        </div>
    );
};

export {GenresSelect};