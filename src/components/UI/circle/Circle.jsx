import React, {useState} from 'react';
import cl from './Circle.module.css';
const Circle = (props) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className={cl.circle}></div>
    );
};

export default Circle;