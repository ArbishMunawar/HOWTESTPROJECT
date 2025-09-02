
import React from 'react'

const WriteForUsButton = ({ className, onClick,children }) => {
  return (
    <button 
    onClick={onClick}
      className={`border border-[#3874FF] w-[150px] text-[#3874FF] text-[16px] font-[500] px-4 py-1 rounded hover:bg-blue-50 text-sm  ${className} `}
    >
      {children}
    </button>
  )
}
// border border-blue-500 text-blue-500 px-4 py-1 rounded hover:bg-blue-50 text-sm
export default WriteForUsButton;
