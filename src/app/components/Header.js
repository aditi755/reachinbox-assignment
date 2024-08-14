
import React from 'react';

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <div style={{
      width: "1483px", 
      height: "64px", 
      position: "fixed", 
      top: "0px", 
      left: "55px", 
      border: "1px solid #343A40", 
      padding: "24px", 
      gap: "24px", 
      backgroundColor: "#343A40", 
      display: "flex", 
      justifyContent: "space-between",
      color: "white"
    }}>
      <p>Onebox</p>

      <div className="flex justify-evenly w-52">
      <label className="switch">
          <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
          <span className="slider round"></span>
        </label>
        <p>Tim workspace</p>
      </div>
    </div>
  );
};

export default Header;
