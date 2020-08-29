import React, {useEffect, useState} from 'react';
import './Upcoming.css';
import MovieThumb from '../MovieThumb/MovieThumb';

function Upcoming() {
    const [upcoming, setUpcoming] = useState([]);
    const [page, setPage] = useState(1);
  
    const getUpcoming = () => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=5e1d96520aabad474f481cad9ac5839e&language=en-US&page=${page}`)
        .then(
            res => res.json()
        )
        .then(
            data => {
            const result = data.results
            setUpcoming(result);
            sessionStorage.setItem('upcoming', JSON.stringify(result))
            }
        )
    }

    useEffect(
        () => getUpcoming(), [page]
    )
  
    return (
        <>
            <div className="upcoming">
                {
                    upcoming.map(
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

export default Upcoming;