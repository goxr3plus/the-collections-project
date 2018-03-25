import React from 'react';
import classes from './Game.css';


const game = (props) => {

    return (

        <div>
        <div id={classes.con2}>
            <div className={classes.zayn_2 +' '+ classes.shadow} style = {{backgroundImage: 'url('+ props.image +')'}}>

                <span className={classes.pop}>{props.genre}</span> <span className={classes.date}>{props.releaseDate}</span>

                <span className={classes.pop} style = {{marginTop: '60px'}} >{props.ratings}</span>

                <div className={classes.overlay}>
                </div>

                <h4>{props.title}</h4>
            </div>
     
        </div>

    </div>
              
  );
}

export default game;