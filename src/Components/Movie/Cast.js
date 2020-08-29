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
            data => setCast(data.cast)
        )
    }

    useEffect(
        getCast, []
    )

    return (
        <>
        <div className="cast__title">
            Starring
        </div>
        <div className="movie__cast">
            {
                cast &&
                <>
                    {
                    cast.slice(0, 8).map( actor =>
                    <CastInfo name={actor.name}
                    character={actor.character}
                    picture={actor.profile_path} />
                    )
                    }
                </>
            }
        </div>
        </>
    );
}

const CastInfo = ({name, character, picture}) => {
    
    return (
        <div className="cast__info">
            {
                <>
                <img className="cast__picture" src={"https://image.tmdb.org/t/p/w300"+picture} alt="actor profile" />
                <h4 className="cast__name">{name}</h4>
                <h5 className="cast__character">{character}</h5>
                </>
            }
        </div>
    )
}

export default Cast;