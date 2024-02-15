import React, { useState } from 'react';
import './header.css';
import ExpenseDrawer from './ExpenseDrawer';
import CategoryPage from './CategoryPage';
import CategoryPageHeader from '../CategoryPageHeader';
import { toBeDisabled, toBeEnabled } from '@testing-library/jest-dom/matchers';

const Header = () => {
  const [selectedButton, setSelectedButton] = useState('category');
  const [ite, setIte] = useState(false);

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
    if(buttonType === 'items'){
      setIte(true);
    }
    else{setIte(false)}
    
  };

  return (
    <div className='main'>
    
      <div className='headercontainer'>
        <div className={`categorydiv ${selectedButton === 'category' ? 'selected' : ''}`}>
          <button onClick={() => handleButtonClick('category')}>CATEGORY</button>
        </div>

        <div className={`itemdiv ${selectedButton === 'items' ? 'selected' : ''}`}>
        <button onClick={() => handleButtonClick('items')} >ITEMS</button>

        </div>
      </div>

      {/* Conditional rendering based on ite */}
      {ite ? (
        <div className='expensecontainer'>
          <ExpenseDrawer ite={ite} />
          <CategoryPage ite={ite} />
        </div>
      ) : (
        <div className='expensecontainer'>
          <ExpenseDrawer />
         
          <CategoryPage />
        </div>
      )}
    </div>
  );
};

export default Header;
