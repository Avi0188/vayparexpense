import React from 'react'
import { Route, Routes } from 'react-router-dom'

import CategoryPage from './component/CategoryPage'
import Header from './component/Header'
import Item from './component/Item'

const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />} ></Route>
      <Route path='/item' element={<Item />} />
    </Routes>
  )
}
export default MainRoute
