import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import allActions from "../actions";
import "./component.css";

const Functional = () => {
    const counter = useSelector(state => state.counter)
  
    const dispatch = useDispatch()

    return (
        <div className="component">
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(allActions.counterActions.increment())}>Increase Counter</button>
            <button onClick={() => dispatch(allActions.counterActions.decrement())}>Decrease Counter</button>
        </div>
    )
}

export default Functional