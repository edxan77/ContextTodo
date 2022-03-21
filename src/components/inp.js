import { useEffect, useReducer, useRef } from "react"
import { act } from "react-dom/test-utils"
import {Context} from "../context"
import {Button} from "./btn"
import{List} from "./list"
import '../App.css';

const init = [
    [],
    []
]
function reducer(state,action){

    switch (action.type){
        case "add":
        return [[...state[0],action.payload],
                [... state[1]]
                                            ]

        case "click":
            return  [[...state[0]],
            [... state[1],action.payload]
                                        ]     
        case "clear":
            return  [[...state[0]],
            [... state[1].filter(function(element){return element!==action.payload})]]
            
            
            case "edit":
               
            return  [[...state[0].map(function(item,index){if(index==action.payload){return item=action.data}else{return item}})],
            [... state[1].filter(function(element){return element!==action.payload})]
             
        ]
        case "delete":
                
            return    [[...state[0].filter(function(elem,index){return index!==action.payload})],
            [... state[1]]
             
        ]
    }




}
export function Input(){

   const [state,dispatch] = useReducer(reducer,init)
    const ref2 = useRef()
    const ref = useRef()
    console.log(state)
   
   
    return(
        <Context.Provider value={{ref,dispatch,state,ref2}}>
        <div>
        <input ref={ref} className="inp"></input>
        <Button></Button>
        <List></List>
       
        </div>
        </Context.Provider>
    )
}