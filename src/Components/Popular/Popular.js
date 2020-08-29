import React, {useEffect, useState} from 'react';
import './Popular.css';
import MovieThumb from '../MovieThumb/MovieThumb';

function Popular() {
    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);
  
    const getPopular = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=5e1d96520aabad474f481cad9ac5839e&language=en-US&page=${page}`)
        .then(
            res => res.json()
        )
        .then(
            data => {
            const result = data.results
            setPopular(result);
            sessionStorage.setItem('popular', JSON.stringify(result))
            }
        )
    }

    useEffect(
        () => getPopular(), [page]
    )
  
    return (
        <>
            <div className="popular">
                {
                    popular.map(
                        movie => 
                        <MovieThumb title={movie.title} picture={movie.poster_path} key={movie.id} id={movie.id} />
                        )
                }
            </div>
            {
            <div className="button">
                <button className="next-page-button" onClick={() => setPage(page+1)}>More Movies</button>
            </div>
            }
        </>
  );
}

export default Popular;