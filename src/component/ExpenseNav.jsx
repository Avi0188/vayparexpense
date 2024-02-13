import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './expanseNav.css';
import { FaCalculator } from 'react-icons/fa';

const ExpenseNav = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitchToggle = () => {
    setIsSwitchOn((prev) => !prev);
  };

  return (
    <div className="expense-nav">
      <div>
        <span className='exp'>Expense</span>
      </div>
      <div>
        <span className='gst'>GST</span>
      </div>
      <div className="switch-container">
        <label className="switch">
          <input type="checkbox" onChange={handleSwitchToggle} checked={isSwitchOn} />
          <span className="slider"></span>
        </label>
      </div>
      <div className='right'>
        <div className="calculator-icon">
          <FaCalculator />
        </div>
        
        <Link to="/">
          <div className="cross-container">
            &#10006;
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ExpenseNav;
