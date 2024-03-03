import {FC, useEffect, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import OutlinedInput from '@mui/material/OutlinedInput'
import SearchIcon from '@mui/icons-material/Search';
import {styled} from "@mui/material";

import {useAppContext} from "../../../hooks";
import css from './Search.module.css'

interface IProps {

}

interface FormValues {
    searchText: string;
}

const Search: FC<IProps> = () => {
    const {reset, register, handleSubmit} = useForm<FormValues>();
    const [searchWord, setSearchWord] = useState<string>(null)

    const navigate = useNavigate();
    const {theme} = useAppContext();

    const save:SubmitHandler<FormValues> = async (data) =>{
        setSearchWord(data.searchText);
        console.log(data.searchText);
        reset();
    }

    useEffect(() => {
        if(searchWord){
            navigate(`/search/${searchWord}`)
            setSearchWord(null)
        }
    }, [searchWord,navigate]);

    const CustomOutlinedInput = styled(OutlinedInput)({
        '&.MuiOutlinedInput-input::placeholder': {
            color: theme === 'dark' ? 'peachpuff' : '#281515',
            opacity: 1,
        },
        '& .MuiOutlinedInput-input': {
            color: theme === 'dark' ? 'peachpuff':'#281515',

        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline':{
            borderColor: theme === 'dark' ? 'peachpuff':'#281515',
            borderRadius:5,
        }
    });

    const myClass=`${css.myButton} ${css[theme]}`

    return (
        <form onSubmit={handleSubmit(save)}>
            <CustomOutlinedInput placeholder="Search" {...register('searchText')} />
            <button className={myClass}>
                <SearchIcon className={css.SearchIcon}/>
            </button>
        </form>

    );
};

export {Search};