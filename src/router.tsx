import {createBrowserRouter, Navigate} from "react-router-dom";

import {MoviesPage, MovieInfoPage, GenresPage, SearchPage, ErrorPage, SavedMoviesPage,LoginPage} from "./pages";
import {apiService} from "./services";
import {urls} from "./constants";
import {MainLayout} from "./layouts";
import {AuthChecker} from "./components";


const router = createBrowserRouter([
    {
        path:'',element:<MainLayout/>,errorElement:<ErrorPage/>,children:[
            {
                index:true,element:<Navigate to={'login'}/>
            },
            {
                path:'login',element:<LoginPage/>
            },
            {
                path:'movies',element:(
                    <AuthChecker>
                        <MoviesPage/>
                    </AuthChecker>
                )
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