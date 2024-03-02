
import ReactDOM from 'react-dom/client';
import './index.css';
import {ContextProvider} from "./hoc";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ContextProvider>
        <RouterProvider router={router}/>
    </ContextProvider>
);



