import React, {useState} from 'react';
import Field from "./Field";
import Im from "./Image/Im.jpg"

const Game = () => {

    const [isStart, setIsStart] = useState(true)
    const [isRed, setIsRed] = useState(true)

    const [buttons, setButtons] = useState([[true, true], [false, true]])

    return (
        <div>
            <h1>Змейка</h1>
            <Field
                isStart={isStart}
                isRed={isRed}
                buttons={buttons}
            >
                <img src={Im}/>
            </Field>

        </div>
    );
};

export default Game;