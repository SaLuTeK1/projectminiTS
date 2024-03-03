import {useEffect, useState} from "react";
import {GenreResInterface} from "../../../interfaces";
import {genreService} from "../../../services";

const GenresChoose = () => {

    const [genresRes, setGenresRes] = useState<GenreResInterface>({genres:[]})

    const genres = genresRes.genres;

    useEffect(() => {
        genreService.getAll().then(({data})=>setGenresRes(data))
    }, []);



    return (
        <div>
            {genres.map(genre=><div key={genre.id}>{genre.name}</div>)}
        </div>
    );
};

export {GenresChoose};