import { useState } from "react";
import InputField from "./InputField";

function MovieForm({addMovie}) {
    const [movieTitle, setMovieTitle] = useState("");
    const [movieYear, setMovieYear] = useState("");

    const [titleError, setTitleError] = useState("");
    const [yearError, setYearError] = useState("");

    const resetForm = () => {
        setMovieTitle("");
        setMovieYear("");
    };

    const resetErrors = () => {
        setMovieTitle("");
        setMovieYear("");
    };

    const validateForm = () => {
        resetErrors();

        let isValidated = true;

        if ( !movieTitle ) {
            setTitleError("영화제목을 넣어주세요.");
            isValidated = false;
        }

        if ( !movieYear ) {
            setYearError("개봉년도를 넣어주세요.");
            isValidated = false;
        }

        return isValidated;
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if ( validateForm() ) {
            addMovie({
                id: Date.now(),
                title: movieTitle,
                year: movieYear
            });

            resetErrors();
            resetForm();
        }
    };

    return(
        <form onSubmit={onSubmit}>
            <InputField
                type="text"
                value={movieTitle}
                placeholder="영화제목"
                onChange={e => setMovieTitle(e.target.value)}
                errorMessage={titleError}
            />
            <InputField
                type="number"
                value={movieYear}
                placeholder="개봉년도"
                onChange={e => setMovieYear(e.target.value)}
                errorMessage={yearError}
            />
            <button type="submit">영화추가</button>
        </form>
    )
}

export default MovieForm;