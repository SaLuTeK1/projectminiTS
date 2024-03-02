import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {MoviesList} from "../components";
import {IMovieRes} from "../interfaces";
import {movieService} from "../services";
import {next, prev} from "../utils";


const MoviesPage = () => {
    const [moviesRes, setMoviesRes] = useState<IMovieRes>({page:null,results:[]})

    const [query,setQuery] = useSearchParams({page:'1'});
    const page = query.get('page')


    useEffect(() => {
        movieService.getAll(page).then(({data})=>{
            setMoviesRes({page:data.page,results:data.results})
        })
    }, [page]);
    return (
        <div>
            <div>
                <MoviesList moviesRes={moviesRes}/>
                <div>
                    <button disabled={page==='1'} onClick={()=>prev(setQuery)}>Back</button>
                    <button>{page}</button>
                    <button disabled={page==='500'} onClick={()=>next(setQuery)} >Forward</button>
                </div>
            </div>
        </div>
    );
};

export {MoviesPage};