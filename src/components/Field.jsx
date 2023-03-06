import React, {useState} from 'react';
import Circle from "./UI/circle/Circle";
import cl from "./Styles.css"

const Field = ({state}) => {

    const GetLeftPos = (element) => {
        return 37 + (element % 8) * 84.5
    }

    const GetTopPos = (element) => {
        return 37 + ((element / 8) | 0) * 84.5
    }

    const DrawLines = (story, isRed) => {
        if(story.length < 1)
            return(<div/>)

        let rezult = []

        for(let i = 1; i < story.length; i++)
        {
            if(story[i - 1] - 1 === story[i])
            {
                rezult.push({leftPos: GetLeftPos(story[i]) + 12, topPos: GetTopPos(story[i]) + 12, className: "rightLine"})
            }
            if(story[i - 1] + 1 === story[i])
            {
                rezult.push({leftPos: GetLeftPos(story[i - 1]) + 12, topPos: GetTopPos(story[i - 1]) + 12, className: "rightLine"})
            }
            if(story[i - 1] - 8 === story[i])
            {
                rezult.push({leftPos: GetLeftPos(story[i - 1]) - 30, topPos: GetTopPos(story[i - 1]) - 30, className: "topLine"})
            }
            if(story[i - 1] + 8 === story[i])
            {
                rezult.push({leftPos: GetLeftPos(story[i]) - 30, topPos: GetTopPos(story[i]) - 30, className: "topLine"})
            }

            if(isRed === true)
            {
                rezult[i -1].topPos -= 3
                rezult[i -1].leftPos -= 3
                rezult[i -1].className += " red"
            }
            else
            {
                rezult[i -1].topPos += 3
                rezult[i -1].leftPos += 3
                rezult[i -1].className += " blue"
            }
        }

        return rezult
    }

    const Reload = () => {
        window.location.reload()
    }

    let arr = []

    return (
        <div className="field" >
            <button name="button" onClick={Reload}>R</button>
            {
                (state.buttons.length === 0)
                ?
                    <div className="win">
                        <h2>Конец игры</h2>
                        {
                            (state.isRed === false)
                            ?
                                <h3>Выиграл красный</h3>
                            :
                                <h3>Выиграл синий</h3>
                        }
                        {
                            state.setIsWin(true)
                        }
                    </div>
                :
                    <div/>
            }
            {
                state.buttons.map((element) =>
                    <div>
                        <Circle key={element} state={state} top={GetTopPos(element)} left={GetLeftPos(element)} index={element}/>
                    </div>
                )
            }
            {
                (DrawLines(state.storyRed).length > 0)
                ?
                    DrawLines(state.storyRed, true).map((element) =>
                        <div className={element.className} style={{top: element.topPos, left: element.leftPos}}></div>
                ) : <div/>

            }
            {
                (DrawLines(state.storyBlue).length > 0)
                    ?
                    DrawLines(state.storyBlue, false).map((element) =>
                        <div className={element.className} style={{top: element.topPos, left: element.leftPos}}></div>
                    ) : <div/>
            }
            {
                (state.storyRed.length > 0)
                    ?
                    <div className="circle" style={{background: "red", top: GetTopPos(state.storyRed[0]), left: GetLeftPos(state.storyRed[0])}}/>
                    :
                    <div/>
            }
            {
                (state.storyBlue.length > 0)
                    ?
                    <div className="circle" style={{background: "blue", top: GetTopPos(state.storyBlue[0]), left: GetLeftPos(state.storyBlue[0])}}/>
                    :
                    <div/>
            }

        </div>
    );
};

export default Field;