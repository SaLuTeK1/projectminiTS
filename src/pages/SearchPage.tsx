
import {SearchedMovies} from "../components";
import {useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {searchService} from "../services";
import {IMovieRes} from "../interfaces";
import {next, prev} from "../utils";

const SearchPage = () => {
    const {word} = useParams();
    const [searchRes, setSearchRes] = useState<IMovieRes>({page:null,results:[]});
    const [query,setQuery] = useSearchParams({page:'1'});
    const page = query.get('page')

    useEffect(() => {
        if(word){
            searchService.getAll(word,page).then(({data})=>setSearchRes({page:data.page,results:data.results}))
        }
    }, [word,page]);

    return (
        <div>
            <SearchedMovies searchRes={searchRes}/>
            <div>
                <button disabled={page==='1'} onClick={()=>prev(setQuery)}>Back</button>
                <button>{page}</button>
                <button disabled={page==='500'} onClick={()=>next(setQuery)} >Forward</button>
            </div>
        </div>
    );
};

export {SearchPage};