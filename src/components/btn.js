import { useContext } from "react"
import { Context } from "../context"
import '../App.css';

export function Button(){
    const {dispatch,ref} = useContext(Context)

    return(
        <button onClick={function(){
            
            dispatch({type:"add",payload:ref.current.value})
            ref.current.value = ""
    
    
                                                    }} className="btn">Add To Do</button>
    )
}