import {FC} from 'react';
import {Link} from "react-router-dom";
import Rating from '@mui/material/Rating';

import css from './MovieListCard.module.css'
import {IMovie} from "../../../interfaces";
import {imageUrl} from "../../../constants";
import {useAppContext} from "../../../hooks";


interface IProps {
    movie:IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {theme} = useAppContext();
    const {id, title, poster_path, vote_average} = movie

    return (
        <div className={css.MovieBox}>
            <Link to={`/details/${id}`}>
                <img alt={title} src={imageUrl + poster_path}/>
            </Link>
            <div className={css.TextStars}>
                <Link to={`/details/${id}`}>
                    <h3 className={css[theme]}>{title}</h3>
                </Link>
                <Rating name="half-rating-read" value={vote_average / 2} precision={0.2} readOnly />
            </div>
        </div>
    );
};

export {MoviesListCard}