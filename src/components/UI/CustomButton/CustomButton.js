import React from 'react';
import classes from './CustomButton.css';

const custombutton = (props) => {

    return (

        <div> 
            <button className = {classes.btn}
                    onClick = {props.click}
                    style = {props.style} > 
                {props.children}
            </button>
        </div>
    );
}

export default custombutton;