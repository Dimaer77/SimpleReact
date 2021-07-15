import React, {useReducer} from "react";
import {reducer, Toggle} from "./reducer";

type AccordionPropsType = {
    valueTitle: string
}






export function UncontrolledAccordion(props: AccordionPropsType) {
    // const [collapsed, setCollapsed] = useState<boolean>(true)
    let [state, dispatch] =useReducer(reducer,{collapsed:false})



            return <div>
                {/*<AccordionTitle onClick={()=> setCollapsed(!collapsed)} title={props.valueTitle}/>*/}
                <AccordionTitle onClick={()=>{dispatch({type:"TOGGLE-COLLAPSED"})} } title={props.valueTitle}/>


                {!state.collapsed &&  <AccordionBody/> }
            </div>

}
type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>

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