import React from 'react';

import classes from './Details Card.css';

import LoadingSpinner from '../../../components/UI/SpinnersAndLoaders/assets/orbit.gif';

const detailscard = (props) => {


    return (



        <div className={classes.card}>
    <section className={classes.movie_image}>
        <img style ={{borderRadius: '20px'}} className={classes.movie_poster} src= {props.image} alt = {LoadingSpinner} />
    </section>

    <section className={classes.center}>
        <div className={classes.about_movie}>

                    <h3>{props.name}</h3>

            <div className={classes.movie_info}>
                <p>{props.year}</p>
                <p>{props.runtime}</p>
                <p>{props.genre}</p>
            </div>

            <div className={classes.movie_desc}>
                <p>{props.desc}</p>
            </div>

        </div>
    </section>

</div>

    );
}

export default detailscard;