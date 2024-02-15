import React from 'react'
import Header from './Header'
import CategoryPage from './CategoryPage'
import ExpenseDrawer from './ExpenseDrawer'
import "./item.css"
const Item = () => {
  return (
    <div className='maincont'>

       <div className='expnsecont'>
  <ExpenseDrawer />
    </div>
    <div className='catcont'>
      
<CategoryPage  />
    </div>
    </div>
   
  )
}

export default Item
