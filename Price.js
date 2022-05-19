import React,{useState} from 'react'

function Price() {
        const Price=4.00;
    const[price,setPrice]=useState(Price)
    const[newprice,setNew]=useState()
     const saladIncrement=()=>{
          setPrice(price+0.50)
         
     }
     const saladDec=()=>{
          setPrice(price-0.50)
     }

     const cheeseIncrement=()=>{
        setPrice(price+0.40)
       
   }
   const cheeseDec=()=>{
        setPrice(price-0.40)
   }
  return (
    <div>
           <h1>Current Price: {price}</h1>
           <h3>Salad</h3>
         <button  onClick={saladIncrement}>More</button>
         <button disabled={price<=4} onClick={saladDec}>Less</button>
           <h3>Cheese</h3>
         <button  onClick={cheeseIncrement}>More</button>
         <button disabled={price<=4} onClick={cheeseDec}>Less</button>
    </div>
  )
}

export default Price