import React, {useEffect, useState} from 'react';
import './TopRated.css';
import MovieThumb from '../MovieThumb/MovieThumb';

function TopRated() {
    const [movies, setMovies] = useState([]);
  
    const getMovies = () => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=5e1d96520aabad474f481cad9ac5839e&language=en-US&page=1')
        .then(
            res => res.json()
        )
        .then(
            data => {
            const result = data.results
            setMovies(result);
            sessionStorage.setItem('movies', JSON.stringify(result))
            }
        )
    }

    useEffect(
        () => getMovies(), []
    )
  
    return (
        <div className="top-rated">
            {
                movies.map(
                    movie => 
                    <MovieThumb title={movie.title} picture={movie.poster_path} key={movie.id} id={movie.id} />
                )
            }
        </div>
    );
}

export default TopRated;