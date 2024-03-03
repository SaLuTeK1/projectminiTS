import {createContext, FC, PropsWithChildren, useState} from 'react';

interface IProps extends PropsWithChildren{
}
interface IThemeContext {
    theme: string;
    toggleTheme: () => void;
    toggleTrigger: () => void;
    triggerFavorite: boolean;
    promptUserName:string
}

const MyContext = createContext<IThemeContext>({
    theme: 'light',
    toggleTheme: () => {},
    toggleTrigger:()=>{},
    triggerFavorite:null,
    promptUserName:''
});

const ContextProvider: FC<IProps> = ({children}) => {

    const storedTheme = localStorage.getItem('theme');

    const promptUserName= prompt("Enter your username")

    const [theme, setTheme] = useState<string>(storedTheme ||'light');
    const [triggerFavorite, setTriggerFavorite] = useState<boolean>(null);
    const toggleTheme = ():void => {
        setTheme((prevTheme:string) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    localStorage.setItem('theme',theme)



    const toggleTrigger = () =>{
        setTriggerFavorite(prev=>!prev)
    }
    return (
        <MyContext.Provider value={{ theme, toggleTheme ,toggleTrigger, triggerFavorite, promptUserName}}>
            {children}
        </MyContext.Provider>
    );
};

export {ContextProvider,MyContext};