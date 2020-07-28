import React from 'react';
import classes from "./style.module.css";

const Button = ({ text }) => {
    return (
        <button className={classes.btn} >
            { text }
        </button>
    );
};

export default Button
