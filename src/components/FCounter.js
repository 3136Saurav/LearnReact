import { render } from '@testing-library/react';
import React, { Component, useEffect, useState } from 'react';
import useDocumentTitle from './useDocumentTitle';

function FCounter(props) {
    const [count, setCount] = useState(0)
    const [input, setInput] = useState("")

    useDocumentTitle(`${input} changed counter to ${count}`);

    return (
        <div>
            <input type="text" onChange={(e) => setInput(e.target.value)}></input>
            Counter has <strong>{count}</strong> value
            <br />
            <button onClick={() => setCount(count + 1)} className="btn btn-primary">Increment</button>
            <button onClick={() => { (count > 0) && setCount(count - 1)}} className="btn btn-danger">Decrement</button>
        </div>
    )
}

export default FCounter;



