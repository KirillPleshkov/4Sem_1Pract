import React, {useState} from 'react';
import cl from './Circle.module.css';

const Circle = ({isRed, top, left, index}) => {
    const classes = cl.circle + ' ' + (isRed ? cl.red : cl.blue)

    const Click = () => {
        console.log(index)
    }

    return (
        <div onClick={Click} className={classes} style={{top: top, left: left}}></div>
    );
};

export default Circle;