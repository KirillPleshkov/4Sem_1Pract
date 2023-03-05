import React, {useState} from 'react';
import Circle from "./UI/circle/Circle";
import cl from "./Styles.css"

const Field = ({buttons}) => {

    const GetLeftPos = (element) => {
        return 37 + (element % 8) * 84.5
    }

    const GetTopPos = (element) => {
        return 37 + ((element / 8) | 0) * 84.5
    }

    return (
        <div className="field" >
            {
                buttons.map((element) =>
                    <div>
                        <Circle key={element} isRed={true} top={GetTopPos(element)} left={GetLeftPos(element)} index={element}/>
                    </div>
                )
            }
        </div>
    );
};

export default Field;