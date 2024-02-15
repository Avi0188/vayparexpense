import React, { useState } from 'react';
import './expense.css';
import ExpenseNav from './ExpenseNav';
import { FaTrash } from 'react-icons/fa';
import Modal from 'react-modal';
import ExpenseFooter from './ExpenseFooter';
const Expense = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExpenseType, setSelectedExpenseType] = useState('')
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
      <div className="sub-cont" style={{border:"1px solid white"}} >
        <div className="header">
          <div className="expense-cat" >
            <label htmlFor="">
              <select name="Expense category" id="filter">
              {/* <option value="">Expense category</option> */}
                <option value="">+Add Expenses</option>
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
                <td style={{width:"226px"}} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                <label htmlFor="" >
                 {row.slNo} 
                 
                  {hoveredRow === index && (
                    <span className="delete-icon" onClick={() => handleDeleteRow(index)}>
                      <FaTrash />
                    </span>)}
                  </label> 
                  
                </td>
                <td style={{width:"229px"}}>
                  <input
                    type="text"
                    value={row.item}
                    onChange={(e) => handleInputChange(index, 'item', e.target.value)}
                  />
                </td>
                <td style={{width:"226px"}}>
                  <input
                    type="text"
                    value={row.qty}
                    onChange={(e) => handleInputChange(index, 'qty', e.target.value)}
                  />
                </td>
                <td style={{width:"234px"}}> 
                  <input
                    type="text"
                    value={row.pricePerUnit}
                    onChange={(e) => handleInputChange(index, 'pricePerUnit', e.target.value)}
                  />
                </td>
                <td style={{width:"226px"}}>
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
       
        <div className="payment">
          <div>
            <select name="" id="">
              <option value="Cash">Cash</option>
              <option value="Upi">Upi</option>
            </select>
            <button className="paymentbtn">Add Payment</button>
          </div>
          <div className="select-pay">
            <div>
              <input type="checkbox" className="check" />
              <label htmlFor="" className="round">
                Round
              </label>
              <input type="text" placeholder="0" />
            </div>
            <div>
              <p>Total</p>
              <input type="text" className="Total" />
            </div>
          </div>
        </div>
      </div>
     <ExpenseFooter />
    </div>
  );
};

export default Expense;
