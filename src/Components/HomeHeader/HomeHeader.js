import React from 'react';
import './HomeHeader.css';
import {Link} from 'react-router-dom';

function HomeHeader() {
    
    return (
        <div className="home-header">
            {
                <>
                <Link to='/TopRated'>
                <div className="logo-container">
                    <h3 className="logo-title">Movie<span className="logo-span">_DB</span></h3>
                </div>
                </Link>

                <div className="menu">
                    <Link to='/TopRated'>
                        <h3 className="home-link">Top_Rated</h3>
                    </Link>
                    <Link to='/Upcoming'>
                        <h3 className="home-link">Upcoming</h3>
                    </Link>
                    <Link to='/Popular'>
                        <h3 className="home-link">Popular</h3>
                    </Link>
                </div>
                </>
            }
        </div>
    );
}

export default HomeHeader;