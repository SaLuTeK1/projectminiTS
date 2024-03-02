import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovie, IMovieRes} from "../interfaces";

const movieService ={
    getAll:(page:string|null):IRes<IMovieRes>=>apiService.get(urls.movie.base,{params:{page}}),
    getById:(id:number):IRes<IMovie>=>apiService.get(urls.movie.byId(id)),
    getByGenreId:(genreId:number,page:string|null):IRes<IMovieRes>=>apiService.get(urls.movie.byGenre(genreId),{params:{page}})
}

export {movieService}