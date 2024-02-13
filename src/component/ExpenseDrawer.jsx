import React, { useState } from 'react';
import './sidedrawer.css';
import { FaSearch } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';

let productDet = [
  { id: 1, name: "petrol", amt: 0 },
  { id: 2, name: "Rent", amt: 0 },
  { id: 3, name: "salary", amt: 0 },
  { id: 4, name: "Tea", amt: 0 },
  { id: 5, name: "Transport", amt: 0 },
];

const ExpenseDrawer = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleExpense = () => {
    // Your expense handling logic here
  };

  const handleThreeDotsClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  const handleEdit = () => {
    // Your edit logic using selectedItemId
  };

  const handleDelete = () => {
    const updatedProductDet = productDet.filter(item => item.id !== selectedItemId);
    productDet = [...updatedProductDet];
    setSelectedItemId(null);
  };

  const handleOptionsClick = (e) => {
    e.stopPropagation(); // Prevent closing options when clicking inside the box
  };

  const handleOptionsClose = () => {
    setSelectedItemId(null);
  };

  return (
    <div className='drawer' onClick={handleOptionsClose}>
      <div className='drawer-container'>
        <div className='searchbox'>
          <div>
            <FaSearch />
          </div>
          <div>
            <IoIosAddCircleOutline style={{ position: "absolute", marginLeft: "30px", marginTop: "8px", color: "white" }} />
            <Link to="/expense">
              <button onClick={handleExpense}>Add Expense</button>
            </Link>
          </div>
        </div>
        <div className='cat-amt'>
          <div>
            <button>Category</button>
          </div>
          <div>
            <button>Amount</button>
          </div>
        </div>
      </div>

      {/* Render productDet items */}
      {productDet.map((item) => (
        <div className='prodet' key={item.id}>
          <div>
            <p>{item.name}</p>
          </div>
          <div className='options' onClick={handleOptionsClick}>
            <BsThreeDotsVertical onClick={() => handleThreeDotsClick(item.id)} />
            {selectedItemId === item.id && (
              <div>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseDrawer;
