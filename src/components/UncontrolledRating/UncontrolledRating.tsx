import React, {useState} from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

type StarPropsType = {
    selected: boolean
    value: 0 | 1 | 2 | 3 | 4 | 5
    setValue: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

export function UncontrolledRating(props: any) {
    let val = 0 | 1 | 2 | 3 | 4 | 5
    const [num, setNum] = useState<number>(0)

    return (
        <div>
            <Star value={1} setValue={setNum} selected={num >= 1}/>

            <Star value={2}  setValue={setNum} selected={num >= 2}/>

            <Star value={3} setValue={setNum} selected={num >= 3}/>

            <Star value={4} setValue={setNum} selected={num >= 4}/>

            <Star value={5} setValue={setNum} selected={num === 5}/>

        </div>
    )
}


function Star(props: StarPropsType) {


    return (
        <span onClick={() => props.setValue(props.value)}>{props.selected ? <b>star   </b> : "star   "}</span>

    )
}