import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Cast from './Cast';
import Trailer from '../Trailer/Trailer';
import './Movie.css';

function Movie() {
    const {id} = useParams();
    const [movie, setMovie] = useState();
  
    const getMovie = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5e1d96520aabad474f481cad9ac5839e&language=en-US`)
        .then(
            res => res.json()
        )
        .then(
            data => setMovie(data)
        )
    }

    useEffect(
        getMovie, []
    )

    return (
    <div className="movie__container">
        {
            movie &&
            <>
            <MovieHeader title={movie.title} backdrop={movie.backdrop_path} tagline={movie.tagline} />
            <MovieInfo genres={movie.genres.map(item => item.name)} overview={movie.overview} rating={movie.vote_average} release={movie.release_date} />
            {/* <Cast /> */}
            <Trailer />
            </>
        }
    </div>
  );
}

const MovieHeader = ({title, backdrop, tagline}) => {
    
    return (
        <div className="movie__header">
            <img className="movie__backdrop" src={"https://image.tmdb.org/t/p/original"+backdrop} />
            <h1 className="movie__title">{title}<br/><span className="movie__tagline">{tagline}</span></h1>
            {/* <h3 className="movie__tagline">{tagline}</h3> */}
        </div>
    )
}

const MovieInfo = ({genres, overview, rating, release}) => {
    
    return (
        <div className="movie__info">
            {
            genres.map(genre => <h3 className="movie__genre" key={genre}>{genre}</h3>)
            }
            <p className="movie__overview">{overview}</p>
            <h3 className="movie__rating">Users_Rating {rating}</h3>
            <h3 className="movie__release">Release_Date {release}</h3>
        </div>
    )
}

export default Movie;