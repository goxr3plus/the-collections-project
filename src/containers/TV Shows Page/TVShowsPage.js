import React, {Component} from 'react';
import classes from './TVShowsPage.css';
import { withRouter } from 'react-router-dom';

import axiosFirebaseInstance from '../../axios-instances/axios-firebase-instance';
import axiosMoviesInstance from '../../axios-instances/axios-movies-instance';

import backgroundImage from '../../assets/images/background.jpg';
import NavBar from '../../components/UI/NavBar/NavBar';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import Shows from './Shows/Shows';
import CometSpinner from '../../components/UI/SpinnersAndLoaders/CometSpinner/CometSpinner';

import ParticlesVector from '../../components/UI/Particles Vector/ParticlesVector';

class TVShowsPage extends Component {

    state = {

        omdbData: [],
        totalMovies: 0,
        searchValue: [],
        isLoading: true
    }


    componentDidMount() {

        const api_key = '309b47ef';

        axiosFirebaseInstance.get('/shows.json')

            .then(firebaseResponse => {

                let keys = Object.keys(firebaseResponse.data);

                for (let i in keys) {

                    firebaseResponse.data[keys[i]].map((element,index) => {

                        return axiosMoviesInstance.get('/?i=' + element.id + '&plot=full&apikey=' + api_key)

                            .then(response => {

                                let ajaxDataArray = this.state.omdbData.slice();

                                this.setState(prevState => {
                                    
                                   if(prevState.omdbData === ajaxDataArray) {

                                    return;
                                   }
                                
                                return {

                                     totalMovies: prevState.totalMovies + 1,
                                     omdbData: ajaxDataArray
                                }
                                
                                });

                                ajaxDataArray.push(response.data);
                                

                            }).then(response => {
                                
                                if (this.state.isLoading) {

                                        this.setState(prevState => {

                                            if (prevState.isLoading === true && this.state.totalMovies === firebaseResponse.data[keys[i]].length) {

                                                return {

                                                    isLoading: false
                                                }
                                            }
                                            
                                            return;
                                        });
                                }
                            }).catch(error => {
                                // window.location.reload();
                                // If error while AJAX request to OMDb api then push to 404 page.
                                this.props.history.push('/404');
                            });
                    });
                }

            }).catch(error => {
            //  window.location.reload();
            // If error while AJAX request to firebase then push to 404 page.
            this.props.history.push('/404');
        });
    }

    searchChangedHandler = (event) => {

        this.setState({searchValue: event.target.value.trim().toLowerCase()});
    }

    render() {
           
        let ShowsComponent = null;

        if (this.state.isLoading) {

            ShowsComponent = <CometSpinner style={{marginTop: '100px'}}/>
        } else {

            let filteredData = this.state.omdbData.filter((element, index) => {

                if (element.Title.toLowerCase().indexOf(this.state.searchValue) !== -1) {

                    return true;
                }

                return false;
            });

            ShowsComponent = <Shows data={filteredData}
                                      isLoading={this.state.isLoading}/>
        }

        return (

            <div className={classes.background} style={{backgroundImage: 'url('+ backgroundImage +')'}}>
            <ParticlesVector style={{ position: 'absolute' }} /> 
                <div className={classes.overlay}>
                    <NavBar/>
                    
                    <SearchBar changed={(event) => this.searchChangedHandler(event)}/>
                    {ShowsComponent} 
                </div>
            </div>
        );
    }
}

export default withRouter(TVShowsPage);