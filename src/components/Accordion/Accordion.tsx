import React, {FC} from "react";
type itemType={
    title:string
    value:any
}
type AccordionPropsType = {
    onChange: () => void
    valueTitle: string
    collapsed: boolean
    items: itemType[]
    onClick:(value:any)=>void

}
export function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle
            onClick={props.onClick}
            items={props.items}
            onChange={props.onChange}
            valueTitle={props.valueTitle}/>
        {props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
    </div>
}


type AccordionTitlePropsType = {
    valueTitle: string
    onChange: () => void
    items: itemType[]
    onClick:(value:any)=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={(e) => props.onChange()}>{props.valueTitle}</h3>

    );
}



type AccordionBodyPropsType = {
    items: itemType[]
    onClick:(value:any)=>void

}
function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((elm,index)=><li onClick={()=>{ props.onClick(elm.value)}} key={elm.value }>{elm.title}</li>)}
        </ul>
    );

}