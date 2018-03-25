import React from 'react';
import WOW from 'wowjs';
import classes from './404 Page.css';
import NavBar from '../../components/UI/NavBar/NavBar';
import backgroundImage from '../../assets/images/background.jpg';
import ParticlesVector from '../../components/UI/Particles Vector/ParticlesVector';

import { withRouter } from 'react-router-dom';

const errorPage = (props) => {

    new WOW.WOW().init();

    return (

        <div className={classes.background} style={{backgroundImage: 'url('+ backgroundImage +')'}}>
            <ParticlesVector style={{ position: 'absolute' }} />
            <div className={classes.overlay}>

                <NavBar />
                <h1 className={classes.errorH1 + ' ' + 'wow wobble'}>404 Error!</h1>
                <div className = {classes.line} style = {{color: 'white'}}> </div>

                <p className = {classes.errorPara} >Oooooops! Looks like an error was encountered at this location.
                 Maybe try one of the links below,</p>
                 
                <div className={classes.CardsDiv + ' ' + 'wow fadeInUp'}>

                    <div className={classes.cardcontainer} onClick={() => resolveToPath(props, '/')}>
                        <div className={classes.card}>
                            <div className={classes.front}>Home</div>
                        </div>
                    </div>

                    <div className={classes.cardcontainer} onClick = {() => resolveToPath(props, '/shows')}>
                        <div className={classes.card}>
                            <div className={classes.front}>Shows</div>
                        </div>
                    </div>

                    <div className={classes.cardcontainer} onClick = {() => resolveToPath(props, '/movies')}>
                        <div className={classes.card}>
                            <div className={classes.front}>Movies</div>
                        </div>
                    </div>

                    <div className={classes.cardcontainer} onClick={() => resolveToPath(props, '/games')}>
                        <div className={classes.card}>
                            <div className={classes.front}>Games</div>
                        </div>
                    </div>

                    <div className={classes.cardcontainer} onClick={() => resolveToPath(props, '/about')}>
                        <div className={classes.card}>
                            <div className={classes.front}>About</div>
                        </div>
                    </div>

               </div>

            </div>
        </div>

    );
}

let resolveToPath = (props, path) => {
    
    props.history.push(path);
}

export default withRouter(errorPage);



