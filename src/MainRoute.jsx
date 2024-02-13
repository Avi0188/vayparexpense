import React from 'react'
import { Route, Routes } from 'react-router-dom'

import CategoryPage from './component/CategoryPage'
import Header from './component/Header'
import Item from './component/Item'
import Expense from './component/Expense'

const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />} ></Route>
      <Route path='/item' element={<Item />} />
      <Route path='/expense' element={<Expense />} />

    </Routes>
  )
}
export default MainRoute
