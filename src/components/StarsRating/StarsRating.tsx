import {FC} from 'react';
import Rating from "@mui/material/Rating";

interface IProps {
    vote_average:number
}

const StarsRating: FC<IProps> = ({vote_average}) => {
    return (
        <div>
            <Rating name="half-rating-read" value={vote_average / 2} precision={0.2} readOnly />
        </div>
    );
};

export {StarsRating};