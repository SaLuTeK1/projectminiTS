import {useEffect, useState} from "react";
import {SavedMovies} from "../components";
const SavedMoviesPage = () => {

    const [ids, setIds] = useState<string[]>([])
    const favId = localStorage.getItem('favoriteMovies');


    useEffect(() => {
        if (favId) {
            const modifiedString = favId.slice(1, favId.length - 1);
            const stringId = modifiedString.split(',');
            setIds(stringId)
        }
    }, [favId]);


    return (
        <div className={'background wrap'}>
            <div className={'movies-box'}>
                {ids.length===0?<h3>Your list is empty</h3>:ids.map(id=><SavedMovies key={id} id={+id}/>)}

            </div>
        </div>
    );
};

export {SavedMoviesPage};