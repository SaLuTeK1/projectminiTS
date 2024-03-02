import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {MoviesInfo} from "../components";
import {IMovie} from "../interfaces";
import {movieService} from "../services";

const MovieInfoPage = () => {
    const [movieInfo, setMovieInfo] = useState<IMovie>(null)
    const {id} = useParams();

    useEffect(() => {
        movieService.getById(+id).then(({data})=> setMovieInfo(data))
    }, [id]);

    return (

        <div>
            {movieInfo&&<MoviesInfo movieInfo={movieInfo}/>}
        </div>
    );
};

export {MovieInfoPage};