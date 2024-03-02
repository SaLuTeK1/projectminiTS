import {useEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {next, prev} from "../utils";
import {IMovieRes} from "../interfaces";
import {movieService} from "../services";
import {MoviesByGenres} from "../components/MoviesContainer/MoviesByGenres/MoviesByGenres";

const GenresPage = () => {

    const [genreMovies, setGenreMovies] = useState<IMovieRes>({page:null,results:[]})

    const [query,setQuery] = useSearchParams({page:'1'});
    const page = query.get('page')

    const {genreId} = useParams();

    useEffect(() => {
        movieService.getByGenreId(+genreId,page).then(({data})=>setGenreMovies({page:data.page,results:data.results}))
    }, [genreId,page]);


    return (
        <div>
            {genreMovies&&<MoviesByGenres genreMovies={genreMovies}/>}
            <div>
                <button disabled={page==='1'} onClick={()=>prev(setQuery)}>Back</button>
                <button>{page}</button>
                <button disabled={page==='500'} onClick={()=>next(setQuery)} >Forward</button>
            </div>
        </div>
    );
};

export {GenresPage};