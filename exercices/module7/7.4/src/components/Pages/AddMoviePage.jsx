import AddMovieForm from "components/AddMovieForm/AddMovieForm";
import {useNavigate, useOutletContext} from "react-router-dom";

const AddMoviePage = () => {
    const {movies, setMovies} = useOutletContext();
    const navigate = useNavigate();

    const onMovieAdded = (newMovie) => {
        console.log("Movie to add:", newMovie);
        setMovies([...movies, {...newMovie, id: getNextMovieId()}]);
        navigate("/movieslist");
    };

    const getNextMovieId = () => {
        return movies[movies.length-1].id + 1;
    }

    return (
        <div>
            <AddMovieForm onMovieAdded={onMovieAdded} />
        </div>
    );
};

export default AddMoviePage;
