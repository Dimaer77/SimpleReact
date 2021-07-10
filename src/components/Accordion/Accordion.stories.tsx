import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: "Accordion",
    componenta: Accordion,
}


export const Collapsed = () => <Accordion onClick={alert} collapsed={true} onChange={action("clicked")}
                                          valueTitle={"Accordion 1"} items={[]}/>
export const UnCollapsed = () => <Accordion onClick={alert} collapsed={true} onChange={action("clicked")}
                                            valueTitle={"Accordion 2"}
                                            items={[{title: "asd", value: 1}, {title: "asd", value: 2}, {
                                                title: "asd",
                                                value: 3
                                            }, {title: "asd", value: 4}]}/>


export const ControlledAccordion = () => {
    const [col, setCol] = useState<boolean>(true)

    return <Accordion
        onClick={(id) => {
            alert(`users with id ${id} should be happy`)
        }}
        collapsed={col} onChange={() => setCol(!col)} valueTitle={"Accordion 2"}
        items={[
            {title: "asd", value: 1},
            {title: "asd", value: 2},
            {title: "asd", value: 3},
            {title: "asd", value: 4}]}/>
}