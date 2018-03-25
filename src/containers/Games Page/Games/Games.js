import React, { Component } from 'react';

import Game from './Game/Game';
import classes from './Games.css';
import LoadSpinner from '../../../components/UI/SpinnersAndLoaders/assets/TransparentSpinner.gif';

class Games extends Component {
    

    state = {

        loadingAnimation: true
    }

    componentDidMount() {


        setTimeout(() => {
            
            this.setState({loadingAnimation: false});
        }, 4000);
  }


    parsedReleaseDate = (date) => {

    let monthsNameArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    
   	let result = date.split(' ');
        result = result[0].split('-');

    let year = result[0];
    let month = result[1];
    // let day = result[2];
    
    if(month[0] === 0) {

    return monthsNameArray[month[1] - 1 ] + ' ' + year;
    } else {

    return monthsNameArray[month - 1 ] + ' ' + year;
    }
}

    resolveRatings = (ratings) => {

        if(ratings === null) {

            return 'ESRB: M';
        }

        if(ratings.length > 1) {

            return ratings[1].name;
        }
        return ratings[0].name;
    }

    render () {

        let checkedElement = {

            image: null
        }


        return this.props.data.map((element, index) => {

            
            if (this.state.loadingAnimation) {

                checkedElement.image = LoadSpinner;
            } else {
                
                console.log('[Games] :: Render Complete');                
                checkedElement.image = element.image.medium_url;
            }


            return <div 
                    key = {element.id + 'key'}
                    className = {classes.GamesDiv} >

            <Game  className = {classes.GamesElement}
                   title = {element.name}
                   image = {checkedElement.image}
                   releaseDate = {this.parsedReleaseDate(element.original_release_date)}
                   ratings = {this.resolveRatings(element.original_game_rating)}
                   genre = {element.genres[0].name}
                    />                   
             </div>
        });
    }
}

export default Games;