import React, { Component } from 'react';
import WOW from 'wowjs';
import classes from './MainPage.css';
import NavBar from '../../components/UI/NavBar/NavBar';
import ParticlesVector from '../../components/UI/Particles Vector/ParticlesVector';


class MainPage extends Component {
    
    constructor(props) {

        super(props);

        new WOW.WOW().init();
    }

    state = {

        backgroundImage: require('../../assets/images/background.jpg'),
    }

    render () {

        return (

            <div> 

                <div className={classes.background} style={{ backgroundImage: 'url(' + this.state.backgroundImage + ')' }}>

                    <div className={classes.overlay}>

                        <NavBar animations='wow fadeInDown'/>

                            <ul className={classes.cbslideshow}>
                                <li><span>Image 01</span><div><h3>My Collections</h3></div></li>
                                <li><span>Image 02</span><div><h3>My Collections</h3></div></li>
                                <li><span>Image 03</span><div><h3>My Collections</h3></div></li>
                                <li><span>Image 04</span><div><h3>My Collections</h3></div></li>
                                <li><span>Image 05</span><div><h3>My Collections</h3></div></li>
                                <li><span>Image 06</span><div><h3>My Collections</h3></div></li>
                                <li><span>Image 07</span><div><h3>My Collections</h3></div></li>
                                <li><span>Image 08</span><div><h3>My Collections</h3></div></li>
                                <li><span>Image 09</span><div><h3>My Collections</h3></div></li>
                                <li><span>Image 10</span><div><h3>My Collections</h3></div></li>
                                <li><span>Image 11</span><div><h3>My Collections</h3></div></li>
                                <li><span>Image 12</span><div><h3>My Collections</h3></div></li>
                                <li><span>Image 13</span><div><h3>My Collections</h3></div></li>
                                <li><span>Image 14</span><div><h3>My Collections</h3></div></li>
                                <li><span>Image 15</span><div><h3>My Collections</h3></div></li>
                                <li><span>Image 16</span><div><h3>My Collections</h3></div></li>    
                            </ul>

                        <ParticlesVector addExtra={0} style={{ position: 'absolute' }} />

                    </div>

                </div>

            </div>
        );
    }
}

export default MainPage;