import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Show from './Show/Show';
import classes from '../Shows/Shows.css';
import LoadSpinner from '../../../components/UI/SpinnersAndLoaders/assets/TransparentSpinner.gif';


class Shows extends Component {

    state = {

        loadingAnimation: true
    }

    componentDidMount() {

        setTimeout(() => {
            
            this.setState({loadingAnimation: false});
        }, 1000);
  }

    movieClickHandler = (moviesId) => {

        this.props.history.push('/details/' + moviesId);
    }

    render () {
        
            let checkedElement = {

                image: null
            }

            return this.props.data.map((element, index) => {

                
                if (element.Response === 'False' || this.state.loadingAnimation) {

                    checkedElement.image = LoadSpinner;
                } else {
                    
                    console.log('[Shows] :: Render Complete');
                    checkedElement.image = element.Poster;
                }
                
                return <div 
                        key = {element.imdbID + 'key'}
                        className = {classes.MoviesDiv} >
    
                <Show  className = {classes.MovieElement}
                        name = {element.Title}
                        year = {element.Year}
                        runtime = {element.Runtime}
                        ratings = {element.imdbRating}
                        image = {checkedElement.image}
                        click = {() => this.movieClickHandler(element.imdbID)} />                
                 </div> 
            });          
        }
};

export default withRouter(Shows);