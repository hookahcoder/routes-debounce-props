import { useState } from "react";

function FindUsers(argumentsss) {


    let items = argumentsss.props

    let [state, setState] = useState('')

    const debounce = (fn, ms) => {
        let timeout;
        return function () {
            const fnCall = () => { fn.apply(this, arguments) }
            clearTimeout(timeout);
            timeout = setTimeout(fnCall, ms)
        }
    }

    const setStateDebounced = debounce(handleState, 500)

    function handleState(e) {
        setState(e.target.value);
    }

    return (
        <>
            <input type='text' onChange={(e) => setStateDebounced(e)}></input>
            <div>{state}</div>
            <div>{items.sort((a, b) => { return a - b }).map((el, i) => {
                return <div key={i}>{el}</div>
            })}</div>
        </>
    )
}

export default FindUsers;