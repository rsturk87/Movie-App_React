import React, {useContext} from 'react';
import './Movie.css';
import UserContext from '../../context/userContext.js';

function Movie() {
    
    return (
    <div className="movie-details">
        {
            <MovieHeader />
        }
    </div>
  );
}

const MovieHeader = () => {
    
    return (
        <div>
            <img src={"https://image.tmdb.org/t/p/w200"} />
            <span>title</span>
        </div>
    )
}

export default Movie;