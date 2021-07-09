import React, {useState} from "react";
import {UncontrolledOnOff} from "./UncontrolledOnOff";


export default {
    title: "UncontrolledOnOff",
    componenta: UncontrolledOnOff,
}

export const On = () => <UncontrolledOnOff defaultOn={false}/>
export const Off = () => <UncontrolledOnOff defaultOn={false}/>



