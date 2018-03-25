import React, { Component } from 'react';
import classes from './GamesPage.css';
import axiosFirebaseInstance from '../../axios-instances/axios-firebase-instance';
import mithril from 'mithril';
import backgroundImage from '../../assets/images/background.jpg';
import ParticlesVector from '../../components/UI/Particles Vector/ParticlesVector';
import NavBar from '../../components/UI/NavBar/NavBar';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import Games from './Games/Games';
import CometSpinner from '../../components/UI/SpinnersAndLoaders/CometSpinner/CometSpinner';

class GamesPage extends Component {

    state = {

        giantBombData: [],
        searchValue: [],
        isLoading: false
    }

    componentDidMount = () => {

        let giantBombBaseUrl = 'https://www.giantbomb.com/api/game';
        let GiantBomb_API_KEY = 'ee5784914aec1d83b17509e834ea6f48cd5a23b5';
        let query = 'name,genres,image,original_release_date,id,original_game_rating';

        axiosFirebaseInstance.get('/games.json')

            .then(firebaseResponse => {

                let keys = Object.keys(firebaseResponse.data);

                for (let i in keys) {

                    firebaseResponse.data[keys[i]].map((element,index) => {

                        return mithril.jsonp({

                            url: giantBombBaseUrl + '/3030-' + element.id + '/?api_key=' + GiantBomb_API_KEY + '&format=jsonp&field_list=' + query,
                            callbackKey: 'json_callback'

                        }).then(response => {

                            let tempArr = this.state.giantBombData.slice();
                            tempArr.push(response.results);
                            this.setState({ giantBombData: tempArr, isLoading: false });

                        }).catch(err => {

                            // If error while AJAX request to Giant Bomb api then push to 404 page.
                            // window.location.reload();
                            this.props.history.push('/404');
                        });
                    });
                }
            }).catch(error => {

                // If error while AJAX request to Giant Bomb api then push to 404 page.
                // window.location.reload();
                this.props.history.push('/404');
            });
    }


    searchChangedHandler = (event) => {

        this.setState({searchValue: event.target.value.trim().toLowerCase()});
    }
    

    render() {

        let GamesComponent = null;

        if(this.state.isLoading) {


            GamesComponent = <CometSpinner />
        } else {

                let filteredData = this.state.giantBombData.filter((element, index) => {

                if (element.name.toLowerCase().indexOf(this.state.searchValue) !== -1) {

                    return true;
                }

                return false;
            });

            GamesComponent = <Games data={filteredData}
                                    isLoading={this.state.isLoading}/>
        }


        return (

            <div className={classes.background} style={{backgroundImage: 'url('+ backgroundImage +')'}}>

                <ParticlesVector style={{ position: 'absolute' }} />

                <div className={classes.overlay}>
                <NavBar />

                <SearchBar changed = {(event) => this.searchChangedHandler(event)} />

                {GamesComponent}

                </div>
            </div>

        );
    }
}

export default GamesPage;