import React from 'react';

const Icon = ({ currColor, color, isActive, children, onClick }) => {
  return (
    <div
      className={`p-1 rounded cursor-pointer ${currColor && isActive ? 'bg-[#2F3030]' : ''} ${!currColor && isActive ? 'bg-gray-200' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Icon;
