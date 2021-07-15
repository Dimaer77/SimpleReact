import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from "./Select.module.css"

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    let [active, setActive] = useState(false)
    let [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const toggleItems = () => {
        setActive(!active)
    }
    const itemClicked = (value: any) => {
        props.onChange(value)
    }
    const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretedentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1];
                    if (pretedentElement)
                        props.onChange(pretedentElement.value)
                    return

                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === "Escape" || e.key === "Enter") {
            e.key === "Escape"
                ? setActive(false)
                : setActive(!active)
        }
    }

    return (
        <>
            <select name="" id="">
                <option value="1">asda</option>
                <option value="2">dsd</option>
                <option value="3">asd</option>
            </select>
            <div className={styles.select} onKeyUp={onKey} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            className={styles.it + " " + (hoveredItem === i ? styles.itChuz : "")}
                            key={i.value}
                            onClick={() => {
                                itemClicked(i.value);
                                setActive(false)
                            }}>
                            {i.title}
                        </div>)}
                    </div>}
            </div>

        </>

    )
}