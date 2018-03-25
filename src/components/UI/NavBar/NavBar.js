import React, { Component } from 'react';
import WOW from 'wowjs';
import { withRouter } from 'react-router-dom';
import AddModal from '../../../containers/Add Modal/AddModal';

import { Button,Icon } from 'semantic-ui-react';


class Nav extends Component {

    pushToPath = (path) => {

        this.props.history.push(path);
    }


    componentDidMount = () => {
        
        new WOW.WOW().init();
        
    }

    render () {

        let navButtonStyles = {

            marginTop: '10px',
            marginRight: '10px',
            borderRadius: '20px',
            height: '40px'
        }

        let navButtonColor = 'violet';

        return (

            <header id="luxbar" className={'luxbar-fixed' + ' ' + this.props.animations} >
                <input type="checkbox" className="luxbar-checkbox" id="luxbar-checkbox" />
                <div className="luxbar-menu luxbar-menu-right luxbar-menu-dark" style = {{backgroundColor: 'rgba(0,0,0,0.75)'}}>
                    <ul className="luxbar-navigation">
                        <li className="luxbar-header">
                            <a href="/" className="luxbar-brand">
                                <img alt = '' src= 'https://loading.io/spinners/equalizer/index.equalizer-bars-loader.svg' style = {{width: '120px',height: '120px'}}/>
                            </a>
                            <label className="luxbar-hamburger luxbar-hamburger-doublespin" id="luxbar-hamburger" htmlFor="luxbar-checkbox">
                                <span></span>
                            </label>
                        </li>
                        
                       <AddModal />

                       <Button
                            style={navButtonStyles}
                            onClick={() => this.pushToPath('/')}
                            color={navButtonColor}
                            inverted>
                            <Icon name='home' /> Home
                       </Button>
                     
                        <Button
                            style={navButtonStyles}
                            onClick={() => this.pushToPath('/shows')}
                            color='yellow'
                            inverted>
                            <Icon name='television' /> Shows
                       </Button>

                       <Button
                            style={navButtonStyles}
                            onClick={() => this.pushToPath('/movies')}
                            color='red'
                            inverted>
                            <Icon name='modx' /> Movies
                       </Button>

                    <Button
                            style={navButtonStyles}
                            onClick={() => this.pushToPath('/games')}
                            color='blue'
                            inverted>
                            <Icon name='game' /> Games
                       </Button>

                       <Button
                            style={navButtonStyles}
                            onClick={() => this.pushToPath('/about')}
                            color='green'
                            inverted>
                            <Icon name='info circle' /> About
                       </Button>
                     
                    </ul>
                </div>
            </header>

        );
    }
}
export default withRouter(Nav);