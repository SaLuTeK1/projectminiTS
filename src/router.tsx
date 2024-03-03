import {createBrowserRouter, Navigate} from "react-router-dom";

import {MoviesPage, MovieInfoPage, GenresPage, SearchPage, ErrorPage, SavedMoviesPage} from "./pages";
import {apiService} from "./services";
import {urls} from "./constants";
import {MainLayout} from "./layouts";


const router = createBrowserRouter([
    {
        path:'',element:<MainLayout/>,errorElement:<ErrorPage/>,children:[
            {
                index:true,element:<Navigate to={'movies'}/>
            },
            {
                path:'movies',element:<MoviesPage/>, loader:()=>apiService.get(urls.movie.base)
            },
            {
                path:'details/:id' ,element:<MovieInfoPage/>, loader:({params:{id}})=>apiService.get(urls.movie.byId(+id))
            },
            {
                path:'genres',element:<GenresPage/> ,children:[
                    {
                        path:':genreId',element:<GenresPage/>
                    }
                ]
            },
            {
                path:'search/:word',element:<SearchPage/>
            },
            {
                path:'favorites',element:<SavedMoviesPage/>
            }
        ]
    }
]);

export {router}