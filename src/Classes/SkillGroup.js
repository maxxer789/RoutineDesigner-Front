import React from 'react';

const SkillGroup = props => {
    return (
        <button onClick={props.inputHandler} className="skillGroupButton" name="selectedSkillGroup" value={props.skillGroup.id}>
                {props.skillGroup.name}
        </button>
    )
}

export default SkillGroup;