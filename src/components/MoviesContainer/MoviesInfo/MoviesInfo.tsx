import {FC, useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import {IMovie} from "../../../interfaces";
import {useAppContext} from "../../../hooks";
import {IconButtonContainer} from "../../IconsContainer";
import {StarsRating} from "../../StarsRating";
import {PosterPreview} from "../../PosterPreview";
import css from './MoviesInfo.module.css'

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

    const navigate = useNavigate();

    
    return (
        <div className={myClass}>
            <div className={'wrap'}>
                <button className={`my-button button-${theme}`} onClick={()=>navigate(-1)}>Back</button>
            </div>
            <div className={css.BigBox}>
                <div>
                    <PosterPreview title={title} poster_path={poster_path}/>
                </div>
                <div className={css.InfoText}>
                    <h1>{title} ({date[0]})</h1>
                    <h5><i>{tagline}</i></h5>
                    <div className={`${css.Stars}`}>
                        <h3>Rating:</h3> <StarsRating vote_average={vote_average}/>
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
                        <IconButtonContainer id={id} toggleTrigger={toggleTrigger} setIds={setIds}/>
                    </div>
                </div>
            </div>
            <div>
            </div>

        </div>
    );
};

export {MoviesInfo};