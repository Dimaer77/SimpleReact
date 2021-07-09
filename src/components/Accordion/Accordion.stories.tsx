import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: "Accordion",
    componenta: Accordion,
}

export const Collapsed = () => <Accordion collapsed={true} onChange={action("clicked")} valueTitle={"Accordion 1"}/>
export const UnCollapsed = () => <Accordion collapsed={false} onChange={action("clicked")} valueTitle={"Accordion 2"}/>


export const OnOffSwitcher = () => {
    const [col, setCol] = useState<boolean>(true)

    return <Accordion collapsed={col} onChange={()=>setCol(!col)} valueTitle={"Accordion 2"}/>
}