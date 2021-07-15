import React from "react";


export type ActionType = {
    type:string
}

export type Toggle = {
    type: "TOGGLE-COLLAPSED"
}

export type StateType ={
    collapsed:boolean
}

export const reducer = (state: StateType, action: ActionType):StateType => {

    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            let newState = {...state}
            newState.collapsed = !state.collapsed
           return newState
        default:
            throw  new Error('Bad action type')
    }

    return state
}