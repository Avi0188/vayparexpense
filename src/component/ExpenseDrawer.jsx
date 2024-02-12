import React from 'react'
import './sidedrawer.css'
import { FaSearch } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

let productDet =  [{name:"petrol",amt:0},
{name:"deisel",amt:0},
{name:"salary",amt:0},
{name:"rent",amt:0},{name:"dog",amt:0},
]
 
const ExpenseDrawer = () => {
  return (
    <div className='drawer'>
    <div className='drawer-container'>
 <div className='searchbox'>
<div>
<FaSearch/>
</div>
    <div>
    <IoIosAddCircleOutline style={{position:"absolute",marginLeft:"30px",marginTop:"8px",color:"white"}}/>
        <button>Add Expense</button>
    </div>
 </div>
 <div className='cat-amt'>
<div>
    <button>Category</button>
</div>
<div>
    <button>Amount</button>
</div>
           </div>
 
    </div>
    {/*  */}

{
  productDet.map((item)=>
  <div className='prodet'>
  <div>
    <p>{item.name}</p>
   
  </div>
  <div>
  <p>{item.amt}</p>
    <BsThreeDotsVertical/>
  </div>
</div>
  )
}
    
    </div>
  )
}

export default ExpenseDrawer
