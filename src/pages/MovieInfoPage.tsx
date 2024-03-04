import {useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";

import {MoviesInfo} from "../components";
import {IMovie} from "../interfaces";


interface ILoaderMovie{
    data:IMovie
}

const MovieInfoPage = () => {
    const [movieInfo, setMovieInfo] = useState<IMovie>(null)
    //const {id} = useParams();

    const {data} = useLoaderData() as ILoaderMovie;
    console.log(data)

    useEffect(() => {
        setMovieInfo(data)
    }, [data]);


    return (

        <div>
            {movieInfo&&<MoviesInfo movieInfo={movieInfo}/>}
        </div>
    );
};

export {MovieInfoPage};