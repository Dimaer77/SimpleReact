import React, {ChangeEvent, ChangeEventHandler, useRef, useState} from "react";


export default {
    title: "input",
    // componenta: input
}

export const UncontrolledInput = () => <input/>;


export const TrackValueOfUncontrolledInput = () => {

    const [state, setState] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value
        setState(text)
    }

    return <> <input value={state} onChange={onChange}/>{state} </>
}
export const GetValueByButtonPress = () => {

    const [state, setState] = useState("")
    let inputRef = React.useRef<HTMLInputElement>(null)

    function save() {
        const el = inputRef.current as HTMLInputElement
        return setState(el.value)
    }


    return <> <input ref={inputRef}/>
        <button onClick={save}>save</button>
        {state} </>
}

export const ControlledInput = () => {
    let [parentValue, setParentValue] = useState("")
    debugger
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        setParentValue(e.currentTarget.value)
    }

    return (<input value={parentValue} onChange={onChange}/>)
}

export const ControlledCheckBox = () => {
    let [parentValue, setParentValue] = useState(true)
    debugger
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        setParentValue(e.currentTarget.checked)
    }

    return (<input type={"checkbox"} checked={parentValue} onChange={onChange}/>)
}
export const ControlledSelect = () => {

    let [parentValue, setParentValue] = useState<string | undefined>("2")
    debugger
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        debugger
        setParentValue(e.currentTarget.value)
    }

    return (
        <select onChange={onChange} value={parentValue}>
            <option value={"1"}>Minsnk</option>
            <option value={"2"}>Ogri</option>
            <option value={"3"}>dUROTAN</option>
            <option value={"3"}>none</option>
        </select>

    )
}

