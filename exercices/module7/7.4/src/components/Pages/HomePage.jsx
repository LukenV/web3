import {Link, useOutletContext} from "react-router-dom";

const HomePage = () => {
    const {movies} = useOutletContext();
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my favorite movies website!</p>
        <h2>Favorite movies</h2>
        <ul>
            {movies.map(m => {
                return (
                    <li key={m.id}>
                        <Link to={`/movies/${m.id}`}>{m.title}</Link>
                    </li>
                );
            })}
        </ul>
    </div>
  );
};

export default HomePage;
