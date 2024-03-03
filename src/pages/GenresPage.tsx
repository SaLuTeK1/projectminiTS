import {useEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {IMovieRes} from "../interfaces";
import {movieService} from "../services";
import {MoviesByGenres} from "../components";


const GenresPage = () => {

    const [genreMovies, setGenreMovies] = useState<IMovieRes>({page:null,results:[], total_pages:null})

    const [query,setQuery] = useSearchParams({page:'1'});
    const page = query.get('page')

    const {genreId} = useParams();

    
    useEffect(() => {
        if(genreId?.length>1){
            movieService.getBySeveralGenreIds(genreId,page).then(({data})=>setGenreMovies({page:data.page,results:data.results, total_pages:data.total_pages}))
        }if(genreId?.length===1){
        movieService.getByGenreId(+genreId,page).then(({data})=>setGenreMovies({page:data.page,results:data.results, total_pages:data.total_pages}))
        }
    }, [genreId,page]);

    return (
        <div className={`background`}>
            {genreMovies&&<MoviesByGenres genreMovies={genreMovies} setQuery={setQuery} query={query}/>}
        </div>
    );
};

export {GenresPage};