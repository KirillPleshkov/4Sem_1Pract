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

    const CreateFullStory = () => {
        let rezult = []
        for(let i = 0; i < storyRed.length; i++)
        {
            rezult.push({X: storyRed[i] % 8, Y: storyRed[i] / 8 | 0, key: 2})
            rezult.push({X: storyBlue[i] % 8, Y: storyBlue[i] / 8 | 0, key: 1})
            console.log(rezult[i])
        }


        return rezult
    }

    const [isStart, setIsStart] = useState(true)
    const [isRed, setIsRed] = useState(true)
    const [isWin, setIsWin] = useState(false)

    const [buttons, setButtons] = useState(CreateButtons)

    const [storyRed, setStoryRed] = useState([])
    const [storyBlue, setStoryBlue] = useState([])

    const state = {isStart, setIsStart, isRed, setIsRed, buttons, setButtons, storyRed, setStoryRed, storyBlue, setStoryBlue, setIsWin}

    let story = []

    return (
        <div className="about">
            <div className="container">
                <img src={Im} alt=""/>
                <Field state={state} className={cl.field}/>
            </div>
            <div>

                {
                    isWin
                    ?
                        CreateFullStory().map((element) =>
                            (element.key % 2 === 0)
                            ?
                                <div>Красный X:{element.X} Y:{element.Y}</div>
                            :
                                <div>Синий X:{element.X} Y:{element.Y}</div>
                        )

                    :
                        <div/>
                }
            </div>
        </div>

    );
};

export default Game;