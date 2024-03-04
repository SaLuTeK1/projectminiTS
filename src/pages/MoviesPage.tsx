import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {MoviesList} from "../components";
import {IMovieRes} from "../interfaces";
import {movieService} from "../services";


const MoviesPage = () => {

    const [moviesRes, setMoviesRes] = useState<IMovieRes>({page:null,results:[],total_pages:null})
    const [query,setQuery] = useSearchParams({page:'1'});
    const page = query.get('page')

    useEffect(() => {
        movieService.getAll(page).then(({data})=>{
            setMoviesRes({page:data.page,results:data.results, total_pages:data.total_pages})
        })
    }, [page]);

    return (
        <div>
            <MoviesList moviesRes={moviesRes} setQuery={setQuery} query={query}/>
        </div>
    );
};

export {MoviesPage};