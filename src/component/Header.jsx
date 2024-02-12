import React, { useState } from 'react';
import './header.css';
import ExpenseDrawer from './ExpenseDrawer';
import CategoryPage from './CategoryPage';
import { Link } from 'react-router-dom';

const Header = () => {
  const [selectedButton, setSelectedButton] = useState('category');

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  return (
    <div className='main'>
  <div className='headercontainer'>
      <div className={`categorydiv ${selectedButton === 'category' ? 'selected' : ''}`}>
        <button onClick={() => handleButtonClick('category')}>CATEGORY</button>
      </div>
      
       <div className={`itemdiv ${selectedButton === 'items' ? 'selected' : ''}`}>
       <Link to="/item"> <button onClick={() => handleButtonClick('items')}>ITEMS</button></Link>
      </div>
     
      
     
    </div>
    {/* expense */}
    <div className='expensecontainer'>
<ExpenseDrawer/>
<CategoryPage/>
</div>
    </div>
  
  );
};

export default Header;
