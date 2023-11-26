import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Bookmark from "./pages/bookmark";
import TvSeries from "./pages/tv-series";
import Movies from "./pages/movie";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: "/movies",
        element: <Movies />,
        errorElement: <Error />,
    },
    {
        path: "/tv-series",
        element: <TvSeries />,
        errorElement: <Error />,
    },
    {
        path: "/bookmark",
        element: <Bookmark />,
        errorElement: <Error />,
    },
    
]);