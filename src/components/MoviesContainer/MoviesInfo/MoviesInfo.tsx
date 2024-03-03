import {FC, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Rating from "@mui/material/Rating";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import {IMovie} from "../../../interfaces";
import {imageUrl} from "../../../constants";
import css from './MoviesInfo.module.css'
import {useAppContext} from "../../../hooks";
import Favorite from "@mui/icons-material/Favorite";
import {IconButton} from "@mui/material";

interface IProps {
    movieInfo:IMovie
}

const MoviesInfo: FC<IProps> = ({movieInfo}) => {

    const {genres, title , poster_path, vote_average, release_date, overview, runtime, tagline, vote_count, id} = movieInfo;

    const date = release_date.split('-')

    const {theme} = useAppContext();
    const myClass = `${css.Wrapper} ${css[theme]}}`

    const {toggleTrigger} = useAppContext();

    const [ids, setIds] = useState<string[]>([])
    
    const favorites = localStorage.getItem('favoriteMovies');
    useEffect(() => {
        if (favorites) {
            const modifiedString = favorites.slice(1, favorites.length - 1);
            const stringId = modifiedString.split(',');
            setIds(stringId)
        }
    }, [favorites]);



    const toFavourite = async () =>{
        const favorites = localStorage.getItem('favoriteMovies');
        const favoriteMovies = favorites ? JSON.parse(favorites) : [];
        if (!favoriteMovies.includes(id)) {
            favoriteMovies.push(id);
            localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
            toggleTrigger();
        }
    }
    const removeFavorite = async (id:number) =>{
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
    const text = document.getElementById(`text${id}`)
    const text2 = document.getElementById(`text2${id}`)
    const fav = document.getElementById(`f${id}`)
    const cross = document.getElementById(`cancl${id}`)
    useEffect(() => {
        if (ids?.includes(`${id}`)){
            fav.classList.add(`hide`)
            fav.classList.remove('show')

            cross.classList.add('show')
            cross.classList.remove('hide')

            text.classList.add('hide')
            text.classList.remove('show')

            text2.classList.add('show')
            text2.classList.remove('hide')
        }
        if (!ids.includes(`${id}`)){
            fav?.classList.remove('hide')
            fav?.classList.add(`show`)

            cross?.classList.remove('show')
            cross?.classList.add('hide')

            text2?.classList.add('hide')
            text2?.classList.remove('show')

            text?.classList.add('show')
            text?.classList.remove('hide')
        }
    }, [ids, fav, cross, id , text,text2]);


    return (
        <div className={myClass}>
            <div className={css.BigBox}>
                <div>
                    <img alt={title} src={imageUrl + poster_path}/>
                </div>
                <div className={css.InfoText}>
                    <h1>{title} ({date[0]})</h1>
                    <h5><i>{tagline}</i></h5>
                    <div className={`${css.Stars}`}>
                        <h3>Rating:</h3>   <Rating name="half-rating-read" value={vote_average / 2} precision={0.2} readOnly/>
                    </div>
                    <div className={css.SmallBoxes}>
                        <h4>Rating in ten-point scale: {vote_average}/10</h4>
                        <h4>Rating in percents: {vote_average*10}%</h4>
                        <h4>Vote count: {vote_count}</h4>
                    </div>
                    <div className={css.SmallBoxes}>
                        <h3>Genres:</h3>
                        <ul>
                            {genres.map(genre => (
                                <li key={genre.id} className={css.links}>
                                    <Link to={`/genres/${genre.id}`} className={css[theme]}> {genre.name} </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`${css.OtherText} ${css.SmallBoxes}`}>
                        <h4>Runtime:</h4><p> {runtime} min.</p>
                    </div>
                    <div className={css.SmallBoxes}>
                        <h4>Release date: {release_date}</h4>
                    </div>
                    <div className={css.SmallBoxes}>
                        <h3>Overview:</h3><i><p>{overview}</p></i>
                    </div>
                    <div className={`${css.OtherText} ${css.SmallBoxes}`} id={`box${id}`}>
                        <div id={`text${id}`} className={`show`}>
                            <h4 >Wanna save this?</h4>
                        </div>
                        <div id={`text2${id}`} className={`hide`}>
                            <h4 >Wanna delete this?</h4>
                        </div>

                        <IconButton id={`f${id}`} className={`show`} onClick={toFavourite}>
                            <Favorite color={'error'}
                                      sx={{
                                          width:40,
                                          height:40
                            }} />

                        </IconButton>
                        <IconButton id={`cancl${id}`} className={`hide`} onClick={()=>removeFavorite(id)}>
                            <CancelOutlinedIcon  sx={{
                                width:40,
                                height:40
                            }}/>
                        </IconButton>
                    </div>
                </div>
            </div>
            <div>
            </div>

        </div>
    );
};

export {MoviesInfo};