import React from 'react';
import './MovieThumb.css';
import {Link} from 'react-router-dom';

function MovieThumb({title, picture, key, id}) {
    
    return (
    <div className="movie-thumb">
        {
            <MovieHeader title={title} picture={picture} key={key} id={id} />
        }
    </div>
  );
}

const MovieHeader = ({title, picture, key, id}) => {
    
    return (
        <div>
            <Link to={"/Movie/"+id}>
            <img className="thumb-image" src={"https://image.tmdb.org/t/p/w300"+picture} />
            <h2 className="thumb-title">{title}</h2>
            </Link>
        </div>
    )
}

export default MovieThumb;