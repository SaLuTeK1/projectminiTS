import {FC, useEffect, useState} from 'react';
import Favorite from "@mui/icons-material/Favorite";
import {Badge} from "@mui/material";
import {useAppContext} from "../../../hooks";
interface IProps {

}

const MyBadge: FC<IProps> = () => {
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

    return (
        <div>
            <Badge badgeContent={counter} color="primary">
                <Favorite color={'error'} sx={{
                    width:35,
                    height:35
                }}/>
            </Badge>
        </div>
    );
};

export {MyBadge};