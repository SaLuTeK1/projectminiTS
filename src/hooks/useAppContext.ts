import {useContext} from "react";

import {MyContext} from "../hoc";

export const useAppContext = () => useContext(MyContext);