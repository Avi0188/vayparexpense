import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';

const Navbar = () => {
  const [showDot, setShowDot] = useState(true);
  const [inputClicked, setInputClicked] = useState(false);
  const [showButton, setShowButton] = useState(false); 
  const inputRef = useRef(null);

  const handleInputClick = () => {
    setShowDot(false);
    setInputClicked(true);
    setShowButton(true);
  };

  const handleDocumentClick = (event) => {
  
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setShowDot(true);
      setInputClicked(false);
      setShowButton(false); 
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className='navbar'>
      <div className='inputContainer'>
        {showDot && <div className='dot'></div>}
        <div
          className={`searchdiv ${inputClicked ? 'inputClicked' : ''}`}
          ref={inputRef}
        >
          <input
            type='search'
            placeholder='Enter Business Name'
            onClick={handleInputClick}
          />
        </div>
        {showButton && (
          <div className='buttondiv'>
            <button>Save</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
