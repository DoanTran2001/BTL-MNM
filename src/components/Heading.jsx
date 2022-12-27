import React from 'react'

function Heading({ children }) {
  return (
    <h1 className='text-[#ff5622] text-2xl pb-4 font-medium border-b relative border-[#eaeaea] text-center before:absolute before:w-20 before:h-[2px] before:bg-[#ff5622] before:bottom-0 before:left-2/4 before:-translate-x-2/4'>
      {children}
    </h1>
  )
}

export default Heading
