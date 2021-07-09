import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";


export default {
    title: "OnOff",
    componenta: OnOff,
}

export const OnMode = () => <OnOff onOff={true} onChange={action("on or off click")}/>
export const OffMode = () => <OnOff onOff={false} onChange={action("on or off click")}/>

export const OnOffSwitcher = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff onOff={value} onChange={setValue}/>
}