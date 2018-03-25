import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './containers/Main Page/MainPage';
import DetailsPage from './containers/Details Page/DetailsPage';
import GamesPage from './containers/Games Page/GamesPage';
import AboutPage from './containers/About Page/AboutPage';
import asyncComponent from './components/Async Component/AsyncComponent';
import TVShowsPage from './containers/TV Shows Page/TVShowsPage';

import ErrorPage from './containers/404 Page/404Page';

const AsyncMoviesPage = asyncComponent(() => {

  return import('./containers/Movies Page/MoviesPage').then(module => module.default);
});


class App extends Component {


  render() {
    
    return (
       <div className="App">
     
         <BrowserRouter>

            <div> 
             
              <Switch>

              <Route exact path='/' component={MainPage} />

              <Route exact path='/shows' component={TVShowsPage} />

              <Route exact path='/movies' component={AsyncMoviesPage}/>

              <Route exact path='/details/:id' component={DetailsPage} />

              <Route exact path='/games' component={GamesPage} />

              <Route exact path='/about' component={AboutPage} />

              <Route render={() => <ErrorPage />} />

              </Switch>
      
        </div>
        
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
