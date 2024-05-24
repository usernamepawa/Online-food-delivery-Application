
import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

function Card(props) {
  const dispatch = useDispatchCart();
  const cart = useCart();
   const priceRef=useRef()
  let options = props.options || {}; // Default to an empty object if options is undefined
  const priceOptions = Object.keys(options);
  let foodItem = props.foodItem || {}; // Default to an empty object if foodItem is undefined


  const[qty,SetQty]=useState(1)
  const[size,SetSize]=useState("")
  const handleCart = async() => {
      let food=[]
      for(const item of cart)
        {
          if(item.id === props.foodItem._id){
            food=item;

            break;
          }
        }
   if(food!=[])
    {
      if(food.size=== size)
        {
          await dispatch({type:"UPDATE", id:foodItem._id, price: finalPrice,qty:qty})
          return
        }
        else if(food.size !==size)
          {
            await dispatch({type:"ADD", id:props.foodItem._id,name :props.foodItem.name, price :finalPrice,qty:qty,size:size})
             return
          }
          return
    }
    
    await dispatch({type:"ADD", id:props.foodItem._id,name :props.foodItem.name, price :finalPrice,qty:qty,size:size})
  
     console.log(cart)
  };

let finalPrice=qty * parseInt(options[size])
useEffect(()=>
{
  SetSize(priceRef.current.value)
},[])
  return (
    <>
      <div>
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
          <img src={foodItem.img || "default.jpg"} style={{ height: "120px", objectFit: "fill" }} alt={foodItem.name || "Food Item"}/>
          <div className="card-body">
            <h5 className="card-title">{foodItem.name || "Food Name"}</h5>
            <p className="card-text">This is some important text</p>
            <div className='container w-100'>
              <select className='m-2 h-100 bg-success rounded' onChange={(e)=>SetQty(e.target.value)}>
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e)=>SetSize(e.target.value)}>
                {priceOptions.map((data) => (
                  <option key={data} value={data}>
                    {data}
                  </option>
                ))}
              </select>
              <div className='d-inline h-100 fs-5'>
               Rs : {finalPrice} /-
              </div>
            </div>
            <hr />
            <button className="btn btn-success justify-center ms-2" onClick={handleCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

// import { useDispatchCart,useCart } from "./ContextReducer";
// function Card( props) {
  
//   let options=props.options;
//   const priceOptions = Object.keys(options);
//   let foodItem=props.foodItems;
//   console.log(foodItem)
//   const handleCart=()=>
//     {


//     }




//   return (
//     <>
//       <div>
//         <div class="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
//           <img src={props.foodItem.img}   style={{height:"120px",objectFit:"fill"}}/>
//           <div class="card-body">
//             <h5 class="card-title">{props.foodItem.name}</h5>
//             <p class="card-text">This is some important text.</p>
//             <div className='container w-100'>
//               <select className='m-2 h-100 bg-success rounded'>
//                 {Array.from(Array(6), (e, i) => {
//                   return (
//                     <option key={i + 1} value={i + 1}>{i + 1}</option>
//                   )
//                 })}
//               </select>
//               <select className='m-2 h-100 bg-success rounded'>
//             {
//                 priceOptions.map((data) => (
//                   <option key={data} value={data}>
//                     {data}
//                   </option>
//                 ))}
            
              
//               </select>
//               <div className='d-inline h-100 fs-5'>
//                 Total Price
//               </div>

//             </div>
//             <hr>
         
          
//          </hr>
//          <button className="btn btn-success justify-center ms-2" onClick={handleCart}> Add to Cart</button>
//           </div>
         
//         </div>
//       </div>
//     </>
//   )
// }

// export default Card
// import React from "react";

// function Card({ foodName, options = {}, imgSrc }) {
//   const priceOptions = Object.keys(options);

//   return (
//     <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
//       <img src={imgSrc} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{foodName}</h5>
//         <p className="card-text">This is some important text.</p>
//         <div className="container w-100">
//           <select className="m-2 h-100 bg-success rounded">
//             {Array.from(Array(6), (e, i) => (
//               <option key={i + 1} value={i + 1}>
//                 {i + 1}
//               </option>
//             ))}
//           </select>
//           <select className="m-2 h-100 bg-success rounded">
//             {priceOptions.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//           <div className="d-inline h-100 fs-5">Total Price</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;
