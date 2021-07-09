import React, {useState} from 'react';
import './App.css';

import {Rating, RatingValueType} from "./components/Rating/Rating";

import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";


export function App() {

    let[ratingValue,setRatingValue] =useState<RatingValueType>(3)
    let[accordionCollapsed,setAccordionCollapsed] = useState<boolean>(true)
    let[switchOn,setSwitchOn] = useState<boolean>(true)
    return (
        <div>
            {/*<Title title={"Tiiiiiiiittttlleeee"}/>*/}


            <Rating  value={ratingValue} onClick={setRatingValue}/>


            <Accordion collapsed={accordionCollapsed} valueTitle={"Controle"} onChange={()=>setAccordionCollapsed(!accordionCollapsed)}/>
            {/*<UncontrolledAccordion valueTitle={"UNCONTROLE"}/>*/}
            {/*<UncontrolledAccordion valueTitle={"UNCONTROLE"} />*/}
            {/*<UncontrolledRating/>*/}
            <OnOff onChange={setSwitchOn} onOff={switchOn}/>

            {/*<UncontrolledOnOff/>*/}
            {/*<UncontrolledOnOff/>*/}
        </div>
    );


    type TitlePropsTitle = {
        title: string
    }

    function Title(props: TitlePropsTitle) {
        return (
            <h3>{props.title}</h3>
        );
    }

}
