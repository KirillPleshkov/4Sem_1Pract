import React, {useState} from 'react';
import cl from './Circle.module.css';

const Circle = ({state, index, top, left}) => {
    const classes = cl.circle + ' ' + (state.isRed ? cl.red : cl.blue)

    const FindFriends = (story, secondStory, isRed) => {
        let rezult = []
        const element = story[story.length - 1]

        if(element - 8 >= 0 && (isRed === false && element < 16) === false)
        {
            rezult.push(element - 8)
        }
        if(element + 8 <= 63 && (isRed === true && element > 47) === false)
        {
            rezult.push(element + 8)
        }
        if(element % 8 !== 0 && (isRed === false && (element - 1) % 8 === 0) === false )
        {
            rezult.push(element - 1)
        }
        if((element + 1) % 8 !== 0 && (isRed === true && (element + 2) % 8 === 0) === false )
        {
            rezult.push(element + 1)
        }

        const falseArr = [...story, ...secondStory]

        let i = 0

        while (i < falseArr.length)
        {
            let index = rezult.indexOf(falseArr[i]);
            if(index !== -1)
            {
                rezult.splice(index,1);
            }
            else
            {
                i++
            }
        }

        return rezult
    }

    const Click = () => {

        if(state.isStart && state.isRed)
        {
            state.setStoryRed([...state.storyRed, index])

            state.setButtons([...state.buttons].filter(function(f) { return f !== index }))

            state.setIsRed(state.isRed === false)

            return;
        }
        else if(state.isStart)
        {
            state.setIsStart(false)

            state.setButtons(FindFriends(state.storyRed, [...state.storyBlue, index], state.isRed))

            state.setStoryBlue([...state.storyBlue, index])

            state.setIsRed(state.isRed === false)

            return;
        }

        if(state.isRed)
        {
            state.setButtons(FindFriends(state.storyBlue, [...state.storyRed, index], state.isRed))

            state.setStoryRed([...state.storyRed, index])
        }
        else
        {
            state.setButtons(FindFriends(state.storyRed, [...state.storyBlue, index], state.isRed))

            state.setStoryBlue([...state.storyBlue, index])
        }

        state.setIsRed(state.isRed === false)
    }

    return (
        <div onClick={Click} className={classes} style={{top: top, left: left}}></div>
    );
};

export default Circle;