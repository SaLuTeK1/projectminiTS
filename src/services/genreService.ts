import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {GenreResInterface} from "../interfaces";

const genreService = {
    getAll:():IRes<GenreResInterface>=>apiService.get(urls.genre.base)
}
export {genreService}