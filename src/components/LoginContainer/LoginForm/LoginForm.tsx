import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../../hooks";
import css from './LoginForm.module.css'

const LoginForm = () => {

    const {reset, handleSubmit, register} = useForm();

    const navigate = useNavigate();
    const {toggleTrigger,theme} = useAppContext();
    const save:SubmitHandler<FieldValues> = async (data):Promise<void> =>{
        console.log(data.username)
        reset();
        navigate('/movies')
        localStorage.setItem('username',data.username)
        toggleTrigger();
    }

    return (
        <div className={'wrap background'}>
            <h2>Are you new one? Let`s login!</h2>
            <form onSubmit={handleSubmit(save)}>
                <input className={`button-${theme} ${css.myInput}`} type='text' placeholder='username' {...register('username')}/>
                <button className={`button-${theme} my-button`}>Go!</button>
            </form>
            <h4>On this site you can:</h4>
            <ul>
                <li>Search by genres (just click on one or many genres and press <i>Advanced search</i>!</li>
                <li>Clear chosen genres <i>Clear genres</i></li>
                <li>Search film by title</li>
                <li>Find advanced info about film</li>
                <li>Switch themes</li>
                <li>Add films to you <i>Favorites</i> and delete them!</li>
            </ul>
        </div>

    );
};

export {LoginForm};