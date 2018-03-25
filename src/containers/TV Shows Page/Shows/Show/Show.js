import React from 'react';
import classes from './Show.css';
import { Badge } from 'react-bootstrap';

import CustomButton from '../../../../components/UI/CustomButton/CustomButton';

let ratingsBadgeColor = null;

const show = (props) => {
    

    let styleFront = {

        backgroundImage: 'url('+ props.image +')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    let styleBack = {

        backgroundImage: 'url(' + props.image + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        'WebkitFilter': 'blur(8px)'

    }


    let badgeStyles = {

        backgroundColor: resolveRatingsBadgeColor(props.ratings),
        padding: '4px 10px 4px 10px',
        marginLeft: '55px',
        marginBottom: '10px'
    }

    let customButtonStyleOverrides = {

        border: 'solid ' + resolveRatingsBadgeColor(props.ratings) + ' 1px',

        width: '120px',
        marginTop: '40px',
        paddingLeft: '20px',
        paddingRight: '20px',
        fontSize: '11px',
        padding: '8px 16px 8px 16px'
        
    }


    return (
        
        <div className="classes.outerDIV" >

            <div className={classes.flip3D}>

                <div className={classes.front} style={styleFront}>
                </div>

                
                    <div className={classes.back} >
                            <div className = {classes.ParaWrapper} >
                            
                           <p className = {classes.runtimePara}>Runtime : {props.runtime}</p>
                           <p className = {classes.yearPara}>Year : {props.year}</p> 
                           <p className = {classes.ratingsPara}> Ratings : 
                            </p>
                                  <Badge 
                                        style = {badgeStyles}> 
                                        {props.ratings} 
                                        </Badge>
                        <CustomButton 
                                style = {customButtonStyleOverrides}
                                click = {props.click}
                                > view details </CustomButton>
                        </div>
                    <img className = {classes.img} src = {props.image} alt='null' style = {styleBack} />       
                </div>
            </div>
        </div>
      
    );
};

let resolveRatingsBadgeColor = (ratings) => {
    
    if (ratings >= 8.0) {

        ratingsBadgeColor = '#00C853';
    } else if (ratings >= 7.0 && ratings < 8.0) {

        ratingsBadgeColor = '#00E676';
    } else if (ratings >= 6.0 && ratings < 7.0) {

        ratingsBadgeColor = '#FFEB3B';
    } else {

        ratingsBadgeColor = '#D32F2F';
    }

    return ratingsBadgeColor;
}

export default show;