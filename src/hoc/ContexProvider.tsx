import {createContext, FC, PropsWithChildren, useState} from 'react';

interface IProps extends PropsWithChildren{
}
interface IThemeContext {
    theme: string;
    toggleTheme: () => void;
    toggleTrigger: () => void;
    triggerFavorite: boolean
}

const MyContext = createContext<IThemeContext>({
    theme: 'light',
    toggleTheme: () => {},
    toggleTrigger:()=>{},
    triggerFavorite:null
});

const ContextProvider: FC<IProps> = ({children}) => {

    const [theme, setTheme] = useState<string>('light');
    const [triggerFavorite, setTriggerFavorite] = useState<boolean>(null);
    const toggleTheme = () => {
        setTheme((prevTheme:string) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    const toggleTrigger = () =>{
        setTriggerFavorite(prev=>!prev)
    }
    return (
        <MyContext.Provider value={{ theme, toggleTheme ,toggleTrigger, triggerFavorite}}>
            {children}
        </MyContext.Provider>
    );
};

export {ContextProvider,MyContext};