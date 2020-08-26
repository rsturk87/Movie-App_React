import React from 'react';
import './HomeHeader.css';
import {Link} from 'react-router-dom';

function HomeHeader() {
    
    return (
        <div className="home-header">
            {
                <>
                <Link to='/TopRated'>
                    <h3 className="home-link">TopRated</h3>
                </Link>
                <Link to='/Upcoming'>
                    <h3 className="home-link">Upcoming</h3>
                </Link>
                <Link to='/Popular'>
                    <h3 className="home-link">Popular</h3>
                </Link>
                </>
            }
        </div>
    );
}

export default HomeHeader;