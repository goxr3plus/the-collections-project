import React from 'react';
import DnaLoaderSVG from '../assets/DnaLoader.svg';

const dnaLoader = (props) => {


    return  ( 
            <div>
                <img 
                    src = {DnaLoaderSVG} 
                    alt = '#'
                    style = {props.style} />
            </div>
    );
}

export default dnaLoader;