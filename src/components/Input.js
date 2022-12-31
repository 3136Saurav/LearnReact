import React from 'react';


function Input(props) {

    console.log(props.error);
    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <input onChange={props.onChange} name={props.name} value={props.value} id={props.text} type="text" />
            {props.error && <h4>{props.error}</h4>}
        </div>
    )
}

export default Input;