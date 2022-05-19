import React,{useReducer} from 'react'

function Items() {
    const initialstate={
        Price:4.00
    }
    const isdisabled={
        isdisabled:false
    }

       const reducer=(state,action,sisdisabled)=>{
           
            switch(action.type){
                case "Salad":
                    return{...state,Price:state.Price+0.50}

            
               case "Cheese":
                    return{...state,Price:state.Price+0.40}

                case "SaladDec":
                   
                       return{...state,Price:state.Price-0.50}

                
                 case "CheeseDec":
                   
                        return{...state,Price:state.Price-0.40}
                   
            }
       }

    const[state,dispatch]=useReducer(reducer,initialstate)

    const SaladIncrement=()=>{
        dispatch({type:"Salad"})
    }

    const CheeseIncrement=()=>{
        dispatch({type:"Cheese"})
    }

    const SaladDecrement=()=>{
        dispatch({type:"SaladDec"})
    }


    const CheeseDecrement=()=>{
        dispatch({type:"CheeseDec"})
    }
  return (
    <div>
         <h1>Current Price: {state.Price}</h1>
         <h3>Salad</h3>
         <button  onClick={SaladIncrement}>More</button>
         <button disabled={state.Price<=4}  onClick={SaladDecrement}>Less</button>
           <h3>Cheese</h3>
         <button onClick={CheeseIncrement}>More</button>
         <button disabled={state.Price<=4} onClick={CheeseDecrement}>Less</button>

    </div>
  )
}

export default Items