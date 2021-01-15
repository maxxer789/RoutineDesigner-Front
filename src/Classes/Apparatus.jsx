import React from 'react';

const Apparatus = props => {
    return (
        <button role={props.role} onClick={props.inputHandler} className="apparatusButton" name="apparatusId" value={props.apparatus.id}>
                    {props.apparatus.name}
                    <br />
                    {props.apparatus.abbreviation}
        </button>
    )
}

export default Apparatus;