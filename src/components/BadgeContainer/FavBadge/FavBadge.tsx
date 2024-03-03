import {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Favorite from "@mui/icons-material/Favorite";
import {Badge} from "@mui/material";

import {useAppContext} from "../../../hooks";
import css from './FavBadge.module.css'

interface IProps {

}

const FavBadge: FC<IProps> = () => {
    const [counter, setCounter] = useState<number>(0)
    const {triggerFavorite} = useAppContext();

    useEffect(() => {
        const favorites = localStorage.getItem('favoriteMovies');
        if (favorites) {
            const favoriteMovies = JSON.parse(favorites);
            setCounter(favoriteMovies.length);
        } else {
            setCounter(0);
        }
    }, [triggerFavorite]);

    const navigate = useNavigate();
    const toFavorites = () =>{
        navigate('/favorites')
    }
    return (
        <div>
            <Badge badgeContent={counter} color="primary" onClick={toFavorites} className={css.heart}>
                <Favorite color={'error'} sx={{
                    width:35,
                    height:35
                }}/>
            </Badge>
        </div>
    );
};

export {FavBadge};