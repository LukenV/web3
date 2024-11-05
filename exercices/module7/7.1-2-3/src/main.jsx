import { createRoot } from 'react-dom/client'
import App from './components/App/App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "components/Pages/HomePage.jsx";
import CinemaPage from "components/Pages/CinemaPage.jsx";
import MovieListPage from "components/Pages/MovieListPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <HomePage/>
            },
            {
                path: "/cinema",
                element: <CinemaPage/>
            },
            {
                path: "movieslist",
                element: <MovieListPage/>
            }
        ]
    }
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)