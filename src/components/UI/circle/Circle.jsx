import React, {useState} from 'react';
import cl from './Circle.module.css';

const Circle = ({isRed}) => {
    const classes = cl.circle + ' ' + (isRed ? cl.red : cl.blue)

    return (
        <div className={classes}></div>
    );
};

export default Circle;