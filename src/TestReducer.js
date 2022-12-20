import React from "react";

export const TestReducer = (prevState, action) =>{
    switch(action.type) {
        case 'ADD':
        return {
            ...prevState,
            test: action
        }
    }
}