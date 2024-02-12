import React from 'react'
import "./category.css"



const CategoryPage = () => {
  return (
   
        <div className='details'>
           <div className='detailscontainer'>
            <div>
                <h4>Petrol</h4>
                <h4>Total : 78.00</h4>
            </div>
            <div>
                <h4>Direct Expense</h4>
                <h4>Balance : 78.00</h4>
            </div>
           </div>
      <div className='detailsCont'>
<div className='prodDet'>
    <div>
        <input type="search" placeholder='Search' />
    </div>
   </div>
   <table >
    <thead>
        <tr>
            <th>DATE</th>
        </tr>
        <tr>
            <th>EXP NO</th>
        </tr>
        <tr>
            <th>PARTY</th>
        </tr>
        <tr>
            <th>PAYMENT</th>
        </tr>
        <tr>
            <th>AMOUNT</th>
        </tr>
        <tr>
            <th>Balance</th>
        </tr>
       
    </thead>
   </table>
</div>
</div>
      
  
  )
}



export default CategoryPage
