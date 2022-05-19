import React,{useState} from 'react'

function Context() {

    const Price=4.00;

    const[price,setPrice]=useState(Price)
    const[salad,setsalad]=useState([])
    const[cheese,setCheese]=useState()

    const saladIncrement=()=>{
       
        setPrice(price+0.50)
        setsalad([...salad, salad[index]+=1])
    }

    const saladDec=()=>{
        setsalad(price-0.50)
        setPrice(salad)
   }
  return (
    <div>
          <h1>Current Price: {price}</h1>
           <h3>Salad</h3>
         <button  onClick={saladIncrement}>More</button>
         <button disabled={salad<=4} onClick={saladDec}>Less</button>
    </div>
  )
}

export default Context
