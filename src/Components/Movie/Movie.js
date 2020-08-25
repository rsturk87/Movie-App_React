import React from 'react';
import './MovieThumb.css';
import {Link} from 'react-router-dom';

function Movie({title, picture, key}) {
    
    return (
    <div className="movie-thumb">
        {
            <MovieHeader title={title} picture={picture} key={key} />
        }
    </div>
  );
}

const MovieHeader = ({title, picture, key}) => {
    
    return (
        <div>
            <Link to={"/Movie"+"/"+key}>
            <img src={"https://image.tmdb.org/t/p/w200"+picture} />
            <span>{title}</span>
            </Link>
        </div>
    )
}

export default Movie;