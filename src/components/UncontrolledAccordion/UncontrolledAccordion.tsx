import React, {useState} from "react";

type AccordionPropsType = {
    valueTitle: string
    // collapsed: boolean
}
type AccordionTitlePropsType = {
    valueTitle: string
    onClick:()=>void
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(true)


            return <div>
                <AccordionTitle onClick={()=> setCollapsed(!collapsed)} valueTitle={props.valueTitle}/>
                {collapsed &&  <AccordionBody/> }
            </div>

}


function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClick}>{props.valueTitle}</h3>

    );
}

function AccordionBody() {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );

}