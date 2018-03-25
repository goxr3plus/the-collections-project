import React from 'react';
import CometSpinnerSVG from '../assets/CometSpinner.svg';
import classes from './CometSpinner.css';

const cometSpinner = (props) => {

    return (

        <div>
            <img className = {classes.CometSpinner}
                src={CometSpinnerSVG}
                alt='#'
                style={props.style} />

            <p className={classes.adjustPara}>.</p>
        </div>
    );
}

export default cometSpinner;