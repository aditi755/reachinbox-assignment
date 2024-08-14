
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

<label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
        className="sr-only peer"
      />
      <div
        className={`relative w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600`}
      ></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
      
      </span>
    </label>

        <p>Tim workspace</p>
      </div>
    </div>
  );
};

export default Header;
