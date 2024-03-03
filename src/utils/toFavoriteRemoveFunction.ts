import {ISetState} from "../types";

export const toFavourite = async (id:number,toggleTrigger:()=>void):Promise<void> =>{
    const favorites = localStorage.getItem('favoriteMovies');
    const favoriteMovies = favorites ? JSON.parse(favorites) : [];
    if (!favoriteMovies.includes(id)) {
        favoriteMovies.push(id);
        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
        toggleTrigger();
    }
}
export const removeFavorite = async (id:number,toggleTrigger:()=>void,setIds:ISetState<string[]>):Promise<void> =>{
    const favorites = localStorage.getItem('favoriteMovies');
    const favList:number[] = JSON.parse(favorites);
    const updatedFavList = favList.filter(favId => favId !== id);
    if (updatedFavList.length === 0) {
        localStorage.removeItem('favoriteMovies');
        setIds([]);
    } else {
        localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavList));
    }
    toggleTrigger();
}