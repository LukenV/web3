import {useMatch, useOutletContext} from "react-router-dom";
import MovieCard from "components/MovieCard/MovieCard.jsx";

const MoviePage = () => {
    const {movies} = useOutletContext();
    const match = useMatch("/movies/:movieId");
    const movieId = match?.params.movieId;
    if (!movieId) return <p>Movie not found</p>;

    const movie = movies.find((movie) => movie.id === Number(movieId));

    if (!movie) return <p>Movie not found</p>;

    return (
      <>
        <MovieCard movie={movie}/>
      </>
    );
}

export default MoviePage;