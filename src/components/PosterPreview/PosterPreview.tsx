import {FC} from 'react';
import {imageUrl} from "../../constants";

interface IProps {
    title:string
    poster_path:string
}

const PosterPreview: FC<IProps> = ({poster_path, title}) => {
    return (
        <div>
            <img alt={title} src={imageUrl + poster_path}/>
        </div>
    );
};

export {PosterPreview};