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

    const [storyRed, setStoryRed] = useState([])
    const [storyBlue, setStoryBlue] = useState([])

    const state = {isStart, setIsStart, isRed, setIsRed, buttons, setButtons, storyRed, setStoryRed, storyBlue, setStoryBlue}

    return (
        <div>
            <div className="container">
                <img src={Im} alt=""/>
                <Field state={state} className={cl.field}/>
            </div>
        </div>

    );
};

export default Game;