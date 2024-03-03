import {useEffect, useState} from "react";
import {SavedMovies} from "../components";
import {useAppContext} from "../hooks";
import {useNavigate} from "react-router-dom";
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

    const {theme} = useAppContext();
    const navigate = useNavigate();
    return (
        <div className={'background wrap'}>
                <button className={`my-button button-${theme}`} onClick={()=>navigate(-1)}>Back</button>
            <div className={'movies-box'}>
                {ids.length===0?<h3>Your list is empty</h3>:ids.map(id=><SavedMovies key={id} id={+id}/>)}
            </div>
        </div>
    );
};

export {SavedMoviesPage};