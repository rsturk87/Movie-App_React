import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './Cast.css';

function Cast() {
    const {id} = useParams();
    const [cast, setCast] = useState();
  
    const getCast = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=5e1d96520aabad474f481cad9ac5839e`)
        .then(
            res => res.json()
        )
        .then(
            data => setCast(data)
        )
    }

    useEffect(
        getCast, []
    )

    return (
        <div className="movie__cast">
            {
                cast &&
                cast.cast.map( actor =>
                <CastInfo name={actor.name}
                character={actor.character}
                picture={actor.picture} />
                )
            }
        </div>
    );
}

const CastInfo = (picture, name, character) => {
    
    return (
        <div className="cast__info">
            {
                <>
                <img src={"https://image.tmdb.org/t/p/w300"+picture} />
                <h1>{name}</h1>
                <h3>{character}</h3>
                </>
            }
        </div>
    )
}

export default Cast;