import React from 'react';
import {Switch, Route} from 'react-router-dom';
import TopRated from './Components/TopRated/TopRated'
import Upcoming from './Components/Upcoming/Upcoming'
import Popular from './Components/Popular/Popular'
import Movie from './Components/Movie/Movie'
import HomeHeader from './Components/HomeHeader/HomeHeader';
import './App.css';

function App() {
  return (
    <div className="App">
        <HomeHeader />
        <div className="container">
            <Switch>
            <Route path='/Movie/:id' component={Movie} />
            <Route path='/Upcoming/' component={Upcoming} />
            <Route path='/Popular/' component={Popular} />
            <Route path='/TopRated/' component={TopRated} />
            <Route exact path='/'>
                <TopRated />
            </Route>
            </Switch>
        </div>
    </div>
  );
}

export default App;