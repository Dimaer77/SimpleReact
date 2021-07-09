import React, {useState} from "react";
import styl from "./OnOff.module.css"
type OnOffPropsType ={
    on:boolean
    defaultOn?:boolean
}



export function UncontrolledOnOff (props:any){
    const [onOff, setOnOff] = useState<boolean>(props.defaultOn? props.defaultOn : false)

    const onStyle={

        width:"30px",
        height:"30px",
        border:"1px solid",
        backgroundColor:onOff? "green":""
    }
    const offStyle={

        width:"30px",
        height:"30px",
        border:"1px solid",
        backgroundColor:onOff? "":"red"
    }
    const indicatorStyle ={
        display:"inline-block",
        width:"30px",
        height:"30px",
        borderRadius:"50%",
        marginLeft:"5px",
        backgroundColor:onOff? "green":"red"
    }


    return(
        <div  style={{display:"flex"}}>
            <div onClick={()=>setOnOff(true)} style={onStyle}>ON </div>
            <div onClick={()=>setOnOff(false)} style={offStyle} >OFF</div>
            <div onClick={()=>setOnOff(!onOff)}  style={indicatorStyle}></div>
        </div>
    )

}