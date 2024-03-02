import {IGenre} from "./genreInterface";

export interface IMovie{
    title:string
    id:number
    genres:IGenre[]
    poster_path:string
    release_date:string
    overview:string
    vote_average:number
    runtime:number
    tagline:string
    backdrop_path:string
    vote_count:number
}


