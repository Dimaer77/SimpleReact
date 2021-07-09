import React, {useState} from "react";
 export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClick:(value:RatingValueType)=>void
}

type StarPropsType = {
    selected: boolean
    onClick:(value:RatingValueType)=>void
    value: RatingValueType
}
export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star value={1} onClick={props.onClick}  selected={props.value >= 1}/>
            <Star value={2} onClick={props.onClick}  selected={props.value >= 2}/>
            <Star value={3} onClick={props.onClick}  selected={props.value >= 3}/>
            <Star value={4} onClick={props.onClick}  selected={props.value >= 4}/>
            <Star value={5} onClick={props.onClick}  selected={props.value === 5}/>

        </div>
    )
}
function Star(props: StarPropsType) {
    return (
        <span onClick={()=>props.onClick(props.value)}>{props.selected ? <b>star   </b> : "star   "}</span>

    )
}