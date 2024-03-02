import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovieRes} from "../interfaces";

const searchService ={
    getAll:(word:string,page:string):IRes<IMovieRes>=>apiService.get(urls.search.byWord(word),{params:{page}})
}
export {searchService}