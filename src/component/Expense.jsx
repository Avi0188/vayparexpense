import React, { useState } from 'react';
import './expense.css';
import ExpenseNav from './ExpenseNav';
import { FaTrash } from 'react-icons/fa';

const Expense = () => {
  const [tableData, setTableData] = useState([
    { slNo: 1, item: '', qty: '', pricePerUnit: '', amount: '' },
  ]);

  const [hoveredRow, setHoveredRow] = useState(null);

  const handleAddRow = () => {
    setTableData((prevData) => [
      ...prevData,
      {
        slNo: prevData.length + 1,
        item: '',
        qty: '',
        pricePerUnit: '',
        amount: '',
      },
    ]);
  };

  const handleDeleteRow = (index) => {
    setTableData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleInputChange = (index, field, value) => {
    setTableData((prevData) =>
      prevData.map((row, i) => (i === index ? { ...row, [field]: value } : row))
    );
  };

  const handleMouseEnter = (index) => {
    setHoveredRow(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  return (
    <div>
      <ExpenseNav />
      <div className="sub-cont">
        <div className="header">
          <div className="expense-cat">
            <label htmlFor="">
              <select name="" id="filter">
                <option value="">Petrol</option>
                <option value="">Salary</option>
              </select>
            </label>
          </div>
          <div className="right-input">
            <div>
              <label htmlFor="">
                <input type="text" placeholder="Expense No" />
              </label>
            </div>
            <div>
  <label htmlFor="">
    <input type="date" placeholder="" />
  </label>
</div>

          </div>
        </div>
        <div className='tablediv'>
<table className='table'>
      
          <thead className='thead'>
          
            <tr>
               <th>#</th>
              </tr>
             <tr> <th>ITEM</th></tr>
             <tr>    <th>PRICE/UNIT</th> </tr>
             <tr><th>QTY</th></tr>
             <tr> <th>AMOUNT</th></tr>
             
          
             

          </thead>
          <tbody className='tbody'>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                  {row.slNo}
                  {hoveredRow === index && (
                    <span className="delete-icon" onClick={() => handleDeleteRow(index)}>
                      <FaTrash />
                    </span>
                  )}
                </td>
                <td>
                  <input
                    type="text"
                    value={row.item}
                    onChange={(e) => handleInputChange(index, 'item', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.qty}
                    onChange={(e) => handleInputChange(index, 'qty', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.pricePerUnit}
                    onChange={(e) => handleInputChange(index, 'pricePerUnit', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.amount}
                    onChange={(e) => handleInputChange(index, 'amount', e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <div className='bottom'>
           <div className='add'>
           <button onClick={handleAddRow}>ADD ROW</button>
        </div>
        <div>
          <span>Total</span>
        </div>
        </div>
       
       
      </div>
    </div>
  );
};

export default Expense;
