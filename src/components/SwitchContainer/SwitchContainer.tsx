import {FC} from 'react';
import {alpha, Switch} from "@mui/material";
import {useAppContext} from "../../hooks";

interface IProps {

}

const SwitchContainer: FC<IProps> = () => {
    const {theme,toggleTheme} = useAppContext();
    return (
        <div>
            <Switch onClick={toggleTheme} sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                    color: theme === 'dark' ? '#9ccef1' : '#032541',
                    '&:hover': {
                        backgroundColor: alpha(theme === 'dark' ? '#6e7f81' : '#7bb4b6', 0.5),
                    },
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: theme === 'dark' ? '#9ccef1' : '#032541',
                },
                '& .MuiSwitch-track': {
                    backgroundColor: theme === 'dark' ? '#e0eaf1' : '#032541',
                },
                '& .MuiSwitch-switchBase': {
                    color: theme === 'dark' ? '#9ccef1' : '#032541',
                },
            }}/>
        </div>
    );
};

export {SwitchContainer};