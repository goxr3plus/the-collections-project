import React from 'react';
import classes from './SearchBar.css';


const searchbar = (props) => {


    return (
           
       <form className = {classes.outerDiv} >

       <input 
             className = {classes.searchInput} 
             type = 'text'
             onChange = {props.changed}
             placeholder = 'Search ....' />

       </form>
    );
};


export default searchbar;