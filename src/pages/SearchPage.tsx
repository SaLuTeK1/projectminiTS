
import {SearchedMovies} from "../components";
import {useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {searchService} from "../services";
import {IMovieRes} from "../interfaces";


const SearchPage = () => {
    const {word} = useParams();
    const [searchRes, setSearchRes] = useState<IMovieRes>({page:null,results:[], total_pages:null});
    const [query,setQuery] = useSearchParams({page:'1'});
    const page = query.get('page')

    useEffect(() => {
        if(word){
            searchService.getAll(word,page).then(({data})=>setSearchRes({page:data.page,results:data.results, total_pages:data.total_pages}))
        }
    }, [word,page]);

    return (
        <div className={`background`}>
            <SearchedMovies searchRes={searchRes} setQuery={setQuery} query={query}/>
        </div>
    );
};

export {SearchPage};