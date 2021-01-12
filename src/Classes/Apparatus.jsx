import React from 'react';

const Apparatus = props => {
    return (
        <button onClick={props.inputHandler} className="apparatusButton" name="apparatusId" value={props.apparatus.id}>
                    {props.apparatus.name}
                    <br />
                    {props.apparatus.abbreviation}
        </button>
    )
}

export default Apparatus;