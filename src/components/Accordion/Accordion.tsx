import React from "react";

type AccordionPropsType = {
    onChange:()=>void
    valueTitle: string
    collapsed: boolean

}
type AccordionTitlePropsType = {
    valueTitle: string
    onChange:()=>void
}

export function Accordion(props: AccordionPropsType) {

            return <div>
                <AccordionTitle onChange={props.onChange} valueTitle={props.valueTitle}/>
                {props.collapsed &&  <AccordionBody/> }
            </div>

}


function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={(e)=>props.onChange()}>{props.valueTitle}</h3>

    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );

}