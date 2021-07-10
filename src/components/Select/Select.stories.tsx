import React, {useState} from "react";
import styles from "./Select.module.css"

import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: "Select stories",
    componenta: Select,
}


export let WithValue = () => {
    const [value, setValue] = useState(3)
    return <>
        <Select
            onChange={setValue}
            value={value}
            items={[
                {title: "Wow", value: 1},
                {title: "HS", value: 2},
                {title: "Ann", value: 3},
                {title: "Di", value: 4}
            ]}
        />

    </>
}

export let WithOutValue = () => {

    const [value, setValue] = useState(null)
   return <>
        <Select
            value={value}
            onChange={setValue}
            items={[
                {title: "Wow", value: 1},
                {title: "HS", value: 2},
                {title: "Ann", value: 3},
                {title: "Di", value: 4}
            ]}
        />
    </>
}
export const SelectAccordion = () => {
    const [state, setState] = useState([
        {title: "Wow", value: 1},
        {title: "HS", value: 2},
        {title: "Ann", value: 3},
        {title: "Di", value: 4}
    ])
    const [collapsed, setCollapsed] = useState(false)
    const [title, setTitle] = useState(state[0].value)
    let [hoveredElementValue, setHoveredElementValue] = useState(title)

    let onClick = (value: any) => {
        setTitle(value)
    }

    return <div>

        <h3 onClick={() => setCollapsed(!collapsed)}>{title}</h3>
        {collapsed && <div>
            {state.map((i, index) => <li
                className={styles.it + " "+ (title === i.value ? styles.itChuz:"" )}
                onClick={() => {

                    onClick(i.title);
                    setCollapsed(false)
                }}
                key={i.value}>{i.title}</li>)}
        </div>}

    </div>
}


