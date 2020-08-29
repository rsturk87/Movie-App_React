import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import MovieThumb from '../MovieThumb/MovieThumb';
import './Similar.css';

function Similar({id}) {
    const [similarMovies, setSimilar] = useState([]);
  
    const getSimilar = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=5e1d96520aabad474f481cad9ac5839e&language=en-US&page=1`)
        .then(
            res => res.json()
        )
        .then(
            data => {
            const result = data.results
            setSimilar(result);
            sessionStorage.setItem('similarMovies', JSON.stringify(result))
            }
        )
    }

    useEffect(
        () => {
            getSimilar()
            }, [id]
        )
  
    return (
        <>
        <div className="similar__title">
            You might like
        </div>
        <div className="similar__movies">
            {
                similarMovies.slice(0, 8).map(
                    movie => 
                    <MovieThumb picture={movie.poster_path} key={movie.id} id={movie.id} />
                )
            }
        </div>
        </>
    );
}

export default Similar;