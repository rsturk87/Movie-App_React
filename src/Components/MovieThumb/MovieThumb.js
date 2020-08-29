import React from 'react';
import './MovieThumb.css';
import {Link} from 'react-router-dom';

function MovieThumb({picture, key, id}) {
    
    return (
    <div className="movie-thumb">
        {
            <MovieHeader picture={picture} key={key} id={id} />
        }
    </div>
  );
}

const MovieHeader = ({picture, key, id}) => {
    
    return (
        <div>
            <Link to={"/Movie/"+id}>
            <img className="thumb-image" src={"https://image.tmdb.org/t/p/w300"+picture} alt="movie poster" />
            </Link>
        </div>
    )
}

export default MovieThumb;