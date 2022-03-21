import { useContext } from "react"
import { Context } from "../context"
import '../App.css';

export function List(){
    const {state,dispatch,ref2} = useContext(Context)
   console.log(ref2)
    return(
        <div className="main">
        {state[0].map(function(item,index){
            if(state[1].includes(index)){
                return( <div key={Math.random()}>
                    <input key={Math.random()} ref={ref2} className="edit"></input> 
                     <span key={ Math.random()} onClick={function(){dispatch({type:"clear", payload:index})}} className="cancel">X</span>
                     <button onClick={function(){dispatch({type:"edit",payload:index,data:ref2.current.value})}} className="btnedit">Edit</button>
                </div>
                )
            }
            return(
            
            <div>
            <div key={Math.random()} onClick={function(){dispatch({type:"click",payload:index})}} className="list">{item}
            

            </div>
                        <button key={Math.random()} onClick={function(e){
                            e.stopPropagation()
                            dispatch({type:"delete",payload:index})}
                    
                                                                            } className="btnclose"> Delete</button>
                                                                            </div>
            )
        })}
    </div>
    )
}