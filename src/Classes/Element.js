import React from 'react';

const Element = props => {
    return (
    <button onClick={props.inputHandler} className="elementButton" name="selectedElementId" value={props.element.id}>
                {props.element.name}
                <br/>
                Difficulty: {props.element.difficulty}
    </button>
    )
}

export default Element;