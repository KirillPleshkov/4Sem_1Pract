import React, {useState} from 'react';
import Circle from "./UI/circle/Circle";
import cl from "./Styles.css"

const Field = ({isStart, isRed, buttons}) => {
    const GetButtons = () =>
    {
        return(
            <div className={cl.field}>
                {buttons.map((line) =>
                    line.map((button) =>
                        <Circle isRed={true}/>
                    )
                )}
            </div>
        )
    }

    return (
        <div>
            {GetButtons()}
        </div>
    );
};

export default Field;