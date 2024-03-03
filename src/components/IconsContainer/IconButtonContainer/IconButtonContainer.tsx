import {FC} from 'react';
import Favorite from "@mui/icons-material/Favorite";
import {IconButton} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

import {removeFavorite, toFavourite} from "../../../utils";
import {ISetState} from "../../../types";

interface IProps {
    id:number
    toggleTrigger:()=>void
    setIds:ISetState<string[]>
}

const IconButtonContainer: FC<IProps> = ({id,toggleTrigger,setIds}) => {
    return (
        <div>
            <IconButton id={`f${id}`} className={`show`} onClick={()=>toFavourite(id, toggleTrigger)}>
                <Favorite color={'error'}
                          sx={{
                              width:40,
                              height:40
                          }} />

            </IconButton>
            <IconButton id={`cancl${id}`} className={`hide`} onClick={()=>removeFavorite(id, toggleTrigger, setIds)}>
                <CancelOutlinedIcon  sx={{
                    width:40,
                    height:40
                }}/>
            </IconButton>
        </div>
    );
};

export {IconButtonContainer};