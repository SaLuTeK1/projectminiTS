import {IMovie} from "./movieInterface";

export interface IMovieRes{
    page:string | null,
    results:IMovie[]
    total_pages:number
}

