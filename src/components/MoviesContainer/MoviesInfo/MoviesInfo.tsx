import {FC} from 'react';
import {Link} from "react-router-dom";
import Rating from "@mui/material/Rating";

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

    const toFavourite = async () =>{
        const favorites = localStorage.getItem('favoriteMovies');
        const favoriteMovies = favorites ? JSON.parse(favorites) : [];
        if (!favoriteMovies.includes(id)) {
            favoriteMovies.push(id);
            localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
            toggleTrigger();
        }
    }

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
                                <li key={genre.id}> <Link to={`/genres/${genre.id}`} className={css[theme]}> {genre.name} </Link> </li>
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
                    <div className={`${css.OtherText} ${css.SmallBoxes}`} >
                        <h4>Wanna save this?</h4>
                        <IconButton aria-label="add to favorites" onClick={toFavourite}><Favorite color={'error'}
                                                                                                  sx={{
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