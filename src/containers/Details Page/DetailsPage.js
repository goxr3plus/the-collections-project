import React from 'react';
import axios from 'axios';
import classes from './DetailsPage.css';
import DetailsCard from './Details Card/Details Card';
import CometSpinner from '../../components/UI/SpinnersAndLoaders/CometSpinner/CometSpinner';

class DetailsPage extends React.Component {


    state = {

        movieData: [],
        isLoading: true
    }

    componentDidMount = () => {

        const api_key = '309b47ef';

        axios.get('https://www.omdbapi.com/?i=' + this.props.match.params.id + '&plot=full&apikey=' + api_key)

             .then(response => {

                setTimeout(() => {
                    

                    this.setState({ movieData: response.data, isLoading: false });
                }, 1000);
            });
    }

    render() {

        if (this.state.isLoading) {


            return <div style = {{background: 'white',backgroundSize: 'cover'}}> 
            
                <CometSpinner />

            </div>
            
        } else {
            

            return (

                <div className = {classes.outerDiv}>

                    <div className={classes.backgroundImage} 
                         style={{ backgroundImage: 'url(' + this.state.movieData.Poster+')'}}>
                    </div> 
                        
                        <div className = {classes.ContentDiv} >

                                            <DetailsCard
                                            name = {this.state.movieData.Title}
                                            image = {this.state.movieData.Poster}
                                            year = {this.state.movieData.Year} 
                                            runtime = {this.state.movieData.Runtime}
                                            genre = {this.state.movieData.Genre}
                                            desc = {this.state.movieData.Plot}
                                            />
                                    
                        </div>
                </div>
            );
        }
    }
}

export default DetailsPage;