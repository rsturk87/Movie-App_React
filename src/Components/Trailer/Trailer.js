import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ReactPlayer from "react-player"
import './Trailer.css';

function Trailer({id}) {
    const [trailer, setTrailer] = useState([]);
  
    const getTrailer = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=5e1d96520aabad474f481cad9ac5839e&language=en-US`)
        .then(
            res => res.json()
        )
        .then(
            data => setTrailer(data.results)
        )
    }

    useEffect(
        getTrailer, [id]
    )

    return (
    <div className="movie__trailer-container">
        {
            trailer.length > 0 &&
            <MovieTrailer url={trailer[0].key} />
        }
    </div>
  );
}

const MovieTrailer = ({url}) => {
    const youtuberUrl = "https://www.youtube.com/watch?v="+url;

    return (
        <div className="movie__trailer">
            {
                <ReactPlayer 
                    url={youtuberUrl} width='100%' height='100%'
                />
            }
        </div>
    )
}

export default Trailer;