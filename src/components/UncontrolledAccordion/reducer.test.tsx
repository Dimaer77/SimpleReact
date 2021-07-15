import React from "react";
import {reducer, StateType} from "./reducer";
import {action} from "@storybook/addon-actions";

test("Should be true", ()=>{
    const state:StateType={
        collapsed:false
    }
   const newState =  reducer(state, {type:"TOGGLE-COLLAPSED"})

    expect(newState.collapsed).toBe(true)

})