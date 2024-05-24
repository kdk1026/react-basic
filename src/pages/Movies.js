import { useState } from "react";
import MovieForm from "../components/MovieForm";
import Movie from "../components/Movie";

function Movies() {
    const [movies, setMovies] = useState([]);

    const removeMovie = (id) => {
        setMovies(movies.filter(
            movie => {
                return movie.id !== id;
            }
        ));
    };

    const renderMovies = movies.length ? movies.map(movie => {
        return (
            <Movie
                key={movie.id}
                movie={movie}
                removeMovie={removeMovie}
            />
        );
    }) : '추가된 영화가 업습니다.';

    const addMovie = (movie) => {
        setMovies([
            ...movies,
            movie
        ]);
    };

    return (
        <>
            <h1>Movie list</h1>
            <MovieForm addMovie={addMovie} />
            {renderMovies}
        </>
    )
}

export default Movies;