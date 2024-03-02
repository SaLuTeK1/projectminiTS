import {IMovie} from "./movieInterface";

export interface IMovieRes{
    page:string | null,
    results:IMovie[]
}

