import {FC} from 'react';
import {Link} from "react-router-dom";

import {IMovie} from "../../../interfaces";
import {useAppContext} from "../../../hooks";
import {StarsRating} from "../../StarsRating";
import {PosterPreview} from "../../PosterPreview";
import css from './MovieListCard.module.css'


interface IProps {
    movie:IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {theme} = useAppContext();
    const {id, title, poster_path, vote_average} = movie



    return (
        <div className={`${css.MovieBox} height`}>
            <Link to={`/details/${id}`}>
                <PosterPreview title={title} poster_path={poster_path}/>
                 <div className={css.TextStars}>
                         <h3 className={`${theme}`}>{title}</h3>
                     <StarsRating vote_average={vote_average}/>
                 </div>
            </Link>
        </div>
    );
};

export {MoviesListCard}