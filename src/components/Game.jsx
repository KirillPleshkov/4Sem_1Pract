import React, {useState} from 'react';
import Field from "./Field";
import Im from "./Image/Im.jpg"
import cl from "./Styles.css"

const Game = () => {

    const CreateButtons = () => {
        var arr = [];
        for(let i = 0; i < 8 * 8; i++)
        {
            arr[i] = i;
        }
        return arr;
    }

    const [isStart, setIsStart] = useState(true)
    const [isRed, setIsRed] = useState(true)

    const [buttons, setButtons] = useState(CreateButtons)



    return (
        <div>
            <div className="container">
                <img src={Im} alt=""/>
                <Field buttons={buttons} className={cl.field}/>
            </div>

        </div>

    );
};

export default Game;