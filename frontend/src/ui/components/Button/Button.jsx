
import React from 'react'

const Button = ({ className, onClick,children }) => {
  return (
    <button 
    onClick={onClick}
      className={`py-2 px-6 rounded-[10px] font-[400] text-small lg:text-small-medium bg-[#3874FF] text-white  ${className} `}
    >
      {children}
    </button>
  )
}

export default Button;
