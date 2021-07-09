import React, {useState} from "react";
type OnOffPropsType ={

    onChange:(val:boolean)=>void
    onOff:boolean
}



export function OnOff (props:OnOffPropsType){


    const onStyle={

        width:"30px",
        height:"30px",
        border:"1px solid",
        backgroundColor:props.onOff? "green":""
    }
    const offStyle={

        width:"30px",
        height:"30px",
        border:"1px solid",
        backgroundColor:props.onOff? "":"red"
    }
    const indicatorStyle ={
        display:"inline-block",
        width:"30px",
        height:"30px",
        borderRadius:"50%",
        marginLeft:"5px",
        backgroundColor:props.onOff? "green":"red"
    }

    const onClicked =()=>{
        props.onChange(true)
    }

    const offClicked =()=>{
        props.onChange(false)
    }


    return(
        <div  style={{display:"flex"}}>
            <div onClick={onClicked} style={onStyle}>ON </div>
            <div onClick={offClicked} style={offStyle} >OFF</div>
            <div onClick={()=>props.onChange(!props.onOff)} style={indicatorStyle}/>
        </div>
    )

}