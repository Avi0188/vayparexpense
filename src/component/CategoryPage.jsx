import React from 'react'
import "./category.css"
import CategoryPageHeader from '../CategoryPageHeader'



const CategoryPage = ({ite}) => {
  return (
   
        <div className='details'>
         {ite?"":<CategoryPageHeader />}
         <div className='detailsCont' style={ite ? {height:"420px"} : {}}>

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
