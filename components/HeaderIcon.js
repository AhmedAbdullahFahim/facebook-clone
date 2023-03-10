import React from 'react'

function HeaderIcon({ Icon, active }) {
  return (
    <div className='flex items-center cursor-pointer md:px-3 lg:px-5 xl:px-8 sm:h-14 rounded-xl active:border-b-2 active:border-blue-500 group'>
      <Icon
        className={`h-5 text-gray-500 text-center sm:h-7 mx-auto group-hover:text-blue-500 ${
          active && 'text-blue-500'
        }`}
      />
    </div>
  )
}

export default HeaderIcon
