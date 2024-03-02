import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';

import {GenreResInterface} from "../../../interfaces";
import {genreService} from "../../../services";
import {useAppContext} from "../../../hooks";
import css from './GenresMenu.module.css';

const GenresMenu = () => {
    const [genreValue, setGenreValue] = useState<string>('');
    const navigate = useNavigate();
    const {theme} = useAppContext();


    const handleChange = (event: SelectChangeEvent) => {
        setGenreValue(event.target.value);
    };
    const [genresRes, setGenresRes] = useState<GenreResInterface>({genres:[]})

    useEffect(() => {
        if(genreValue){
            navigate(`/genres/${genreValue}`)
        }
    }, [genreValue, navigate]);

    useEffect(() => {
        genreService.getAll().then(({data})=>setGenresRes(data))
    }, []);

    const genres = genresRes.genres
    const myClass= `${css[theme]} ${css.GroupBox}`

    const MenuProps = {
        PaperProps: {
            style: {
                display:"flex",
                maxHeight: 200,
                width: 500,
                backgroundColor: theme === 'dark' ? 'rgba(3,37,65,0.89)' : 'rgba(157,207,243,0.92)'
            }
        },
    }
    return (
        <div className={myClass}>
            <FormControl sx={{
                m: 1,
                minWidth: 100,
                maxWidth: 180,
                '& .MuiOutlinedInput-root': {
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme === 'dark' ? 'peachpuff' : '#281515',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme === 'dark' ? 'peachpuff' : '#281515',
                    },
                    '& .MuiSelect-iconOutlined':{
                        color: theme === 'dark' ? 'peachpuff' : '#281515',
                    }
                },
            }}
            >
                <InputLabel id="genre-select-label" ><p className={css[theme]}>Genres</p></InputLabel>
                <Select
                    labelId="genre-select-label"
                    id="genre-select"
                    value={genreValue}
                    label="Genres"
                    onChange={handleChange}
                    MenuProps={MenuProps}
                >
                    {genres.map(genre=>
                        <MenuItem key={genre.id} value={genre.id}>
                            <p className={css[theme]}>{genre.name}</p>
                        </MenuItem>)}
                </Select>
            </FormControl>
        </div>
    );
}

export {GenresMenu};
