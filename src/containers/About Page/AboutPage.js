import React from 'react';
import WOW from 'wowjs';
import classes from './AboutPage.css';
import NavBar from '../../components/UI/NavBar/NavBar';
import backgroundImage from '../../assets/images/background.jpg';
import ParticlesVector from '../../components/UI/Particles Vector/ParticlesVector';

const aboutPage = (props) => {

    new WOW.WOW().init();

    return (

        <div className={classes.background} style={{backgroundImage: 'url('+ backgroundImage +')'}}>
            <ParticlesVector style={{ position: 'absolute' }} />
            <div className={classes.overlay}>
                <NavBar />
                <div className='wow slideInLeft' style={{marginTop: '150px'}}>
                    <h1 className={classes.aboutH1}>About</h1>
                    <div className={classes.line} style={{ color: 'white' }}> </div>

                    <p className={classes.aboutPara} >Over the years I have watched tons of great shows, movies
                    and played many great games, so I decided <br /> to visualize all that data through this
                    Web App I made with React JS :)</p>
                </div>
                <div className='wow slideInRight' style={{ marginTop: '40px' }}>    
                    <p className={classes.madebyPara}>Made By : </p>
                    <p className={classes.namePara}>Karan Pratap Singh</p>
                </div>

            </div>
        </div>

    );
}

export default aboutPage;

